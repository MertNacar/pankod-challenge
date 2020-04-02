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
  GetOrderedTextData
} from "../../services/MovieSerieService";
import { IReduxState, IDispatchProps } from "../../store/store";
import { updateSeries } from "../../store/series/action";
import { SeriesActionTypes } from "../../store/series/types";
import { ISeriesState } from "./types";
import "bootstrap";

const SeriesScreen: React.FC<any> = props => {
  const [series, setSeries] = useState<ISeriesState>({ total: 0, entries: [] });
  const [dropdownValue, setDropdownValue] = useState("Sort by");
  const [searchValue, setSearchValue] = useState<string>("");
  const [loading, setLoading] = useState<Boolean>(true);
  const [err, setErr] = useState<Boolean>(false);

  useEffect(() => {
    if (props.series.entries.length === 0) {
      getData();
    } else if (searchValue.length >= 3) {
      getSearchedData();
    } else if (dropdownValue !== "Sort by") {
      getOrderedData();
    }
  }, [searchValue, dropdownValue]);

  async function getData() {
    try {
      let res = await GetAllData("feed/sample.json", 21, "series");
      if (!res.err) {
        props.updateSeries({ total: res.values.length, entries: res.values });
        setSeries({ total: res.values.length, entries: res.values });
        setLoading(false);
      } else throw new Error();
    } catch {
      setErr(true);
      setLoading(false);
    }
  }

  function getSearchedData() {
    setLoading(true);
    let searches = GetSearchedData(props.series.entries, searchValue);
    setSeries({ total: searches.length, entries: searches });
    setLoading(false);
  }

   //get text dropdown and order from services
  function getOrderedData() {
    let dropValues = dropdownValue.split(" ");
    let ordereds;
    if (dropValues[0] === "Title") {
      ordereds = GetOrderedTextData(
        props.series.entries,
        "title",
        dropValues[1]
      );
    } else {
      ordereds = GetOrderedNumberData(
        props.series.entries,
        "releaseYear",
        dropValues[1]
      );
    }
    setSeries({ total: ordereds.length, entries: ordereds });
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
      <Content
        subTitle="Popular Series"
        entries={series.entries}
        dropdownEntries={[
          "Year ascending",
          "Year descending",
          "Title ascending",
          "Title descending"
        ]}
        searchValue={searchValue}
        searchChange={e => searchInput(e)}
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
    series: state.series
  };
}

function mapDispatchToProps(dispatch: Redux.Dispatch): IDispatchProps {
  return {
    updateSeries: (series: ISeriesState): SeriesActionTypes =>
      dispatch(updateSeries(series))
  };
}

export default connect<IReduxState, IDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(SeriesScreen);
