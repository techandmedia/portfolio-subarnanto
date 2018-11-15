import React from "react";

export default function Examples() {
  return (
    <div className="section section-examples" data-background-color="black">
      <img src="assets/img/path1.png" className="path" />
      <div className="space-50" />
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-6">
            <a href="examples/landing-page.html">
              <img
                src="assets/img/landing-page.png"
                alt="Image"
                className="img-raised"
              />
            </a>
            <a
              href="examples/landing-page.html"
              className="btn btn-simple btn-primary btn-round"
            >
              View Landing Page
            </a>
          </div>
          <div className="col-sm-6">
            <a href="examples/profile-page.html">
              <img
                src="assets/img/profile-page.png"
                alt="Image"
                className="img-raised"
              />
            </a>
            <a
              href="examples/profile-page.html"
              className="btn btn-simple btn-primary btn-round"
            >
              View Profile Page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
