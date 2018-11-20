import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import blob from "../../assets/img/blob.png";
import triunghiuri from "../../assets/img/triunghiuri.png";
import waves from "../../assets/img/waves.png";
import cercuri from "../../assets/img/cercuri.png";
import ss from "../../assets/img/Screenshot (1).png";
import ss1 from "../../assets/img/Screenshot (8).png";
import ss2 from "../../assets/img/Screenshot (9).png";
import ss3 from "../../assets/img/Screenshot (20).png";

export default function CurrentProject() {
  return (
    <React.Fragment>
      <div className="page-header">
        <img src={blob} className="path" alt="Placeholder" />
        <img src={triunghiuri} className="shapes triangle" alt="Placeholder" />
        <img src={waves} className="shapes wave" alt="Placeholder" />
        <img src={cercuri} className="shapes circle" alt="Placeholder" />
        <div className="container align-items-center">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <h1
                className="profile-title text-left text-warning"
                style={{ fontWeight: 300, fontSize: 25, marginTop: 7 }}
              >
                Sistem Informasi Akademik
              </h1>
              <h5 className="text-on-back">01</h5>
              <p
                className="profile-description"
                style={{ marginBottom: 10, marginTop: -20 }}
              >
                I build this project as part of a school assignment; which
                surprisingly has becomes my Main Project going forward.
              </p>
              <div className="typography-line">
                {/* <span>Quote</span> */}
                <blockquote>
                  <p
                    className="blockquote text-success"
                    style={{ fontSize: 14, fontWeight: 300 }}
                  >
                    "My Goal is to have this student information system
                    available for free for any school that has limit access to
                    funding and in a remote area where access to internet slow
                    or evenly limit. School can use this application to manage
                    their students activities such as placing grade for
                    students, create school schedule, student analytics and so
                    on."
                    <br />
                    <br />
                    <small className="text-success">- Andri</small>
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 ml-auto mr-auto">
              <div
                className="card card-coin card-plain"
                style={{ marginTop: 100 }}
              >
                <div className="card-body">
                  <h1
                    className="text-warning"
                    style={{
                      fontWeight: 300,
                      fontSize: 18,
                      textAlign: "center",
                      marginBottom: 5
                    }}
                  >
                    STMIK Swadharma
                  </h1>
                  <h1
                    className="text-warning"
                    style={{
                      fontWeight: 300,
                      fontSize: 18,
                      textAlign: "center"
                    }}
                  >
                    Technology Stack
                  </h1>
                  <ul className="nav nav-tabs nav-tabs-primary justify-content-center">
                    <li className="nav-item" style={{ marginLeft: -23 }}>
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#linka"
                        style={{ fontSize: 12 }}
                      >
                        Front End
                      </a>
                    </li>
                    <li
                      className="nav-item"
                      style={{ marginLeft: -5, marginRight: -10 }}
                    >
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#linkb"
                        style={{ fontSize: 12 }}
                      >
                        Back End
                      </a>
                    </li>
                    <li
                      className="nav-item"
                      style={{ marginLeft: 5, marginRight: -20 }}
                    >
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#linkc"
                        style={{ fontSize: 12 }}
                      >
                        Database
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content tab-subcategories">
                    <div className="tab-pane active" id="linka">
                      <ul
                        style={{
                          listStyle: "none",
                          fontWeight: 100,
                          fontSize: 13
                        }}
                      >
                        <li>
                          <FontAwesomeIcon
                            icon={["fas", "dot-circle"]}
                            style={{ marginRight: 15 }}
                          />
                          UI Library:
                          <a
                            href="https://reactjs.org/"
                            target="_blank"
                            style={{ marginLeft: 10 }}
                            rel="noopener noreferrer"
                          >
                            ReactJS
                          </a>
                        </li>
                        <li
                          style={{
                            marginTop: 15,
                            marginBottom: 15,
                            textAlign: "justify"
                          }}
                        >
                          <FontAwesomeIcon
                            icon={["fas", "dot-circle"]}
                            style={{ marginRight: 15 }}
                          />
                          CSS Framework:
                          <a
                            href="https://ant.design/"
                            target="_blank"
                            style={{ marginLeft: 10 }}
                            rel="noopener noreferrer"
                          >
                            Ant Design
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-pane" id="linkb">
                      <ul
                        style={{
                          listStyle: "none",
                          fontWeight: 100,
                          fontSize: 13,
                          marginLeft: -30
                        }}
                      >
                        <li
                          style={{
                            marginTop: 15,
                            marginBottom: 15
                          }}
                        >
                          <FontAwesomeIcon
                            icon={["fas", "dot-circle"]}
                            style={{ marginRight: 15 }}
                          />
                          Application Server:
                          <a
                            href="https://nodejs.org/en/"
                            target="_blank"
                            style={{ marginLeft: 10 }}
                            rel="noopener noreferrer"
                          >
                            NodeJS
                          </a>
                        </li>
                        <li
                          style={{
                            marginTop: 15,
                            marginBottom: 15
                          }}
                        >
                          <FontAwesomeIcon
                            icon={["fas", "dot-circle"]}
                            style={{ marginRight: 15 }}
                          />
                          NodeJS Framework:
                          <a
                            href="https://expressjs.com/"
                            target="_blank"
                            style={{ marginLeft: 10 }}
                            rel="noopener noreferrer"
                          >
                            Express
                          </a>
                        </li>
                        <li
                          style={{
                            marginTop: 15,
                            marginBottom: 15
                          }}
                        >
                          <FontAwesomeIcon
                            icon={["fas", "dot-circle"]}
                            style={{ marginRight: 15 }}
                          />
                          Middleware:
                          {/* eslint-disable-next-line */}
                          <a href="https://www.npmjs.com/package/cors" style={{ marginLeft: 10 }}>
                            Cors,
                          </a><a href="https://www.npmjs.com/package/bcrypt" style={{ marginLeft: 5 }}>
                            Bcrypt
                          </a>
                          (upcoming)
                        </li>
                      </ul>
                    </div>
                    <div className="tab-pane" id="linkc">
                      <ul
                        style={{
                          listStyle: "none",
                          fontWeight: 100,
                          fontSize: 13,
                          marginLeft: -30
                        }}
                      >
                        <li
                          style={{
                            marginTop: 15,
                            marginBottom: 15
                          }}
                        >
                          <FontAwesomeIcon
                            icon={["fas", "dot-circle"]}
                            style={{ marginRight: 15 }}
                          />
                          Database:
                          <a
                            href="https://www.mysql.com/"
                            target="_blank"
                            style={{ marginLeft: 10 }}
                            rel="noopener noreferrer"
                          >
                            MySQL
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6">
              <div className="row justify-content-between align-items-center">
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="0"
                      className="active"
                    />
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="1"
                    />
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="2"
                    />
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="3"
                    />
                  </ol>
                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                      <img className="d-block" src={ss} alt="First slide" />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Landing Page</h5>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block" src={ss1} alt="Second slide" />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Somewhere Beyond, United States</h5>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block" src={ss2} alt="Third slide" />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Stocks, United States</h5>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block" src={ss3} alt="Third slide" />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Stocks, United States</h5>
                      </div>
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                  >
                    <FontAwesomeIcon icon={["fas", "arrow-left"]} />
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                  >
                    <FontAwesomeIcon icon={["fas", "arrow-right"]} />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <h1 className="profile-title text-left">The Project</h1>
              <h5 className="text-on-back">02</h5>
              <p className="profile-description text-left">
                This project currently on active development, now on version
                0.2, so many things and features have been added. Head over to
                the link below and try the app yourself.
              </p>
              <div className="btn-wrapper pt-3">
                <a
                  className="btn btn-simple btn-info"
                  href="https://tugaskuliah.subarnanto.com"
                  target="_blank"
                  rel="tooltip noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={["fas", "tasks"]}
                    style={{ marginRight: 10 }}
                  />
                  Check it!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
