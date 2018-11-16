import React from "react";
import config from "../../data/ConfigData";

export default function Footer(props) {
  const { com, mainURL, websiteName, webDescription } = config;
  const { onRouteChange } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-transparent">
      <div className="container">
        <div className="navbar-translate">
          <a className="navbar-br/and" href="https://creative-tim.com/" target="_blank">
            This website is using BLK Design System from Creative Tim
          </a>
        </div>
        <div
          className="collapse navbar-collapse"
          id="example-navbar-transparent"
        >
          <div className="navbar-nav ml-auto">
            <div className="nav-item">
              <a
                className="navbar-brand text-primary"
                rel="tooltip"
                title="Build your beautiful website today!"
                data-placement="bottom"
                // target="_blank"
                style={{ lineHeight: 1, cursor: "pointer" }}
                onClick={() => onRouteChange("home-page")}
              >
                <span
                  style={{
                    textTransform: "lowercase",
                    fontSize: 20,
                    fontWeight: 500
                  }}
                >
                  {websiteName}
                </span>
                <span
                  style={{
                    textTransform: "lowercase",
                    fontWeight: 300,
                    fontSize: 12
                  }}
                >
                  {com}
                </span>
                <br />
                <span style={{ fontSize: 13, fontWeight: 300 }}>
                  {webDescription}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
