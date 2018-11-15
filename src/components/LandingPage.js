import React, { Component } from "react";
import SectionCoins from "./SectionCoins";
import Footer from "./Footer";

class LandingPage extends Component {
  render() {
    return (
      <React.Fragment className="landing-page">
        <nav
          className="navbar navbar-expand-lg fixed-top navbar-transparent "
          color-on-scroll="100"
        >
          <div className="container">
            <div className="navbar-translate">
              <a
                className="navbar-brand"
                href="https://demos.creative-tim.com/blk-design-system/index.html"
                rel="tooltip"
                title="Designed and Coded by Creative Tim"
                data-placement="bottom"
                target="_blank"
              >
                <span>BLK•</span> Design System
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
                    <a>BLK•</a>
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
                      <i className="tim-icons icon-simple-remove" />
                    </button>
                  </div>
                </div>
              </div>
              <ul className="navbar-nav">
                <li className="nav-item p-0">
                  <a
                    className="nav-link"
                    rel="tooltip"
                    title="Follow us on Twitter"
                    data-placement="bottom"
                    href="https://twitter.com/CreativeTim"
                    target="_blank"
                  >
                    <i className="fab fa-twitter" />
                    <p className="d-lg-none d-xl-none">Twitter</p>
                  </a>
                </li>
                <li className="nav-item p-0">
                  <a
                    className="nav-link"
                    rel="tooltip"
                    title="Like us on Facebook"
                    data-placement="bottom"
                    href="https://www.facebook.com/CreativeTim"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-square" />
                    <p className="d-lg-none d-xl-none">Facebook</p>
                  </a>
                </li>
                <li className="nav-item p-0">
                  <a
                    className="nav-link"
                    rel="tooltip"
                    title="Follow us on Instagram"
                    data-placement="bottom"
                    href="https://www.instagram.com/CreativeTimOfficial"
                    target="_blank"
                  >
                    <i className="fab fa-instagram" />
                    <p className="d-lg-none d-xl-none">Instagram</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="../index.html">
                    Back to Kit
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://github.com/creativetimofficial/blk-design-system/issues"
                  >
                    Have an issue?
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="wrLandingPageer">
          <div className="page-header">
            <img src="../assets/img/blob.png" className="path" />
            <img src="../assets/img/path2.png" className="path2" />
            <img
              src="../assets/img/triunghiuri.png"
              className="shapes triangle"
            />
            <img src="../assets/img/waves.png" className="shapes wave" />
            <img src="../assets/img/patrat.png" className="shapes squares" />
            <img src="../assets/img/cercuri.png" className="shapes circle" />
            <div className="content-center">
              <div className="row row-grid justify-content-between align-items-center text-left">
                <div className="col-lg-6 col-md-6">
                  <h1 className="text-white">
                    We keep your coin
                    <br />
                    <span className="text-white">secured</span>
                  </h1>
                  <p className="text-white mb-3">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel...
                  </p>
                  <div className="btn-wrLandingPageer mb-3">
                    <p className="category text-success d-inline">
                      From 9.99%/mo
                    </p>
                    <a href="#blk" className="btn btn-success btn-link btn-sm">
                      <i className="tim-icons icon-minimal-right" />
                    </a>
                  </div>
                  <div className="btn-wrLandingPageer">
                    <div className="button-container">
                      <button
                        href="javascript:void(0)"
                        className="btn btn-icon btn-simple btn-round btn-neutral"
                      >
                        <i className="fab fa-twitter" />
                      </button>
                      <button
                        href="javascript:void(0)"
                        className="btn btn-icon btn-simple btn-round btn-neutral"
                      >
                        <i className="fab fa-dribbble" />
                      </button>
                      <button
                        href="javascript:void(0)"
                        className="btn btn-icon btn-simple btn-round btn-neutral"
                      >
                        <i className="fab fa-facebook" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-5">
                  <img
                    src="../assets/img/etherum.png"
                    alt="Circle image"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
          <section className="section section-lg">
            <section className="section">
              <img src="../assets/img/path4.png" className="path" />
              <div className="container">
                <div className="row row-grid justify-content-between">
                  <div className="col-md-5 mt-lg-5">
                    <div className="row">
                      <div className="col-lg-6 col-sm-12 px-2 py-2">
                        <div className="card card-stats ">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-5 col-md-4">
                                <div className="icon-big text-center icon-warning">
                                  <i className="tim-icons icon-trophy text-warning" />
                                </div>
                              </div>
                              <div className="col-7 col-md-8">
                                <div className="numbers">
                                  <p className="card-title">3,237</p>
                                  <p className="card-category">Awards</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-12 px-2 py-2">
                        <div className="card card-stats upper bg-default">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-5 col-md-4">
                                <div className="icon-big text-center icon-warning">
                                  <i className="tim-icons icon-coins text-white" />
                                </div>
                              </div>
                              <div className="col-7 col-md-8">
                                <div className="numbers">
                                  <p className="card-title">3,653</p>
                                  <p className="card-category">Commits</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-sm-12 px-2 py-2">
                        <div className="card card-stats ">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-5 col-md-4">
                                <div className="icon-big text-center icon-warning">
                                  <i className="tim-icons icon-gift-2 text-info" />
                                </div>
                              </div>
                              <div className="col-7 col-md-8">
                                <div className="numbers">
                                  <p className="card-title">593</p>
                                  <p className="card-category">Presents</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-12 px-2 py-2">
                        <div className="card card-stats ">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-5 col-md-4">
                                <div className="icon-big text-center icon-warning">
                                  <i className="tim-icons icon-credit-card text-success" />
                                </div>
                              </div>
                              <div className="col-7 col-md-8">
                                <div className="numbers">
                                  <p className="card-title">10,783</p>
                                  <p className="card-category">Forks</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="pl-md-5">
                      <h1>
                        Large
                        <br />
                        Achivements
                      </h1>
                      <p>
                        I should be capable of drawing a single stroke at the
                        present moment; and yet I feel that I never was a
                        greater artist than now.{" "}
                      </p>
                      <br />
                      <p>
                        When, while the lovely valley teems with vapour around
                        me, and the meridian sun strikes the upper surface of
                        the impenetrable foliage of my trees, and but a few
                        stray.
                      </p>
                      <br />
                      <a href="#" className="font-weight-bold text-info mt-5">
                        Show all{" "}
                        <i className="tim-icons icon-minimal-right text-info" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
          <section className="section section-lg">
            <img src="../assets/img/path4.png" className="path" />
            <img src="../assets/img/path5.png" className="path2" />
            <img src="../assets/img/path2.png" className="path3" />
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <h1 className="text-center">Your best benefit</h1>
                  <div className="row row-grid justify-content-center">
                    <div className="col-lg-3">
                      <div className="info">
                        <div className="icon icon-primary">
                          <i className="tim-icons icon-money-coins" />
                        </div>
                        <h4 className="info-title">Low Commission</h4>
                        <hr className="line-primary" />
                        <p>
                          Divide details about your work into parts. Write a few
                          lines about each one. A paragraph describing a feature
                          will.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="info">
                        <div className="icon icon-warning">
                          <i className="tim-icons icon-chart-pie-36" />
                        </div>
                        <h4 className="info-title">High Incomes</h4>
                        <hr className="line-warning" />
                        <p>
                          Divide details about your product or agency work into
                          parts. Write a few lines about each one. A paragraph
                          describing feature will be a feature.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="info">
                        <div className="icon icon-success">
                          <i className="tim-icons icon-single-02" />
                        </div>
                        <h4 className="info-title">Verified People</h4>
                        <hr className="line-success" />
                        <p>
                          Divide details about your product or agency work into
                          parts. Write a few lines about each one. A paragraph
                          describing be enough.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section section-lg section-safe">
            <img src="../assets/img/path5.png" className="path" />
            <div className="container">
              <div className="row row-grid justify-content-between">
                <div className="col-md-5">
                  <img
                    src="../assets/img/chester-wade.jpg"
                    className="img-fluid floating"
                  />
                  <div className="card card-stats bg-danger">
                    <div className="card-body">
                      <div className="justify-content-center">
                        <div className="numbers">
                          <p className="card-title">100%</p>
                          <p className="card-category text-white">Safe</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card card-stats bg-info">
                    <div className="card-body">
                      <div className="justify-content-center">
                        <div className="numbers">
                          <p className="card-title">573 K</p>
                          <p className="card-category text-white">
                            Satisfied customers
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card card-stats bg-default">
                    <div className="card-body">
                      <div className="justify-content-center">
                        <div className="numbers">
                          <p className="card-title">10 425</p>
                          <p className="card-category text-white">Business</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="px-md-5">
                    <hr className="line-success" />
                    <h3>Awesome features</h3>
                    <p>
                      The design system comes with three pre-built pages to help
                      you get started faster. You can change the text and images
                      and you're good to go.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-vector" />
                          </div>
                          <div className="ml-3">
                            <h6>Carefully crafted components</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-tap-02" />
                          </div>
                          <div className="ml-3">
                            <h6>Amazing page examples</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-single-02" />
                          </div>
                          <div className="ml-3">
                            <h6>Super friendly support team</h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section section-lg">
            <img src="../assets/img/path4.png" className="path" />
            <img src="../assets/img/path2.png" className="path2" />
            <div className="col-md-12">
              <div className="card card-chart card-plain">
                <div className="card-header">
                  <div className="row">
                    <div className="col-sm-6 text-left">
                      <hr className="line-primary" />
                      <h5 className="card-category">Total Investments</h5>
                      <h2 className="card-title">Performance</h2>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="chart-area">
                    <canvas id="chartBig" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <SectionCoins />
        <Footer />
      </React.Fragment>

      //  {/* <!-- End Navbar --> */}
    );
  }
}
export default LandingPage;
