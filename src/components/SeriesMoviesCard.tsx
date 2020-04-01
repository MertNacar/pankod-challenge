import React from "react";


interface IProp {
  image: string;
  alt: string;
  title: string;
}

const SeriesMoviesCard: React.FC<IProp> = (props) => {
  return (
    <div className="card" style={{ borderWidth: 0 }}>
      <img
        src={props.image}
        className="card-img-top img-responsive"
        alt={props.alt}
        style={{ maxHeight: 180, maxWidth: 150 }}
      />

      <p className="card-text">{props.title}</p>
    </div>
  );
};

export default SeriesMoviesCard;
