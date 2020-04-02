import React from "react";

const Header: React.FC = () => {
  return (
    <header>
      <nav className="shadow navbar navbar-dark bg-primary">
        <a className="px-5 text-light text-decoration-none" href="http://localhost:3000">
          <h4>Demo Streaming</h4>
        </a>
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

export default Header;
