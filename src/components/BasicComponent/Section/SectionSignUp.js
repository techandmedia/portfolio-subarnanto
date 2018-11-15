import React from "react";

export default function SignUp() {
  return (
    <div className="section section-signup">
      <div className="container">
        <div className="squares square-1" />
        <div className="squares square-2" />
        <div className="squares square-3" />
        <div className="squares square-4" />
        <div className="row row-grid justify-content-between align-items-center">
          <div className="col-lg-6">
            <h3 className="display-3 text-white">
              A beautiful Black Design
              <span className="text-white">completed with examples</span>
            </h3>
            <p className="text-white mb-3">
              The Design System comes with four pre-built pages to help you get
              started faster. You can change the text and images and you're good
              to go. More importantly, looking at them will give you a picture
              of what you can built with this powerful Bootstrap 4 Design
              System.
            </p>
            <div className="btn-wrapper">
              <a href="examples/register-page.html" className="btn btn-info">
                Register Page
              </a>
            </div>
          </div>
          <div className="col-lg-6 mb-lg-auto">
            <div className="card card-register">
              <div className="card-header">
                <img
                  className="card-img"
                  src="assets/img/square1.png"
                  alt="Card image"
                />
                <h4 className="card-title">Register</h4>
              </div>
              <div className="card-body">
                <form className="form">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="tim-icons icon-single-02" />
                      </div>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="tim-icons icon-email-85" />
                      </div>
                    </div>
                    <input
                      type="text"
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="tim-icons icon-lock-circle" />
                      </div>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-check text-left">
                    <label className="form-check-label">
                      <input className="form-check-input" type="checkbox" />
                      <span className="form-check-sign" />I agree to the
                      <a href="javascript:void(0)">terms and conditions</a>.
                    </label>
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <a
                  href="javascript:void(0)"
                  className="btn btn-info btn-round btn-lg"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
