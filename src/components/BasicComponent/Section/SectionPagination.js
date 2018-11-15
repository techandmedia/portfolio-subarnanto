import React from "react";

export default function Paginations() {
  return (
    <div className="section section-pagination">
      <img src="assets/img/path4.png" className="path" />
      <img src="assets/img/path5.png" className="path path1" />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3 className="mb-4">Progress Bars</h3>
            <div className="progress-container">
              <span className="progress-badge">Default</span>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "25%" }}
                >
                  <span className="progress-value">25%</span>
                </div>
              </div>
            </div>
            <div className="progress-container progress-primary">
              <span className="progress-badge">Primary</span>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-warning"
                  role="progressbar"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "60%" }}
                >
                  <span className="progress-value">60%</span>
                </div>
              </div>
            </div>
            <br />
            <h3 className="mb-5">Navigation Pills</h3>
            <ul className="nav nav-pills nav-pills-warning nav-pills-icons">
              <li className="nav-item">
                <a
                  className="nav-link active show"
                  data-toggle="tab"
                  href="#link7"
                >
                  <i className="tim-icons icon-atom" /> Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#link8">
                  <i className="tim-icons icon-chat-33" /> Messages
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#link9">
                  <i className="tim-icons icon-settings-gear-63" /> Settings
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <h3 className="mb-5">Pagination</h3>
            <ul className="pagination pagination-primary">
              <li className="page-item active">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#link">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#link">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#link">
                  4
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#link">
                  5
                </a>
              </li>
            </ul>
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#link" aria-label="Previous">
                  <span aria-hidden="true">
                    <i
                      className="tim-icons icon-double-left"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#link">
                  1
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#link">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#link">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#link" aria-label="Next">
                  <span aria-hidden="true">
                    <i
                      className="tim-icons icon-double-right"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </li>
            </ul>
            <br />
            <h3 className="mb-5">Labels</h3>
            <span className="badge badge-default">Default</span>
            <span className="badge badge-primary">Primary</span>
            <span className="badge badge-success">Success</span>
            <span className="badge badge-info">Info</span>
            <span className="badge badge-warning">Warning</span>
            <span className="badge badge-danger">Danger</span>
            <span className="badge badge-neutral">Neutral</span>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}
