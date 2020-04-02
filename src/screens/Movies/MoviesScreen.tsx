import React, { useState, useEffect, FormEvent } from "react";
import * as Redux from "redux";
import { connect } from "react-redux";
import SubNavBar from "../../components/SubNavbar";
import SearchBox from "../../components/SearchBox";
import SeriesMoviesList from "../../components/SeriesMoviesList";
import LoadingScreen from "../Loading/LoadingScreen";
import ErrorScreen from "../Error/ErrorScreen";
import { IReduxState, IDispatchProps } from "../../store/store";
import { updateMovies } from "../../store/movies/action";
import { MoviesActionTypes } from "../../store/movies/types";
import { IMoviesState } from "./types";
import { get } from "../../utils/httpHelper";
import $ from "jquery";

const MoviesScreen: React.FC<any> = props => {
  const [movies, setMovies] = useState<IMoviesState>({ total: 0, entries: [] });
  const [loading, setLoading] = useState<Boolean>(true);
  const [err, setErr] = useState<Boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [dropdownValue, setDropdownValue] = useState("Sort by");

  useEffect(() => {
    if (props.movies.entries.length === 0) {
      getData();
    } else if (searchValue.length >= 3) {
      getSearchedData();
    } else if (dropdownValue != "Sort by") {
      getOrderedData();
    }
  }, [searchValue, dropdownValue]);

  async function getData() {
    try {
      let res = await get("feed/sample.json");
      if (!res.err) {
        let newTotal: number = 0;
        let filteredValues = res.data.entries
          .filter((item: any) => {
            if (
              newTotal < 21 &&
              item.releaseYear >= 2010 &&
              item.programType === "movie"
            ) {
              newTotal++;
              return item;
            }
          })
          .sort((a: any, b: any) => {
            return a.title - b.title;
          });

        props.updateMovies({ total: newTotal, entries: filteredValues });
        setMovies({ total: newTotal, entries: filteredValues });
        setLoading(false);
      } else throw new Error();
    } catch {
      setErr(true);
      setLoading(false);
    }
  }

  function getSearchedData() {
    setLoading(true);
    let filteredValues = props.movies.entries.filter((item: any) => {
      return item.title.toLowerCase().search(searchValue.toLowerCase()) !== -1
        ? true
        : false;
    });
    setMovies({ total: filteredValues.length, entries: filteredValues });
    setLoading(false);
  }

  function getOrderedData() {
    let values = dropdownValue.split(" ");
    let chosenValue = values[0] === "Title" ? "title" : "releaseYear";
    let orderedValues = props.movies.entries.sort((prev: any, next: any) => {
      return values[1] === "ascending"
        ? prev[chosenValue] - next[chosenValue]
        : next[chosenValue] - prev[chosenValue];
    });
    setMovies({ total: orderedValues.length, entries: orderedValues });
  }

  function getValueDropdown() {
    $("#dropdownMovies a").on("click", function() {
      if ($(this).text() !== dropdownValue) {
        setDropdownValue($(this).text());
      }
    });
  }

  function searchInput(e: FormEvent<HTMLInputElement>) {
    setSearchValue(e.currentTarget.value);
  }

  function searchClick() {
    getSearchedData();
  }

  if (err === true) {
    return (
      <div>
        <SubNavBar title="Popular Movies" />
        <ErrorScreen />
      </div>
    );
  } else if (loading === true) {
    return (
      <div>
        <SubNavBar title="Popular Movies" />
        <LoadingScreen />
      </div>
    );
  } else {
    return (
      <div>
        <SubNavBar title="Popular Movies" />
        <div className="m-5">
          <div className="d-flex flex-nowrap justify-content-between m-3">
            <SearchBox
              searchPlaceholder="Search..."
              searchValue={searchValue}
              searchChange={e => searchInput(e)}
              searchClick={() => searchClick()}
            />

            <div className="dropdown">
              <button
                className="btn btn-light dropdown-toggle"
                type="button"
                id="orderButton"
                data-toggle="dropdown"
                onClick={() => getValueDropdown()}
              >
                {dropdownValue}
              </button>
              <div
                id="dropdownMovies"
                className="dropdown-menu dropdown-menu-right"
              >
                <a className="dropdown-item" href="#">
                  Year descending
                </a>

                <a className="dropdown-item" href="#">
                  Year ascending
                </a>

                <a className="dropdown-item" href="#">
                  Title descending
                </a>

                <a className="dropdown-item" href="#">
                  Title Ascending
                </a>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-start flex-wrap mx-3">
            <SeriesMoviesList
              values={movies.entries}
              classList="pr-1 pt-3 pb-5"
            />
          </div>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state: IReduxState): IReduxState {
  return {
    movies: state.movies
  };
}

function mapDispatchToProps(dispatch: Redux.Dispatch): IDispatchProps {
  return {
    updateMovies: (movies: IMoviesState): MoviesActionTypes =>
      dispatch(updateMovies(movies))
  };
}

export default connect<IReduxState, IDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(MoviesScreen);
