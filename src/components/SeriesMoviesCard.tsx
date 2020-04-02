import React from "react";
import "../assets/css/Card.css";

interface IProp {
  image: string;
  alt: string;
  title: string;
}

const SeriesMoviesCard: React.FC<IProp> = props => {
  return (
    <div className="card mycard-container">
      <img
        src={props.image}
        className="card-img-top img-responsive"
        alt={props.alt}
      />
      <div className="card-body mycard-body">
        <p className="card-text mycard-image">{props.title}</p>
      </div>
    </div>
  );
};

export default SeriesMoviesCard;
