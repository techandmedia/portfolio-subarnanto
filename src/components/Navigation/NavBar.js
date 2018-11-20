import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import config from "../../data/ConfigData";

export default function NavBar(props) {
  const { com, websiteName, webDescription } = config;
  const { onRouteChange } = props;
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top navbar-transparent "
      color-on-scroll="100"
      style={{ paddingTop: 10, paddingBottom: 10 }}
    >
      <div className="container">
        <div className="navbar-translate">
          {/* eslint-disable-next-line */}
          <a
            className="navbar-brand"
            rel="tooltip"
            title="Build your beautiful website today!"
            data-placement="bottom"
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
          <button
            className="navbar-toggler navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navigation"
            aria-controls="navigation-index"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navigation"
        >
          <div className="navbar-collapse-header">
            <div className="row">
              <div className="col-6 collapse-brand">
                <a
                  className="text-primary"
                  href="/"
                  style={{
                    position: "absolute",
                    lineHeight: 0.7,
                    cursor: "pointer",
                    fontSize: 18,
                    fontWeight: 400
                  }}
                >
                  <span style={{ textTransform: "lowercase" }}>
                    {websiteName}
                  </span>
                  <span
                    style={{
                      textTransform: "lowercase",
                      fontWeight: 100,
                      fontSize: 9
                    }}
                  >
                    {com}
                  </span>
                  <br />
                  <span
                    style={{
                      position: "relative",
                      // marginTop:"-30px",
                      // lineHeight: 1,
                      fontSize: 10,
                      fontWeight: 300
                    }}
                  >
                    {webDescription}
                  </span>
                </a>
              </div>
              <div className="col-6 collapse-close text-right">
                <button
                  type="button"
                  className="navbar-toggler"
                  data-toggle="collapse"
                  data-target="#navigation"
                  aria-controls="navigation-index"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <FontAwesomeIcon
                    icon={["far", "window-close"]}
                    style={{ color: "white" }}
                  />
                </button>
              </div>
            </div>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item p-0">
              <a
                className="nav-link"
                rel="tooltip noopener noreferrer"
                title="Twitter"
                data-placement="bottom"
                href="https://twitter.com/wsh4and"
                target="_blank"
              >
                <span>
                  <FontAwesomeIcon
                    icon={["fab", "twitter"]}
                    className="fab text-white"
                  />
                  <span
                    style={{ marginLeft: 10 }}
                    className="d-lg-none d-xl-none"
                  >
                    Twitter
                  </span>
                </span>
              </a>
            </li>
            <li className="nav-item p-0">
              <a
                className="nav-link"
                rel="tooltip noopener noreferrer"
                title="Github"
                data-placement="bottom"
                href="https://github.com/techandmedia"
                target="_blank"
              >
                <span>
                  <FontAwesomeIcon
                    icon={["fab", "github"]}
                    className="text-white"
                  />
                  <span
                    style={{ marginLeft: 10 }}
                    className="d-lg-none d-xl-none"
                  >
                    Github
                  </span>
                </span>
              </a>
            </li>
            <li className="nav-item p-0">
              <a
                className="nav-link"
                rel="tooltip noopener noreferrer"
                title="Linkdin"
                data-placement="bottom"
                href="https://www.linkedin.com/in/eko-andri-subarnanto/"
              >
                <span>
                  <FontAwesomeIcon
                    icon={["fab", "linkedin"]}
                    className="text-white"
                  />
                  <span
                    style={{ marginLeft: 10 }}
                    className="d-lg-none d-xl-none"
                  >
                    LinkdIn
                  </span>
                </span>
              </a>
            </li>

            <li className="dropdown nav-item">
              <a
                href="#"
                className="dropdown-toggle nav-link"
                data-toggle="dropdown"
              >
                <span d-lg-none d-xl-none>
                  <FontAwesomeIcon
                    icon={["fas", "project-diagram"]}
                    className="text-white"
                  />
                  <span style={{ marginLeft: 6 }}>My Projects</span>
                </span>
              </a>
              <div className="dropdown-menu dropdown-with-icons">
                {/* eslint-disable-next-line */}
                <a
                  // href="current-project"
                  className="dropdown-item"
                  style={{ cursor: "pointer" }}
                  onClick={() => onRouteChange("project-current")}
                >
                  <FontAwesomeIcon
                    icon={["fas", "user-astronaut"]}
                    style={{ marginRight: 15 }}
                  />
                  Current Project
                </a>
                {/* eslint-disable-next-line */}
                <a
                  // href="examples/profile-page.html"
                  className="dropdown-item"
                  style={{ cursor: "pointer" }}
                  onClick={() => onRouteChange("project-past")}
                >
                  <FontAwesomeIcon
                    icon={["fas", "archive"]}
                    style={{ marginRight: 15 }}
                  />
                  Past Project
                </a>
              </div>
            </li>
            <li className="nav-item p-0">
              {/* eslint-disable-next-line */}
              <a
                className="nav-link"
                style={{ cursor: "pointer" }}
                rel="tooltip"
                title="Want to know more about me? Click me!"
                data-placement="bottom"
                onClick={() => onRouteChange("profile-page")}
              >
                <span>
                  <FontAwesomeIcon
                    icon={["far", "user"]}
                    className="text-white"
                  />
                  <span style={{ marginLeft: 7 }}>About Me</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
