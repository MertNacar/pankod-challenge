import React, { FormEventHandler } from "react";
import { FaSearch } from "react-icons/fa";

interface IProp {
  searchPlaceholder: string;
  searchValue: string;
  searchChange: FormEventHandler<HTMLInputElement>;
  searchClick: FormEventHandler<HTMLButtonElement>;
}

const SearchBox: React.FC<IProp> = props => {
  return (
    <div className="d-flex" >
      <span className="form-inline" >
        <input
          className="form-control shadow"
          style={{ borderRadius: 0 }}
          type="search"
          value={props.searchValue}
          placeholder={props.searchPlaceholder}
          onChange={props.searchChange}
        />
        <button
          className="btn btn-primary"
          style={{ borderRadius: 0 }}
          onClick={props.searchClick}
        >
          <FaSearch color="white" />
        </button>
      </span>
    </div>
  );
};

export default SearchBox;
