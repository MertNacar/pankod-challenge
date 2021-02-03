import React from "react";
import { withRouter } from "react-router";

const Header: React.FC<any> = (props) => {
  function goHomeScreen() {
    props.history.goBack();
  }
  return (
    <header>
      <nav id="myHeader" className="shadow navbar navbar-dark bg-primary">
        <button
          className="px-5 text-light btn btn-outline-primary"
          onClick={() => goHomeScreen()}
        >
          <h4>Demo Streaming</h4>
        </button>
        <span className="px-2">
          <p className="px-3 navbar-text text-light">Log in</p>

          <button className="px-2 btn btn-dark" type="submit">
            Start your free trial
          </button>
        </span>
      </nav>
    </header>
  );
};

export default withRouter(Header);
