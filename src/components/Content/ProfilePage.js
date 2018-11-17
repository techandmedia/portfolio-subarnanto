import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dots from "../../assets/img/dots.png";
import path4 from "../../assets/img/path4.png";
import denys from "../../assets/img/denys.jpg";
import fabien from "../../assets/img/fabien-bazanegue.jpg";
import mark from "../../assets/img/mark-finn.jpg";
import andri from "../../assets/img/andri.png";

export default function ProfilePage(props) {
  // componentDidMount() {
  // console.log(this.props.route);
  // }
  // render() {
  const { onRouteChange } = props;
  return (
    <React.Fragment>
      <div className="page-header">
        <img src={dots} className="dots" alt="Dots" />
        <img src={path4} className="path" alt="Path4" />
        <div className="container align-items-center">
          <div className="row">
            <div
              className="col-lg-6 col-md-6"
              style={{ marginBottom: 20, marginTop: -40 }}
            >
              <h1 className="profile-title text-left">Eko Andri Subarnanto</h1>
              <h5 className="text-on-back">01</h5>
              <p
                className="profile-description"
                style={{ marginBottom: 30, marginTop: 10 }}
              >
                With almost 20 years of professional working experiences with
                diverse skills and expertise, I am considered the Jack of All
                Trades, and mastering some :).
              </p>
              <p className="profile-description">
                This makes me adaptable to any business needs; I am a field
                technician and also a manager, I am a instructor but also a
                student. I can be whatever the job needs me to be.
              </p>
              <div className="btn-wrapper profile pt-3">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/wsh4and"
                  className="btn btn-icon btn-twitter btn-round"
                  data-toggle="tooltip"
                  data-original-title="Follow us"
                >
                  <FontAwesomeIcon
                    style={{ marginTop: 12 }}
                    icon={["fab", "twitter"]}
                  />
                </a>
                <a
                  href="/"
                  className="btn btn-icon btn-facebook btn-round"
                  data-toggle="tooltip"
                  data-original-title="Like us"
                >
                  <FontAwesomeIcon
                    style={{ marginTop: 12 }}
                    icon={["fab", "facebook"]}
                  />
                </a>
                <a
                  href="/"
                  className="btn btn-icon btn-dribbble  btn-round"
                  data-toggle="tooltip"
                  data-original-title="Follow us"
                >
                  <FontAwesomeIcon
                    style={{ marginTop: 12 }}
                    icon={["fab", "dribbble"]}
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 ml-auto mr-auto">
              <div className="card card-coin card-plain">
                <div className="card-header">
              {/* eslint-disable-next-line */}
                  <img
                    src={andri}
                    className="img-center img-fluid rounded-square"
                    alt="Profile Picture"
                  />
                  <h4 className="title">Face of Me</h4>
                </div>
                <div className="card-body">
                  <ul
                    className="nav nav-tabs nav-tabs-primary justify-content-center"
                    style={{ marginTop: -20 }}
                  >
                    <li className="nav-item" style={{ marginLeft: -30 }}>
                      <a
                        className="nav-link "
                        data-toggle="tab"
                        href="#linka"
                        style={{ fontSize: 12 }}
                      >
                        Personality
                      </a>
                    </li>
                    <li
                      className="nav-item"
                      style={{ marginLeft: -10, marginRight: -10 }}
                    >
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#linkb"
                        style={{ fontSize: 12 }}
                      >
                        Skills
                      </a>
                    </li>
                    <li className="nav-item" style={{ marginRight: -30 }}>
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#linkc"
                        style={{ fontSize: 12 }}
                      >
                        Education
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content tab-subcategories">
                    <div className="tab-pane " id="linka">
                      <p style={{ fontWeight: 200 }}>
                        Consider by some as intelligently sarcastic, I actually
                        am an introvert who like cheeky and smart jokes. Like
                        smart conversations but do not mind dilly dally talks
                        either.
                        <FontAwesomeIcon
                          style={{ marginLeft: 5 }}
                          icon={["fas", "glasses"]}
                        />
                      </p>
                    </div>
                    <div className="tab-pane active " id="linkb">
                      <ul
                        style={{
                          listStyle: "none",
                          fontWeight: 100,
                          fontSize: 13,
                          marginLeft: -40
                        }}
                      >
                        <li style={{ textAlign: "justify" }}>
                          <FontAwesomeIcon icon={["fas", "code"]} /> Build
                          functional website and web application with modern
                          stack & technology such as HTML5, CSS3, JavaScript,
                          ReactJS, NodeJS, Express and MySQL.
                        </li>
                        <li
                          style={{
                            marginTop: 15,
                            marginBottom: 15,
                            textAlign: "justify"
                          }}
                        >
                          <FontAwesomeIcon
                            icon={["fas", "mobile-alt"]}
                            style={{ marginRight: 15 }}
                          />
                          Capable of creating mobile application with Android
                          (Java) and React Native (JavaScript).
                        </li>
                        <li style={{ textAlign: "justify" }}>
                          <FontAwesomeIcon
                            icon={["fab", "stack-overflow"]}
                            style={{ marginRight: 15 }}
                          />
                          Other web stack including PostgreSQL,
                          styled-components, Bootstrap 4 and Ant Design, also
                          able to perform basic design with Photoshop.
                        </li>
                      </ul>
                    </div>
                    <div className="tab-pane" id="linkc">
                      <ul
                        style={{
                          listStyle: "none",
                          fontWeight: 100,
                          fontSize: 13,
                          marginLeft: -40
                        }}
                      >
                        <li style={{ marginBottom: 10, textAlign: "justify" }}>
                          <FontAwesomeIcon
                            icon={["fas", "university"]}
                            style={{ marginRight: 15 }}
                          />
                          Currently on semester 7 with a GPA of 3.46, taking
                          System of Information Major at STMIK Swadharma,
                          Jakarta.
                        </li>
                        <li
                          style={{
                            marginTop: 15,
                            marginBottom: 15,
                            textAlign: "justify"
                          }}
                        >
                          <FontAwesomeIcon
                            icon={["fas", "book-open"]}
                            style={{ marginRight: 15 }}
                          />
                          Took Entry & Advance Engineering HP Indigo Digital
                          Printing Course at HP Training Center in Barcelona,
                          Spain.
                        </li>
                        <li style={{ textAlign: "justify" }}>
                          <FontAwesomeIcon
                            icon={["fas", "laptop-code"]}
                            style={{ marginRight: 15 }}
                          />
                          Take Udemy courses with various topics such as React,
                          React Native, Redux, NodeJS, MySQL, PostgreSQL,
                          Photoshop, Digital Marketing, etc.
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
                  </ol>
                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                      <img className="d-block" src={denys} alt="First slide" />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Big City Life, United States</h5>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block"
                        src={fabien}
                        alt="Second slide"
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Somewhere Beyond, United States</h5>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block" src={mark} alt="Third slide" />
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
              <h1 className="profile-title text-left">Projects</h1>
              <h5 className="text-on-back">02</h5>
              <p className="profile-description text-left">
                Currently excited being a web developer, I build a few projects
                already in less than one year since I decide to become a Full
                Stack Developer. Pictures on the left (or above if you are on
                mobile) are not mine; they are there because the pictures are
                gorgeous. Head over to the projects section to see what I've
                been building on.
              </p>
              <div className="btn-wrapper pt-3">
                <button
                  onClick={() => onRouteChange("project-current")}
                  className="btn btn-simple btn-info"
                >
                  <FontAwesomeIcon
                    icon={["fas", "tasks"]}
                    style={{ marginRight: 10 }}
                  />{" "}
                  Check it!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card card-plain">
                <div className="card-header">
                  <h1 className="profile-title text-left">Contact</h1>
                  <h5 className="text-on-back">03</h5>
                </div>
                <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Your Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Eko Andri"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Email address</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="anyemail@email.com"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Phone</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="62-8117011090"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Company</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="subarnanto.com"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Message</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Hi there, sorry this feature isn't working yet, text me to get further information"
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-round float-right"
                      rel="tooltip"
                      data-original-title="Can't wait for your message"
                      data-placement="right"
                    >
                      Send text
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-4 ml-auto">
              <div className="info info-horizontal">
                <div className="icon icon-primary">
                  <FontAwesomeIcon
                    icon={["fas", "map-pin"]}
                    style={{ marginTop: 8 }}
                  />
                </div>
                <div className="description">
                  <h4 className="info-title">Find me at school at</h4>
                  <p>
                    <span style={{ fontWeight: 700, fontSize: 14 }}>
                      STMIK Swadharma
                    </span>
                    <br /> Jl. Malaka No.3 Jakarta,
                    <br /> Indonesia
                  </p>
                </div>
              </div>
              <div className="info info-horizontal">
                <div className="icon icon-primary">
                  <FontAwesomeIcon
                    icon={["fas", "mobile"]}
                    style={{ marginTop: 8 }}
                  />
                </div>
                <div className="description">
                  <h4 className="info-title">Or contact me directly</h4>
                  <p>
                    <span style={{ fontWeight: 700, fontSize: 14 }}>Andri</span>
                    <br /> +62 811 7011 090
                    <br /> Mon - Fri, 8:00-21:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
