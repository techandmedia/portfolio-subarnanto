import React from "react";

import NavBar from "./BasicComponent/NavBar";
import HomeContent from "./Content/HomeContent";

export default function Homepage() {
  return (
    <div className="index-page">
      <NavBar />
      <HomeContent />
    </div>
  );
}
