import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function() {
  return (
    <div className="section section-notifications" id="notifications">
      <div className="container">
        <div className="space" />
        <h3>Notifications</h3>
        <div className="alert alert-primary alert-with-icon">
          <button
            type="button"
            aria-hidden="true"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <FontAwesomeIcon icon={['fas','times']} />
          </button>
          <span data-notify="icon" className="tim-icons icon-coins" />
          <span>
            <b> Congrats! - </b> This is a regular notification made with
            ".alert-primary"
          </span>
        </div>
        <div className="alert alert-info alert-with-icon">
          <button
            type="button"
            aria-hidden="true"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <FontAwesomeIcon icon={['fas','times-circle']} />
          </button>
          <span data-notify="icon" className="tim-icons icon-trophy" />
          <span>
            <b> Heads up! - </b> This is a regular notification made with
            ".alert-info"
          </span>
        </div>
        <div className="alert alert-success alert-with-icon">
          <button
            type="button"
            aria-hidden="true"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <FontAwesomeIcon icon={['far','times-circle']}/>
          </button>
          <FontAwesomeIcon icon={['far','bell']} />
          <span>
            <b> Well done! - </b> This is a regular notification made with
            ".alert-success"
          </span>
        </div>
        <div className="alert alert-warning alert-with-icon">
          <button
            type="button"
            aria-hidden="true"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <FontAwesomeIcon icon={['fas','window-close']}/>
          </button>
          <span data-notify="icon" className="tim-icons icon-bulb-63" />
          <span>
            <b> Warning! - </b> This is a regular notification made with
            ".alert-warning"
          </span>
        </div>
        <div className="alert alert-danger alert-with-icon">
          <button
            type="button"
            aria-hidden="true"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <FontAwesomeIcon icon={['far','window-close']} />
          </button>
          <span data-notify="icon" className="tim-icons icon-support-17" />
          <span>
            <b> Oh snap! - </b> This is a regular notification made with
            ".alert-danger"
          </span>
        </div>
      </div>
    </div>
    // {/* <!--  end notifications --> */}
  );
}
