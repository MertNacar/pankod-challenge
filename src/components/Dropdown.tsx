import React, { useEffect } from "react";

interface IProp {
  dropdownValue: string;
  dropdownEntries: Array<string>;
  sendDropdownValue: (value: string) => void;
}

const Dropdown: React.FC<IProp> = (props) => {
  let dropdownItems = props.dropdownEntries.map(
    (item: string, index: number) => {
      return (
        <button key={index} className="dropdown-item">
          {item}
        </button>
      );
    }
  );

  useEffect(() => {
    const dropdown = document.getElementById("dropdownMovies");
    const dropdownButtons = dropdown?.querySelectorAll("button");
    dropdownButtons?.forEach((btn) => {
      btn?.addEventListener("click", (e) => handleGetDropdownText(e));
    });

    return () => {
      dropdownButtons?.forEach((btn) => {
        btn?.removeEventListener("click", (e) => handleGetDropdownText(e));
      });
    };
  }, []);

  function handleGetDropdownText(e: any) {
    props.sendDropdownValue(e.target.innerText);
  }

  return (
    <div className="dropdown mt-5 mt-sm-0">
      <button
        className="btn btn-light dropdown-toggle"
        type="button"
        id="orderButton"
        data-toggle="dropdown"
      >
        {props.dropdownValue}
      </button>
      <div id="dropdownMovies" className="dropdown-menu dropdown-menu-right">
        {dropdownItems}
      </div>
    </div>
  );
};

export default Dropdown;
