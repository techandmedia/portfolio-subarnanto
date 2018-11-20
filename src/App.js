import React, { Component } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas, faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

// Navigation
import NavBar from "./components/Navigation/NavBar";
import Footer from "./components/Navigation/Footer";
// import NavBar from "./components/Navigation/NavBar2";
// import NavBar from "./components/Navigation/NavBar3";

// Content
import Homepage from "./components/HomePage";
import ProfilePage from "./components/Content/ProfilePage";
import CurrentProject from "./components/Content/CurrentProject";
import PastProject from "./components/Content/PastProject";

library.add(fab, far, fas, faEnvelopeSquare);

class App extends Component {
  state = {
    route: "profile-page"
  };

  // componentDidMount() {
  //   console.log("app", window.history.state, window.history);
  // }

  onRouteChange = route => {
    if (route === "profile-page") {
      // console.log("profile1", window.history.state, window.history);
      this.setState({
        path: window.history.pushState(route, "Profile Page", "/profile")
      });
      // console.log("profile2", window.history.state, window.history);
    } else if (route === "project-current") {
      this.setState({
        route,
        path: window.history.pushState(
          route,
          "Current Project",
          "/current-project"
        )
      });
    } else if (route === "project-past") {
      this.setState({
        route,
        path: window.history.pushState(route, "Past Project", "/past-project")
      });
    } else if (route === "home-page") {
      this.setState({
        route,
        path: window.history.pushState(route, "Homepage", "/")
      });
    }
    this.setState({ route });
  };

  render() {
    const { route } = this.state;
    const { onRouteChange } = this;

    return (
      <React.Fragment>
        {route === "profile-page" ? (
          <div className="profile-page">
            <NavBar onRouteChange={onRouteChange} />
            {/* <NavBar2 onRouteChange={onRouteChange} /> */}
            <div className="wrapper">
              <ProfilePage onRouteChange={onRouteChange} />
              <Footer onRouteChange={onRouteChange} />
            </div>
          </div>
        ) : route === "project-current" ? (
          <div className="profile-page">
            <NavBar onRouteChange={onRouteChange} />
            {/* <NavBar2 onRouteChange={onRouteChange} /> */}
            <div className="wrapper">
              <CurrentProject />
              <Footer onRouteChange={onRouteChange} />
            </div>
          </div>
        ) : route === "project-past" ? (
          <div className="landing-page">
            <NavBar onRouteChange={onRouteChange} />
            {/* <NavBar2 onRouteChange={onRouteChange} /> */}
            <div className="wrapper">
              <PastProject />
              <Footer onRouteChange={onRouteChange} />
            </div>
          </div>
        ) : route === "home-page" ? (
          <div className="index-page">
            <NavBar onRouteChange={onRouteChange} />
            {/* <NavBar3 onRouteChange={onRouteChange} /> */}
            <div className="wrapper">
              <Homepage />
              <Footer onRouteChange={onRouteChange} />
            </div>
          </div>
        ) : (
          <div className="index-page">
            <NavBar onRouteChange={onRouteChange} />
            <div className="wrapper">
              {/* <NavBar2 onRouteChange={onRouteChange} /> */}
              <Homepage />
              <Footer onRouteChange={onRouteChange} />
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
export default App;
