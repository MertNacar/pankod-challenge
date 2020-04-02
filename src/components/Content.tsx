import React, { FormEventHandler } from "react";
import SubNavBar from "./SubNavbar";
import SearchBox from "./SearchBox";
import SeriesMoviesList from "./SeriesMoviesList";
import $ from "jquery";

interface IProps {
  subTitle: string;
  entries: Array<Object>;
  dropdownEntries: Array<string>;
  searchValue: string;
  searchChange: FormEventHandler<HTMLInputElement>;
  searchClick: FormEventHandler<HTMLButtonElement>;
  searchPlaceholder: string;
  sendDropdownValue: (value: string) => void;
  dropdownValue: string;
}

const Content: React.FC<IProps> = props => {
  let dropdownItems = props.dropdownEntries.map((item: any, index: number) => {
    return (
      <button key={index} className="dropdown-item">
        {item}
      </button>
    );
  });

  //get value dropdown and send to parent
  function getValueDropdown() {
    $("#dropdownMovies button").on("click", function() {
      if ($(this).text() !== props.dropdownValue) {
        props.sendDropdownValue($(this).text());
      }
    });
  }

  return (
    <div>
      <SubNavBar title={props.subTitle} />
      <div className="m-5">
        <div
          className="d-flex flex-column flex-sm-row justify-content-between m-3"
          style={{ width: "90%" }}
        >
          <SearchBox
            searchPlaceholder={props.searchPlaceholder}
            searchValue={props.searchValue}
            searchChange={props.searchChange}
            searchClick={props.searchClick}
          />

          <div className="dropdown mt-sm-5">
            <button
              className="btn btn-light dropdown-toggle"
              type="button"
              id="orderButton"
              data-toggle="dropdown"
              onClick={() => getValueDropdown()}
            >
              {props.dropdownValue}
            </button>
            <div
              id="dropdownMovies"
              className="dropdown-menu dropdown-menu-right"
            >
              {dropdownItems}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-start flex-wrap mx-3">
          <SeriesMoviesList values={props.entries} classList="pr-3 pt-3 pb-3" />
        </div>
      </div>
    </div>
  );
};

export default Content;
