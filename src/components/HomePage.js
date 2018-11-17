import React from "react";

// import SectionBasic from "./BasicComponent/Section/SectionBasic";
// import SectionNavbars from "./BasicComponent/Section/SectionNavbars";
// import SectionTabs from "./BasicComponent/Section/SectionTabs";
// import SectionPagination from "./BasicComponent/Section/SectionPagination";
// import SectionNotification from "./BasicComponent/Section/SectionNotifications";
// import SectionTypo from "./BasicComponent/Section/SectionTyphography";
// import SectionJavascript from "./BasicComponent/Section/SectionJavascript";
// import SectionNucleon from "./BasicComponent/Section/SectionNucleon";
// import SectionSignUp from "./BasicComponent/Section/SectionSignUp";
// import SectionExamples from "./BasicComponent/Section/SectionExamples";
// import SectionDownload from "./BasicComponent/Section/SectionDownload";
// import SartModal from "./BasicComponent/Modal/SartModal";
// import MiniModal from "./BasicComponent/Modal/MiniModal";
// import FormModal from "./BasicComponent/Modal/FormModal";

export default function Homepage() {
  return (
    <React.Fragment>
      <div className="page-header header-filter">
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />
        <div className="container">
          <div className="content-center br/and">
            <h1 className="h1-seo">Web Developer & Designer</h1>
            <h3>
              Building a high quality and functional website and application do
              not have to be hard. Contact me and we will discuss how a website
              can amplify your business revenue.
            </h3>
          </div>
        </div>
      </div>
      {/* <div className="main">
        <SectionBasic />
        <SectionNavbars />
        <SectionTabs />
        <SectionPagination />
        <SectionNotification />
        <SectionTypo />
        <SectionJavascript />
        <SectionNucleon />
        <SectionSignUp />
        <SectionExamples />
        <SectionDownload />
        <SartModal />
        <MiniModal />
        <FormModal /> 
      </div>*/}
    </React.Fragment>
  );
}
