import React, { Component } from "react";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faEnvelopeSquare, faUnlockAlt, } from '@fortawesome/free-solid-svg-icons'

import Homepage from "./components/HomePage";
import LandingPage from "./components/LandingPage";

library.add(fab, faCheckSquare, faCoffee, faEnvelopeSquare, faUnlockAlt)


class App extends Component {
  state = {
    route: "home"
  };
  render() {
    const { route } = this.state;

    return (
      <React.Fragment>
        {route === "home" ? <Homepage /> : <LandingPage />}
      </React.Fragment>
    );
  }
}
export default App;
