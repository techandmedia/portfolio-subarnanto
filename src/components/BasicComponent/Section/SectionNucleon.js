import React from "react";

export default function Nucleon() {
  return (
    <div className="section section-nucleo-icons">
      <img src="assets/img/path3.png" className="path" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12">
            <h2 className="title">Nucleo Icons</h2>
            <h4 className="description">
              BLK• Design System PRO comes with 100 custom icons made by our
              friends from NucleoApp. The official package contains over 2.100
              thin icons which are looking great in combination with BLK• Design
              System PRO Make sure you check all of them and use those that you
              like the most.
            </h4>
            <div className="btn-wrapper">
              <a
                href="./docs/1.0/foundation/icons.html"
                className="btn btn-primary btn-round"
                target="_blank"
              >
                View Demo Icons
              </a>
              <a
                href="https://nucleoapp.com/?ref=1712"
                className="btn btn-primary btn-simple btn-round btn-lg"
                target="_blank"
              >
                View All Icons
              </a>
            </div>
          </div>
        </div>
        <div className="blur-hover">
          <a href="./docs/1.0/foundation/icons.html">
            <div className="icons-container blur-item on-screen mt-5">
              {/* <!-- Center --> */}
              <i className="icon tim-icons icon-coins" />
              {/* <!-- Right 1 --> */}
              <i className="icon icon-sm tim-icons icon-spaceship" />
              <i className="icon icon-sm tim-icons icon-money-coins" />
              <i className="icon icon-sm tim-icons icon-link-72" />
              {/* <!-- Right 2 --> */}
              <i className="icon tim-icons icon-send" />
              <i className="icon tim-icons icon-mobile" />
              <i className="icon tim-icons icon-wifi" />
              {/* <!-- Left 1 --> */}
              <i className="icon icon-sm tim-icons icon-key-25" />
              <i className="icon icon-sm tim-icons icon-atom" />
              <i className="icon icon-sm tim-icons icon-satisfied" />
              {/* <!-- Left 2 --> */}
              <i className="icon tim-icons icon-gift-2" />
              <i className="icon tim-icons icon-tap-02" />
              <i className="icon tim-icons icon-wallet-43" />
            </div>
            <span className="blur-hidden h5 text-primary">
              Eplore all the 21.000+ Nucleo Icons
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
