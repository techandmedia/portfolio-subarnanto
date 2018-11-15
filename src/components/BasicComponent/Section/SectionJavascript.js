import React from "react";

export default function Javascript() {
  return (
    <div className="section section-javascript" id="javascriptComponents">
      <img src="assets/img/path5.png" className="path" />
      <img src="assets/img/path5.png" className="path path1" />
      <div className="container">
        <h3 className="title mb-5">Javascript components</h3>
        <h4 className="mb-5">Modal</h4>
        <div className="row" id="modals">
          <div className="col-md-4">
            <button
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#myModal"
            >
              Launch Modal
            </button>
          </div>
          <div className="col-md-4">
            <button
              className="btn btn-warning"
              data-toggle="modal"
              data-target="#myModal1"
            >
              Launch Modal Mini
            </button>
          </div>
          <div className="col-md-4">
            <button
              className="btn btn-success"
              data-toggle="modal"
              data-target="#myModal2"
            >
              Launch Modal Form
            </button>
          </div>
        </div>
        <br />
        <br />
        <h4 className="mb-5 mt-3">Datepicker</h4>
        <div className="row">
          <div className="col-md-4">
            <div className="datepicker-container">
              <div className="form-group">
                <input
                  type="text"
                  id="datepicker"
                  className="form-control datepicker"
                  value="10/05/2016"
                  data-datepicker-color="primary"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h4 className="mb-5 mt-3">Popovers</h4>
            <button
              type="button"
              className="btn btn-default btn-sm"
              data-container="body"
              data-original-title="Popover on Top"
              data-toggle="popover"
              data-placement="top"
              data-content="Here will be some very useful information about his popover."
            >
              On top
            </button>
            <button
              type="button"
              className="btn btn-default btn-sm"
              data-container="body"
              data-original-title="Popover on Right"
              data-toggle="popover"
              data-placement="right"
              data-content="Here will be some very useful information about his popover.<br/> Here will be some very useful information about his popover."
            >
              On right
            </button>
            <button
              type="button"
              className="btn btn-default btn-sm"
              data-container="body"
              data-original-title="Popover on Bottom"
              data-toggle="popover"
              data-placement="bottom"
              data-content="Here will be some very useful information about his popover."
            >
              On bottom
            </button>
            <button
              type="button"
              className="btn btn-default btn-sm"
              data-container="body"
              data-original-title="Popover On Left"
              data-toggle="popover"
              data-placement="left"
              data-content="Here will be some very useful information about his popover."
              data-color="primary"
            >
              On left
            </button>
          </div>
          <div className="col-md-6">
            <h4 className="mb-5 mt-3">Tooltips</h4>
            <button
              type="button"
              className="btn btn-default btn-tooltip btn-sm"
              data-toggle="tooltip"
              data-placement="left"
              title="Tooltip on left"
              data-container="body"
              data-animation="true"
              data-delay="100"
            >
              On left
            </button>
            <button
              type="button"
              className="btn btn-default btn-tooltip btn-sm"
              data-toggle="tooltip"
              data-placement="top"
              title="Tooltip on top"
              data-container="body"
              data-animation="true"
            >
              On top
            </button>
            <button
              type="button"
              className="btn btn-default btn-tooltip btn-sm"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Tooltip on bottom"
              data-container="body"
              data-animation="true"
            >
              On bottom
            </button>
            <button
              type="button"
              className="btn btn-default btn-tooltip btn-sm"
              data-toggle="tooltip"
              data-placement="right"
              title="Tooltip on right"
              data-container="body"
              data-animation="true"
            >
              On right
            </button>
            <div className="clearfix" />
            <br />
            <br />
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="title">
            <h3>Carousel</h3>
          </div>
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 mb-5 mb-lg-0 ">
              <h1 className="text-white font-weight-light">
                Bootstrap carousel
              </h1>
              <p className="text-white mt-4">
                Black Design comes with three pre-built pages to help you get
                started faster. You can change the text and images and you're
                good to go.
              </p>
              <a
                href="./docs/1.0/components/alerts.html"
                className="btn btn-warning mt-4"
              >
                See all components
              </a>
            </div>
            <div className="col-lg-6">
              <div id="carouselExampleControls" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100"
                      src="assets/img/denys.jpg"
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="assets/img/fabien-bazanegue.jpg"
                      alt="Second slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="assets/img/mark-finn.jpg"
                      alt="Third slide"
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="prev"
                >
                  <i className="tim-icons icon-minimal-left" />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="next"
                >
                  <i className="tim-icons icon-minimal-right" />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
