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
      <form className="form-inline" >
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
          type="submit"
        >
          <FaSearch color="white" />
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
