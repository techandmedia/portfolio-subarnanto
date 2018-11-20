import React from "react";
import dots from "../../assets/img/dots.png";
import path4 from "../../assets/img/path4.png";

import ProfileTitle from "./Profile/ProfileTitle";
import ProfileDetails from "./Profile/ProfileDetails";
import Carousel from "./Profile/Carousel";
import Projects from "./Profile/Projects";
import ContactForm from "./Profile/ContactForm";

export default class ProfilePage extends React.Component {
  state = {
    tabRoute: "skills",
    tabSkills: "active",
    tabEducation: null,
    tabPersonality: null
  };

  onTabChange = tabRoute => {
    if (tabRoute === "personality") {
      this.setState({
        tabRoute: tabRoute,
        tabSkills: null,
        tabEducation: null,
        tabPersonality: "active"
      });
    } else if (tabRoute === "education") {
      this.setState({
        tabRoute: tabRoute,
        tabSkills: null,
        tabEducation: "active",
        tabPersonality: null
      });
    } else if (tabRoute === "skills") {
      this.setState({
        tabRoute: tabRoute,
        tabSkills: "active",
        tabEducation: null,
        tabPersonality: null
      });
    }
    this.setState({ tabRoute });
  };

  // componentDidMount() {
  //   console.log(this.state);
  // }

  render() {
    const { onRouteChange } = this.props;

    return (
      <React.Fragment>
        <div className="page-header">
          <img src={dots} className="dots" alt="Dots" />
          <img src={path4} className="path" alt="Path4" />
          <div className="container align-items-center">
            <div className="row">
              <ProfileTitle />
              <ProfileDetails onTabChange={this.onTabChange} {...this.state} />
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <div className="row justify-content-between">
              <Carousel />
              <Projects onRouteChange={onRouteChange} />
            </div>
          </div>
        </div>
        <ContactForm />
      </React.Fragment>
    );
  }
}
