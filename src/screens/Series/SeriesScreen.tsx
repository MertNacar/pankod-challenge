import React, { useState, useEffect, FormEvent } from "react";
import * as Redux from "redux";
import { connect } from "react-redux";
import SubNavBar from "../../components/SubNavbar";
import SeriesMoviesList from "../../components/SeriesMoviesList";
import SearchBox from "../../components/SearchBox";
import LoadingScreen from "../Loading/LoadingScreen";
import ErrorScreen from "../Error/ErrorScreen";
import { IReduxState, IStateProps, IDispatchProps } from "../../store/store";
import { updateSeries } from "../../store/series/action";
import { SeriesActionTypes, ISeries } from "../../store/series/types";
import { ISeriesState } from "./types";
import { get } from "../../utils/httpHelper";
import "bootstrap";

const SeriesScreen: React.FC<any> = props => {
  const [series, setSeries] = useState<ISeriesState>({ total: 0, entries: [] });
  const [loading, setLoading] = useState<Boolean>(true);
  const [err, setErr] = useState<Boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    if (props.series.entries.length === 0) {
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
              item.programType === "series"
            ) {
              newTotal++;
              return item;
            }
          })
          .sort((a: any, b: any) => {
            return a.title - b.title;
          });
        props.updateSeries({ total: 21, entries: filteredValues });
        setSeries({ total: 21, entries: filteredValues });
        setLoading(false);
      } else throw new Error();
    } catch {
      setErr(true);
      setLoading(false);
    }
  }

  function searchInput(e: FormEvent<HTMLInputElement>) {
    setSearchValue(e.currentTarget.value);
    if (e.currentTarget.value.length >= 3) searchClick();
  }

  function searchClick() {}

  if (err === true) {
    return (
      <div>
        <SubNavBar title="Popular Series" />
        <ErrorScreen />
      </div>
    );
  } else if (loading === true) {
    return (
      <div>
        <SubNavBar title="Popular Series" />
        <LoadingScreen />
      </div>
    );
  } else {
    return (
      <div>
        <SubNavBar title="Popular Series" />
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
                id="dropdownSeries"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sort by
              </button>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="dropdownSeries"
              >
                <button className="dropdown-item" type="button">
                  Year descending
                </button>
                <button className="dropdown-item" type="button">
                  Year ascending
                </button>
                <button className="dropdown-item" type="button">
                  Title descending
                </button>
                <button className="dropdown-item" type="button">
                  Title Ascending
                </button>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-start flex-wrap mx-3">
            <SeriesMoviesList
              values={series.entries}
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
    series: state.series
  };
}

function mapDispatchToProps(dispatch: Redux.Dispatch): IDispatchProps {
  return {
    updateSeries: (series: ISeries): SeriesActionTypes =>
      dispatch(updateSeries(series))
  };
}

export default connect<IStateProps, IDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(SeriesScreen);
