import React from "react";
// import SectionNotifications from "../BasicComponent/Section/SectionNotifications";

import blob from "../../assets/img/blob.png";
import triunghiuri from "../../assets/img/triunghiuri.png";
import waves from "../../assets/img/waves.png";
import patrat from "../../assets/img/patrat.png";
import cercuri from "../../assets/img/cercuri.png";

export default function CurrentProject() {
  return (
    <React.Fragment>
      <div className="page-header">
        <img src={blob} className="path" alt="Placeholder" />
        <img src={triunghiuri} className="shapes triangle" alt="Placeholder" />
        <img src={waves} className="shapes wave" alt="Placeholder" />
        <img src={patrat} className="shapes squares" alt="Placeholder" />
        <img src={cercuri} className="shapes circle" alt="Placeholder" />
        <div className="container align-items-center">
          <div className="row">
            {/* <div className="col-lg-6 col-md-6"> */}
            {/* <h5 className="text-on-back"></h5> */}
            <p
              className="profile-description"
              style={{ marginBottom: 10, marginTop: 100 }}
            >
              This page is under development, thank you for visiting, come back
              latter.
            </p>
            {/* </div> */}
          </div>
        </div>
      </div>
      {/* <SectionNotifications /> */}
    </React.Fragment>
  );
}
