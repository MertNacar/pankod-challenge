import React, { useState, useEffect, FormEvent } from "react";
import * as Redux from "redux";
import { connect } from "react-redux";
import SubNavBar from "../../components/SubNavbar";
import Content from "../../components/Content";
import LoadingScreen from "../Loading/LoadingScreen";
import ErrorScreen from "../Error/ErrorScreen";
import {
  GetAllData,
  GetSearchedData,
  GetOrderedNumberData,
  GetOrderedTextData,
} from "../../services/MovieSerieService";
import { IReduxState, IDispatchProps } from "../../store/store";
import { updateMovies } from "../../store/movies/action";
import { MoviesActionTypes } from "../../store/movies/types";
import { IMoviesState } from "./types";
// import "bootstrap";

const MoviesScreen: React.FC<any> = (props) => {
  const [movies, setMovies] = useState<IMoviesState>({ total: 0, entries: [] });
  const [dropdownValue, setDropdownValue] = useState("Sort by");
  const [searchValue, setSearchValue] = useState<string>("");
  const [loading, setLoading] = useState<Boolean>(true);
  const [err, setErr] = useState<Boolean>(false);

  useEffect(() => {
    if (props.movies.entries.length === 0) {
      getData();
    } else if (searchValue.length >= 3) {
      getSearchedData();
    } else if (dropdownValue !== "Sort by") {
      getOrderedData();
    }
  }, [searchValue, dropdownValue]);

  async function getData() {
    try {
      let res = await GetAllData("feed/sample.json", 21, "movie");
      if (!res.err) {
        props.updateMovies({ total: res.values.length, entries: res.values });
        setMovies({ total: res.values.length, entries: res.values });
        setLoading(false);
      } else throw new Error();
    } catch {
      setErr(true);
      setLoading(false);
    }
  }

  function getSearchedData() {
    setLoading(true);
    let searches = GetSearchedData(props.movies.entries, searchValue);
    setMovies({ total: searches.length, entries: searches });
    setLoading(false);
  }

  //get text dropdown and order from services
  function getOrderedData() {
    let dropValues = dropdownValue.split(" ");
    let ordereds;
    if (dropValues[0] === "Title") {
      ordereds = GetOrderedTextData(
        props.movies.entries,
        "title",
        dropValues[1]
      );
    } else {
      ordereds = GetOrderedNumberData(
        props.movies.entries,
        "releaseYear",
        dropValues[1]
      );
    }
    setMovies({ total: ordereds.length, entries: ordereds });
  }

  function getValueDropdown(value: string) {
    setDropdownValue(value);
  }

  function searchInput(e: FormEvent<HTMLInputElement>) {
    setSearchValue(e.currentTarget.value);
  }

  function searchClick() {
    getSearchedData();
  }

  if (err || loading) {
    return (
      <div>
        <SubNavBar title="Popular Movies" />
        {loading ? <LoadingScreen /> : <ErrorScreen />}
      </div>
    );
  } else {
    return (
      <Content
        title="Popular Movies"
        entries={movies.entries}
        dropdownEntries={[
          "Year ascending",
          "Year descending",
          "Title ascending",
          "Title descending",
        ]}
        searchValue={searchValue}
        searchChange={(e) => searchInput(e)}
        searchClick={() => searchClick()}
        searchPlaceholder="Search..."
        sendDropdownValue={(value: string) => getValueDropdown(value)}
        dropdownValue={dropdownValue}
      />
    );
  }
};

function mapStateToProps(state: IReduxState): IReduxState {
  return {
    movies: state.movies,
  };
}

function mapDispatchToProps(dispatch: Redux.Dispatch): IDispatchProps {
  return {
    updateMovies: (movies: IMoviesState): MoviesActionTypes =>
      dispatch(updateMovies(movies)),
  };
}

export default connect<IReduxState, IDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(MoviesScreen);
