import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProfilePage() {
  return (
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
        With almost 20 years of professional working experiences with diverse
        skills and expertise, I am considered the Jack of All Trades, and
        mastering some :).
      </p>
      <p className="profile-description">
        This makes me adaptable to any business needs; I am a field technician
        and also a manager, I am a instructor but also a student. I can be
        whatever the job needs me to be.
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
  );
}
