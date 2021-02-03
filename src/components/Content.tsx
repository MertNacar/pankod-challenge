import React, { FormEventHandler } from "react";
import SubNavBar from "./SubNavbar";
import SearchBox from "./SearchBox";
import Dropdown from "./Dropdown";
import SeriesMoviesList from "./SeriesMoviesList";

interface IProps {
  title: string;
  entries: Array<Object>;
  dropdownEntries: Array<string>;
  searchValue: string;
  searchChange: FormEventHandler<HTMLInputElement>;
  searchClick: FormEventHandler<HTMLButtonElement>;
  searchPlaceholder: string;
  sendDropdownValue: (value: string) => void;
  dropdownValue: string;
}

const Content: React.FC<IProps> = (props) => {
  return (
    <div>
      <SubNavBar title={props.title} />
      <div className="m-5">
        <div
          className="d-flex flex-column flex-sm-row justify-content-between m-3 h-100"
          style={{ width: "90%" }}
        >
          <SearchBox
            searchPlaceholder={props.searchPlaceholder}
            searchValue={props.searchValue}
            searchChange={props.searchChange}
            searchClick={props.searchClick}
          />

          <Dropdown
            dropdownValue={props.dropdownValue}
            dropdownEntries={props.dropdownEntries}
            sendDropdownValue={props.sendDropdownValue}
          />
        </div>
        <div className="d-flex justify-content-start flex-wrap mx-3">
          <SeriesMoviesList values={props.entries} classList="pr-3 pt-3 pb-3" />
        </div>
      </div>
    </div>
  );
};

export default Content;
