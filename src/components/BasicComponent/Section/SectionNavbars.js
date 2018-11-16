import React from "react";

export default function NavBars() {
  return (
    <div className="section section-navbars">
      <img src="assets/img/path3.png" className="path" />
      <div className="container" id="menu-dropdown">
        <div className="row">
          <div className="col-md-6">
            <h4>Menu</h4>
            <nav className="navbar navbar-expand-lg bg-primary">
              <div className="container">
                <a className="navbar-br/and" href="#">
                  Menu
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#example-navbar"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
                <div className="collapse navbar-collapse" id="example-navbar">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">
                        <p>Link</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <p>Link</p>
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="http://example.com"
                        id="navbarDropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <p>Dropdown</p>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div className="col-md-6">
            <h4>Menu with Icons</h4>
            <nav className="navbar navbar-expand-lg bg-info">
              <div className="container">
                <a className="navbar-br/and" href="#">
                  Icons
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#example-navbar-icons"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="example-navbar-icons"
                >
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        <i className="tim-icons icon-send" aria-hidden="true" />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        <i
                          className="tim-icons icon-single-02"
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        href="#"
                        className="nav-link dropdown-toggle"
                        id="navbarDropdownMenuLink"
                        data-toggle="dropdown"
                      >
                        <i
                          className="tim-icons icon-settings-gear-63"
                          aria-hidden="true"
                        />
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <a className="dropdown-header">Dropdown header</a>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                        <div className="divider" />
                        <a className="dropdown-item" href="#">
                          Separated link
                        </a>
                        <div className="divider" />
                        <a className="dropdown-item" href="#">
                          One more separated link
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <h3 className="title mb-3">Navigation</h3>
      </div>
      <div id="navbar">
        <div className="navigation-example">
          {/* <!-- Navbar Primary  --> */}
          <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container">
              <div className="navbar-translate">
                <a className="navbar-br/and" href="/">
                  Primary color
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#example-navbar-primary"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
              </div>
              <div
                className="collapse navbar-collapse"
                id="example-navbar-primary"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="/">
                      <i className="tim-icons icon-world" /> Discover
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      <i className="tim-icons icon-single-02" /> Profile
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      <i className="tim-icons icon-settings-gear-63" /> Settings
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* <!-- End Navbar Primary --> */}
          {/* <!-- Navbar Info --> */}
          <nav className="navbar navbar-expand-lg bg-info">
            <div className="container">
              <div className="navbar-translate">
                <a className="navbar-br/and" href="/">
                  Info Color
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#example-navbar-info"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
              </div>
              <div
                className="collapse navbar-collapse"
                id="example-navbar-info"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="/">
                      Discover
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Profile
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Settings
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* <!-- End Navbar Info --> */}
          {/* <!-- Navbar Success --> */}
          <nav className="navbar navbar-expand-lg bg-success">
            <div className="container">
              <div className="navbar-translate">
                <a className="navbar-br/and" href="#">
                  Success Color
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#example-navbar-success"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
              </div>
              <div
                className="collapse navbar-collapse"
                id="example-navbar-success"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="/">
                      <i className="tim-icons icon-world" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      <i className="tim-icons icon-single-02" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      <i className="tim-icons icon-settings-gear-63" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* <!-- End Navbar Success --> */}
          {/* <!-- Navbar Warning --> */}
          <nav className="navbar navbar-expand-lg bg-warning">
            <div className="container">
              <div className="navbar-translate">
                <a className="navbar-br/and" href="/">
                  Warning Color
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#example-navbar-warning"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
              </div>
              <div
                className="collapse navbar-collapse"
                id="example-navbar-warning"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      <i className="fab fa-facebook-square" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      <i className="fab fa-google-plus" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* <!-- End Navbar Warning --> */}
          {/* <!-- Navbar Danger --> */}
          <nav className="navbar navbar-expand-lg bg-danger">
            <div className="container">
              <div className="navbar-translate">
                <a className="navbar-br/and" href="/">
                  Danger Color
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#example-navbar-danger"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
              </div>
              <div
                className="collapse navbar-collapse"
                id="example-navbar-danger"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      <i className="fab fa-facebook-square" /> Share
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      <i className="fab fa-twitter" /> Tweet
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      <i className="fab fa-pinterest" /> Pin
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* <!-- End Navbar Danger --> */}
          {/* <!-- Navbar Transparent --> */}
          <nav className="navbar navbar-expand-lg navbar-transparent">
            <div className="container">
              <div className="navbar-translate">
                <a className="navbar-br/and" href="/">
                  Transparent
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#example-navbar-transparent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
              </div>
              <div
                className="collapse navbar-collapse"
                id="example-navbar-transparent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      <i className="fab fa-facebook-square" /> Facebook
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      <i className="fab fa-twitter" /> Twitter
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      <i className="fab fa-instagram" /> Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* <!-- End Navbar Transparent--> */}
        </div>
      </div>
    </div>
    // {/* <!-- End .section-navbars  --> */}
  );
}
