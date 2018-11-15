import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import googleLogo from "../../../assets/img/google.svg";
import githubLogo from "../../../assets/img/github.svg";

export default function FormModal() {
  return (
    // {/* <!-- Form Modal --> */}
    <div
      className="modal fade modal-black"
      id="myModal2"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header justify-content-center">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              <FontAwesomeIcon
                icon={["far", "window-close"]}
                // className="text-white"
              />
              {/* <i className="tim-icons icon-simple-remove text-white" /> */}
            </button>
            <div className="text-muted text-center ml-auto mr-auto">
              <h3 className="mb-0">Sign in with</h3>
            </div>
          </div>
          <div className="modal-body">
            <div className="btn-wrapper text-center">
              <a href="#" className="btn btn-neutral btn-icon">
                <img src={githubLogo} />
              </a>
              <a href="#" className="btn btn-neutral btn-icon">
                <img src={googleLogo} />
              </a>
            </div>
            <div className="text-center text-muted mb-4 mt-3">
              <small>Or sign in with credentials</small>
            </div>
            <form role="form">
              <div className="form-group mb-3">
                <div className="input-group input-group-alternative">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      {/* <i className="tim-icons icon-email-85" /> */}
                      <FontAwesomeIcon icon="envelope-square" />
                      {/* <FontAwesomeIcon icon={['fab', 'apple']}/> */}
                    </span>
                  </div>
                  <input
                    className="form-control"
                    placeholder="Email"
                    type="email"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group input-group-alternative">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={["fas", "lock"]} />
                    </span>
                  </div>
                  <input
                    className="form-control"
                    placeholder="Password"
                    type="password"
                  />
                </div>
              </div>
              <div className="form-check mt-3">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" checked />
                  <span className="form-check-sign" />
                  Remember me!
                </label>
              </div>
              <div className="text-center">
                <button type="button" className="btn btn-primary my-4">
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    // {/* <!--  End Modal --> */}
  );
}
