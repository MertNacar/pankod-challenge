import React, { useState, useEffect } from "react";
import SubNavBar from "../../components/SubNavbar";
import SeriesMoviesCard from "../../components/SeriesMoviesCard";
import { get } from "../../utils/httpHelper";

const Series: React.FC = () => {
  const [series, setSeries] = useState<Object>({});
  const [loading, setLoading] = useState<Boolean>(true);

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

  return (
    <div>
      <SubNavBar title="Popular Series" />
      <div className="d-flex justify-content-start flex-wrap p-5">
        <span className="p-1">
          <SeriesMoviesCard
            title="hey"
            image="https://streamcoimg-a.akamaihd.net/000/128/61/12861-PosterArt-ec32a81986a45eac7e080112075ab466.jpg"
            alt="asdsa"
          />
        </span>
      </div>
    </div>
  );
};

export default Series;
