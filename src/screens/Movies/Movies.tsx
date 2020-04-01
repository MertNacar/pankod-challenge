import React, { useState, useEffect, FormEvent } from "react";
import SubNavBar from "../../components/SubNavbar";
import SeriesMoviesCard from "../../components/SeriesMoviesCard";
import SearchBox from "../../components/SearchBox";
import { get } from "../../utils/httpHelper";

const Movies: React.FC = () => {
  const [series, setSeries] = useState<Object>({});
  const [loading, setLoading] = useState<Boolean>(true);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      let res = await get("feed/sample.json");
      if (!res.err) {
        setSeries(res.data);
        setLoading(false);
      } else throw new Error();
    } catch {
      setLoading(false);
    }
  }

  function searchInput(e: FormEvent<HTMLInputElement>) {
    setSearchValue(e.currentTarget.value);
  }

  function searchClick() {}

  return (
    <div>
      <SubNavBar title="Popular Movies" />
      <div className="m-5">
        <div className="d-flex flex-nowrap justify-content-between m-3">
          <SearchBox
            searchPlaceholder="Search..."
            searchValue={searchValue}
            searchChange={e => searchInput(e)}
            searchClick={() => searchClick()}
          />

          <div className="dropdown">
            <button
              className="btn btn-light dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Sort by
            </button>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">
                Year descending
              </a>
              <a className="dropdown-item" href="#">
                Year ascending
              </a>
              <a className="dropdown-item" href="#">
                Title descending
              </a>
              <a className="dropdown-item" href="#">
                Title Ascending
              </a>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-start flex-wrap mx-3">
          <span className="pr-1 pt-3 pb-5">
            <SeriesMoviesCard
              title="hey"
              image="https://streamcoimg-a.akamaihd.net/000/128/61/12861-PosterArt-ec32a81986a45eac7e080112075ab466.jpg"
              alt="asdsa"
            />
          </span>
          
        </div>
      </div>
    </div>
  );
};

export default Movies;
