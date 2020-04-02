import React from "react";
import "../assets/css/Footer.css";
const Footer: React.FC = () => {
  return (
    <footer className="d-flex bg-dark position-fixed fixed-bottom px-5">
      <div className="flex-cloumn w-100">
        <p className="text-light pt-5">
          Home | Terms and Conditions | Privacy Policy | Collection Statement |
          Help | Manage Account
        </p>

        <p className="text-light font-weight-light pt-1">
          Copyright 2016 DEMO Streaming. All Rights Reserved
        </p>

        <div className="row justify-content-between pb-5 pt-3">
          <div className="col-12 d-flex">
            <span className="social-image mr-auto">
              <img
                className="social-image pr-4"
                max-width="40"
                height="40"
                src="./assets/images/social/facebook-white.svg "
                alt="facebook-icon"
              />
              <img
                className="social-image pr-4"
                max-width="40"
                height="40"
                src="./assets/images/social/twitter-white.svg"
                alt="twitter-icon"
              />
              <img
                className="social-image pr-4"
                max-width="40"
                height="40"
                src="./assets/images/social/instagram-white.svg"
                alt="instagram-icon"
              />
            </span>

            <span className="ml-auto">
              <img
                className="store-image pr-4"
                max-width="135"
                height="40"
                src="./assets/images/store/app-store.svg"
                alt="app-store"
              />
              <img
                className="store-image pr-4"
                max-width="135"
                height="40"
                src="./assets/images/store/play-store.svg"
                alt="play-store"
              />
              <img
                className="store-image pr-4"
                max-width="135"
                height="40"
                src="./assets/images/store/windows-store.svg"
                alt="win-store"
              />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
