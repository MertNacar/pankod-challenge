import React from "react";
import "bootstrap";

interface Prop {
  title: string;
}

const SubNavBar: React.FC<Prop> = (props: Prop) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <h4 className="navbar-brand">{props.title}</h4>
    </nav>
  );
};

export default SubNavBar;
