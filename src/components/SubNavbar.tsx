import React from "react";

interface IProp {
  title: string;
}

const SubNavBar: React.FC<IProp> = (props) => {
  return (
    <nav className="shadow navbar navbar-dark bg-dark">
      <h4 className="navbar-brand px-5">{props.title}</h4>
    </nav>
  );
};

export default SubNavBar;
