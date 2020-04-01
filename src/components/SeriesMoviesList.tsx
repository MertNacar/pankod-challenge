import React from "react";
import SeriesMoviesCard from "./SeriesMoviesCard";
interface IProp {
  values: Array<Object>;
  classList: string;
}

const SeriesMoviesList: React.FC<IProp> = props => {
  let list = props.values.map((item: any, index: number) => {
    return (
      <span key={index} className={props.classList}>
        <SeriesMoviesCard
          title={item.title}
          image={item.images["Poster Art"].url}
          alt={item.title}
        />
      </span>
    );
  });
  return <>{list}</>;
};

export default SeriesMoviesList;
