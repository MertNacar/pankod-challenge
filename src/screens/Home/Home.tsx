import React from "react";
import SubNavBar from "../../components/SubNavbar";
import MainTile from "../../components/MainTile";
import clipart from "../../assets/images/clipart.png";

const Home: React.FC = () => {
  return (
    <div>
      <SubNavBar title="Popular Titles" />
      <div className="d-flex justify-content-start p-5">
        <span className="px-3">
          <MainTile
            route="/series"
            image={clipart}
            alt="series image"
            title="SERIES"
          />
        </span>
        <span className="px-3">
          <MainTile
            route="/movies"
            image={clipart}
            alt="movies image"
            title="MOVIES"
          />
        </span>
      </div>
    </div>
  );
};

export default Home;
