import React from "react";
import path1 from '../../../assets/img/path1.png'
import path3 from '../../../assets/img/path3.png'

export default function Typo() {
  return (
    // {/* <!-- Typography --> */}
    <div className="section section-typo">
      <img src={path1} className="path" />
      <img src={path3} className="path path1" />
      <div className="container">
        <h3 className="title">Typography</h3>
        <div id="typography">
          <div className="row">
            <div className="col-md-12">
              <div className="typography-line">
                <h1>
                  <span>Header 1</span>The Life of BLK• Design System
                </h1>
              </div>
              <div className="typography-line">
                <h2>
                  <span>Header 2</span>The Life of BLK• Design System
                </h2>
              </div>
              <div className="typography-line">
                <h3>
                  <span>Header 3</span>The Life of BLK• Design System
                </h3>
              </div>
              <div className="typography-line">
                <h4>
                  <span>Header 4</span>The Life of BLK• Design System
                </h4>
              </div>
              <div className="typography-line">
                <h5>
                  <span>Header 5</span>The Life of BLK• Design System
                </h5>
              </div>
              <div className="typography-line">
                <h6>
                  <span>Header 6</span>The Life of BLK• Design System
                </h6>
              </div>
              <div className="typography-line">
                <p>
                  <span>Paragraph</span>I will be the leader of a company that
                  ends up being worth billions of dollars, because I got the
                  answers. I understand culture. I am the nucleus. I think
                  that’s a responsibility that I have, to push possibilities, to
                  show people, this is the level that things could be at.
                </p>
              </div>
              <div className="typography-line">
                <span>Quote</span>
                <blockquote>
                  <p className="blockquote blockquote-primary">
                    "I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers. I understand
                    culture. I am the nucleus. I think that’s a responsibility
                    that I have, to push possibilities, to show people, this is
                    the level that things could be at."
                    <br />
                    <br />
                    <small>- Noaa</small>
                  </p>
                </blockquote>
              </div>
              <div className="typography-line">
                <span>Muted Text</span>
                <p className="text-muted">
                  I will be the leader of a company that ends up being worth
                  billions of dollars, because I got the answers...
                </p>
              </div>
              <div className="typography-line">
                <span>Primary Text</span>
                <p className="text-primary">
                  I will be the leader of a company that ends up being worth
                  billions of dollars, because I got the answers...
                </p>
              </div>
              <div className="typography-line">
                <span>Info Text</span>
                <p className="text-info">
                  I will be the leader of a company that ends up being worth
                  billions of dollars, because I got the answers...{" "}
                </p>
              </div>
              <div className="typography-line">
                <span>Success Text</span>
                <p className="text-success">
                  I will be the leader of a company that ends up being worth
                  billions of dollars, because I got the answers...{" "}
                </p>
              </div>
              <div className="typography-line">
                <span>Warning Text</span>
                <p className="text-warning">
                  I will be the leader of a company that ends up being worth
                  billions of dollars, because I got the answers...
                </p>
              </div>
              <div className="typography-line">
                <span>Danger Text</span>
                <p className="text-danger">
                  I will be the leader of a company that ends up being worth
                  billions of dollars, because I got the answers...{" "}
                </p>
              </div>
              <div className="typography-line">
                <h2>
                  <span>Small Tag</span>
                  Header with small subtitle
                  <br />
                  <small>Use "small" tag for the headers</small>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="space-50" />
        <div id="images">
          <h3 className="mb-5">Images</h3>
          <div className="row">
            <div className="col-sm-3 col-6">
              <small className="d-block text-uppercase font-weight-bold mb-4">
                Image
              </small>
              <img
                src="assets/img/ryan.jpg"
                alt="Rounded image"
                className="img-fluid rounded shadow"
                style={{ width: "150px" }}
              />
            </div>
            <div className="col-sm-3 col-6">
              <small className="d-block text-uppercase font-weight-bold mb-4">
                Circle Image
              </small>
              <img
                src="assets/img/james.jpg"
                alt="Circle image"
                className="img-fluid rounded-circle shadow"
                style={{ width: "150px" }}
              />
            </div>
            <div className="col-sm-3 col-6 mt-5 mt-sm-0">
              <small className="d-block text-uppercase font-weight-bold mb-4">
                Raised
              </small>
              <img
                src="assets/img/lora.jpg"
                alt="Raised image"
                className="img-fluid rounded shadow-lg"
                style={{ width: "150px" }}
              />
            </div>
            <div className="col-sm-3 col-6 mt-5 mt-sm-0">
              <small className="d-block text-uppercase font-weight-bold mb-4">
                Circle Raised
              </small>
              <img
                src="assets/img/mike.jpg"
                alt="Raised circle image"
                className="img-fluid rounded-circle shadow-lg"
                style={{ width: "150px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
