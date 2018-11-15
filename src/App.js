import React, { Component } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas, faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

// Navigation
import NavBar from "./components/Navigation/NavBar";
import Footer from "./components/Navigation/Footer";

// Content
import Homepage from "./components/HomePage";
import ProfilePage from "./components/Content/ProfilePage";
import CurrentProject from "./components/Content/CurrentProject";
import PastProject from './components/Content/PastProject'

library.add(fab, far, fas, faEnvelopeSquare);

class App extends Component {
  state = {
    route: "home-page"
  };

  componentDidMount() {
    console.log("app", this.state.route);
  }

  onRouteChange = route => {
    if (route === "profile-page") {
      this.setState({ route: route });
    } else if (route === "landing-page") {
      this.setState({ route: route });
    }
    this.setState({ route: route });
  };

  // handleClick = e => {
  // console.log("click ", e);
  // this.setState({
  //   current: e.key
  // });
  //   if (e === "login") {
  //     this.props.onRouteChange("signin");
  //   } else if (e.key === "register") {
  //     this.props.onRouteChange("register");
  //   } else if (e.key === "logout") {
  //     this.props.onRouteChange("home");
  //   } else if (e.key === "siakad") {
  //     this.props.onRouteChange("tentang-siakad");
  //   } else return null;
  // };

  render() {
    const { route } = this.state;
    const { onRouteChange } = this;

    return (
      <React.Fragment>
        {route === "profile-page" ? (
          <div className="profile-page">
          <NavBar onRouteChange={onRouteChange} />
          <div className="wrapper">
            <ProfilePage />
            <Footer />
          </div>
        </div>
        ) : route === "project-current" ? (
          <div className="landing-page">
            <NavBar onRouteChange={onRouteChange} />
            <div className="wrLandingPageer">
              <CurrentProject />
              <Footer />
            </div>
          </div>
        ) : route === "project-past" ? (
          <div className="landing-page">
            <NavBar onRouteChange={onRouteChange} />
            <div className="wrLandingPageer">
              <PastProject />
              <Footer />
            </div>
          </div>
        ) : route === "home-page" ? (
          <div className="index-page">
            <NavBar onRouteChange={onRouteChange} />
            <div className="wrapper">
              <Homepage />
              <Footer />
            </div>
          </div>
        ) : (
          <div className="index-page">
            <NavBar onRouteChange={onRouteChange} />
            <div className="wrapper">
              <Homepage />
              <Footer />
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
export default App;
