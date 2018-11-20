import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import andri from "../../../assets/img/andri.png";

export default function ProfilePage({ ...props }) {
  const {
    tabPersonality,
    tabEducation,
    tabSkills,
    onTabChange,
    tabRoute
  } = props;

  return (
    <div className="col-lg-4 col-md-6 ml-auto mr-auto">
      <div className="card card-coin card-plain">
        <div className="card-header">
          {/* eslint-disable-next-line */}
          <img
            src={andri}
            className="img-center img-fluid rounded-square"
            alt="Profile Picture"
          />
          <h4 className="title">Face of Me</h4>
        </div>
        <div className="card-body">
          <ul
            className="nav nav-tabs nav-tabs-primary justify-content-center"
            style={{ marginTop: -20 }}
          >
            <li className="nav-item" style={{ marginLeft: -30 }}>
              <span
                className={`nav-link ${tabPersonality}`}
                onClick={() => onTabChange("personality")}
                style={{ fontSize: 12 }}
              >
                Personality
              </span>
            </li>
            <li
              className="nav-item"
              style={{ marginLeft: -10, marginRight: -10 }}
            >
              <span
                className={`nav-link ${tabSkills}`}
                onClick={() => onTabChange("skills")}
                style={{ fontSize: 12 }}
              >
                Skills
              </span>
            </li>
            <li className="nav-item" style={{ marginRight: -30 }}>
              <span
                className={`nav-link ${tabEducation}`}
                onClick={() => onTabChange("education")}
                style={{ fontSize: 12 }}
              >
                Education
              </span>
            </li>
          </ul>
          <div className="tab-content tab-subcategories">
            {tabRoute === "personality" ? (
              <div className={`nav-link ${tabPersonality}`}>
                <p style={{ fontWeight: 200 }}>
                  Consider by some as intelligently sarcastic, I actually am an
                  introvert who like cheeky and smart jokes. Like smart
                  conversations but do not mind dilly dally talks either.
                  <FontAwesomeIcon
                    style={{ marginLeft: 5 }}
                    icon={["fas", "glasses"]}
                  />
                </p>
              </div>
            ) : null}
            <div className={`tab-pane ${tabSkills}`}>
              <ul
                style={{
                  listStyle: "none",
                  fontWeight: 100,
                  fontSize: 13,
                  marginLeft: -40
                }}
              >
                <li style={{ textAlign: "justify" }}>
                  <FontAwesomeIcon icon={["fas", "code"]} /> Build functional
                  website and web application with modern stack & technology
                  such as HTML5, CSS3, JavaScript, ReactJS, NodeJS, Express and
                  MySQL.
                </li>
                <li
                  style={{
                    marginTop: 15,
                    marginBottom: 15,
                    textAlign: "justify"
                  }}
                >
                  <FontAwesomeIcon
                    icon={["fas", "mobile-alt"]}
                    style={{ marginRight: 15 }}
                  />
                  Capable of creating mobile application with Android (Java) and
                  React Native (JavaScript).
                </li>
                <li style={{ textAlign: "justify" }}>
                  <FontAwesomeIcon
                    icon={["fab", "stack-overflow"]}
                    style={{ marginRight: 15 }}
                  />
                  Other web stack including PostgreSQL, styled-components,
                  Bootstrap 4 and Ant Design, also able to perform basic design
                  with Photoshop.
                </li>
              </ul>
            </div>
            {/* ) : tabRoute === "education" ? ( */}
            <div className={`tab-pane ${tabEducation}`}>
              <ul
                style={{
                  listStyle: "none",
                  fontWeight: 100,
                  fontSize: 13,
                  marginLeft: -40
                }}
              >
                <li style={{ marginBottom: 10, textAlign: "justify" }}>
                  <FontAwesomeIcon
                    icon={["fas", "university"]}
                    style={{ marginRight: 15 }}
                  />
                  Currently on semester 7 with a GPA of 3.46, taking System of
                  Information Major at STMIK Swadharma, Jakarta.
                </li>
                <li
                  style={{
                    marginTop: 15,
                    marginBottom: 15,
                    textAlign: "justify"
                  }}
                >
                  <FontAwesomeIcon
                    icon={["fas", "book-open"]}
                    style={{ marginRight: 15 }}
                  />
                  Took Entry & Advance Engineering HP Indigo Digital Printing
                  Course at HP Training Center in Barcelona, Spain.
                </li>
                <li style={{ textAlign: "justify" }}>
                  <FontAwesomeIcon
                    icon={["fas", "laptop-code"]}
                    style={{ marginRight: 15 }}
                  />
                  Take Udemy courses with various topics such as React, React
                  Native, Redux, NodeJS, MySQL, PostgreSQL, Photoshop, Digital
                  Marketing, etc.
                </li>
              </ul>
            </div>
            {/* ) : null} */}
          </div>
        </div>
      </div>
    </div>
  );
}
