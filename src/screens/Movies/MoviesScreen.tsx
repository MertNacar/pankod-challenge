import React, { useState, useEffect, FormEvent } from "react";
import * as Redux from "redux";
import { connect } from "react-redux";
import SubNavBar from "../../components/SubNavbar";
import SearchBox from "../../components/SearchBox";
import SeriesMoviesList from "../../components/SeriesMoviesList";
import LoadingScreen from "../Loading/LoadingScreen";
import ErrorScreen from "../Error/ErrorScreen";
import { IReduxState, IStateProps, IDispatchProps } from "../../store/store";
import { updateMovies } from "../../store/movies/action";
import { MoviesActionTypes, IMovies } from "../../store/movies/types";
import { IMoviesState } from "./types";
import { get } from "../../utils/httpHelper";

const MoviesScreen: React.FC<any> = props => {
  const [movies, setMovies] = useState<IMoviesState>({ total: 0, entries: [] });
  const [loading, setLoading] = useState<Boolean>(true);
  const [err, setErr] = useState<Boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    if (props.movies.entries.length === 0) {
      getData();
    }
  }, []);

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
        console.log('props.movies', props.movies)
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
    console.log('props.movies', props.movies)
    let filteredValues = props.movies.map((item: any) => {
      return item.search(searchValue) !== -1 ? true : false;
    });
    console.log('filteredValues', filteredValues)
    setMovies({ total: filteredValues.length, entries: filteredValues });
    setLoading(false);
  }

  /*function getOrderedData() {
    setLoading(true);
    props.movies.filter((item: any) => {
      return item.search(searchValue);
    });
    setMovies({ total: 21, entries: filteredValues });
    setLoading(false);
  }

  function normalizationDropdown(e) {
    $("#dropdownMovies li").on("click", function() {
      $("#datebox").val($(this).text());
    });
  }*/

  function searchInput(e: FormEvent<HTMLInputElement>) {
    setSearchValue(e.currentTarget.value);
    if (e.currentTarget.value.length >= 3) getSearchedData();
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
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sort by
              </button>
              <div
                id="dropdownSeries"
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <a className="dropdown-item">Year descending</a>
                </li>
                <li>
                  <a className="dropdown-item">Year ascending</a>
                </li>
                <li>
                  <a className="dropdown-item">Title descending</a>
                </li>
                <li>
                  <a className="dropdown-item">Title Ascending</a>
                </li>
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

function mapStateToProps(state: IReduxState): IStateProps {
  return {
    movies: state.movies
  };
}

function mapDispatchToProps(dispatch: Redux.Dispatch): IDispatchProps {
  return {
    updateMovies: (movies: IMovies): MoviesActionTypes =>
      dispatch(updateMovies(movies))
  };
}

export default connect<IStateProps, IDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(MoviesScreen);
