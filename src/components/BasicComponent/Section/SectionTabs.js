import React from "react";

export default function SectionTabs() {
  return (
    <div className="section section-tabs">
      <div className="container">
        <div className="title">
          <h3 className="mb-3">Navigation Tabs</h3>
        </div>
        <div className="row">
          <div className="col-md-10 ml-auto col-xl-6 mr-auto">
            <div className="mb-3">
              <small className="text-uppercase font-weight-bold">
                With icons
              </small>
            </div>
            {/* <!-- Nav tabs --> */}
            <div className="card">
              <div className="card-header">
                <ul className="nav nav-tabs nav-tabs-primary" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#link1"
                      role="tablist"
                    >
                      <i className="tim-icons icon-spaceship" /> Profile
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#link2"
                      role="tablist"
                    >
                      <i className="tim-icons icon-settings-gear-63" /> Settings
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#link3"
                      role="tablist"
                    >
                      <i className="tim-icons icon-bag-16" /> Options
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                {/* <!-- Tab panes --> */}
                <div className="tab-content tab-space">
                  <div className="tab-pane active" id="link1">
                    <p>
                      Collaboratively administrate empowered markets via
                      plug-and-play networks. Dynamically procrastinate B2C
                      users after installed base benefits.
                      <br />
                      <br /> Dramatically visualize customer directed
                      convergence without revolutionary ROI.
                    </p>
                  </div>
                  <div className="tab-pane" id="link2">
                    <p>
                      Completely synergize resource taxing relationships via
                      premier niche markets. Professionally cultivate one-to-one
                      customer service with robust ideas.
                      <br />
                      <br />
                      Dynamically innovate resource-leveling customer service
                      for state of the art customer service.
                    </p>
                  </div>
                  <div className="tab-pane" id="link3">
                    <p>
                      Efficiently unleash cross-media information without
                      cross-media value. Quickly maximize timely deliverables
                      for real-time schemas.
                      <br />
                      <br /> Dramatically maintain clicks-and-mortar solutions
                      without functional solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-10 ml-auto col-xl-6 mr-auto">
            <div className="mb-3">
              <small className="text-uppercase font-weight-bold">
                With text
              </small>
            </div>
            {/* <!-- Tabs with Background on Card --> */}
            <div className="card">
              <div className="card-header">
                <ul className="nav nav-tabs nav-tabs-primary" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#link4"
                      role="tablist"
                    >
                      Profile
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#link5"
                      role="tablist"
                    >
                      Settings
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#link6"
                      role="tablist"
                    >
                      Options
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                {/* <!-- Tab panes --> */}
                <div className="tab-content tab-space">
                  <div className="tab-pane active" id="link4">
                    <p>
                      {" "}
                      These cases are perfectly simple and easy to distinguish.
                      In a free hour, when our power of choice is untrammelled
                      and when nothing prevents our being able to do what we
                      like best, every pleasure is to be welcomed and every pain
                      avoided.
                      <br />
                      But in certain circumstances and owing to the claims of
                      duty or the obligations of business it will frequently
                      occur that pleasures
                    </p>
                  </div>
                  <div className="tab-pane" id="link5">
                    <p>
                      {" "}
                      I will be the leader of a company that ends up being worth
                      billions of dollars, because I got the answers. I
                      understand culture. I am the nucleus. I think that’s a
                      responsibility that I have, to push possibilities, to show
                      people, this is the level that things could be at. I think
                      that’s a responsibility that I have, to push
                      possibilities, to show people, this is the level that
                      things could be at.{" "}
                    </p>
                  </div>
                  <div className="tab-pane" id="link6">
                    <p>
                      I think that’s a responsibility that I have, to push
                      possibilities, to show people, this is the level that
                      things could be at. So when you get something that has the
                      name Kanye West on it, it’s supposed to be pushing the
                      furthest possibilities. I will be the leader of a company
                      that ends up being worth billions of dollars, because I
                      got the answers. I understand culture. I am the nucleus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Tabs on plain Card --> */}
          </div>
        </div>
      </div>
    </div>
    // {/* <!-- End Section Tabs --> */}
  );
}
