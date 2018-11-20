import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Projects(props) {
  const { onRouteChange } = props;

  return (
    <div className="col-md-5">
      <h1 className="profile-title text-left">Projects</h1>
      <h5 className="text-on-back">02</h5>
      <p className="profile-description text-left">
        Currently excited being a web developer, I build a few projects already
        in less than one year since I decide to become a Full Stack Developer.
        Pictures on the left (or above if you are on mobile) are not mine; they
        are there because the pictures are gorgeous. Head over to the projects
        section to see what I've been building on.
      </p>
      <div className="btn-wrapper pt-3">
        <button
          onClick={() => onRouteChange("project-current")}
          className="btn btn-simple btn-info"
        >
          <FontAwesomeIcon
            icon={["fas", "tasks"]}
            style={{ marginRight: 10 }}
          />{" "}
          Check it!
        </button>
      </div>
    </div>
  );
}
