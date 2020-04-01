import React from "react";

interface IProp {
  route: string;
  image: string;
  alt: string;
  title: string;
}

const SubNavBar: React.FC<IProp> = (props) => {
  return (
    <div className="card">
      <a href={props.route}>
        <img
          src={props.image}
          className="card-img-top"
          alt={props.alt}
          style={{ maxHeight: 220, maxWidth: 180 }}
        />
        <div className="card-img-overlay d-flex align-items-center justify-content-center">
          <h3 className="card-title text-light">{props.title}</h3>
        </div>
      </a>
    </div>
  );
};

export default SubNavBar;
