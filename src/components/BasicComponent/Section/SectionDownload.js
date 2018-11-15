import React from "react";

export default function SectionDownload() {
  return (
    <div
      className="section section-download"
      id="#download-section"
      data-background-color="black"
    >
      <img src="assets/img/path1.png" className="path" />
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="text-center col-md-12 col-lg-8">
            <h2 className="title">
              Do you love this Bootstrap 4 Design System?
            </h2>
            <h4 className="description">
              Cause if you do, it can be yours for FREE. Hit the button below to
              navigate to Creative Tim where you can find the design system in
              HTML format. Start a new project or give an old Bootstrap project
              a new look!
            </h4>
          </div>
          <div className="text-center col-md-12 col-lg-8">
            <a
              href="https://www.creative-tim.com/product/blk-design-system"
              className="btn btn-primary btn-round btn-lg"
              role="button"
            >
              Download HTML
            </a>
            {/* <!-- <a href="https://www.invisionapp.com/now" target="_blank" className="btn btn-primary btn-lg btn-simple btn-round" role="button">
						Download PSD/Sketch
					</a> --> */}
          </div>
        </div>
        <br />
        <br />
        <br />
        {/* <!-- <div className="row text-center mt-5">
				<div className="col-md-8 ml-auto mr-auto">
					<h2>Want more?</h2>
					<h5 className="description">We've just launched <a href="http://demos.creative-tim.com/black-kit-pro/presentation.html" target="_blank">BLK• Design System PRO</a>. It has a huge number of components, sections and example pages. Start Your Development With A Badass Bootstrap 4 Design System.</h4>
				</div>
				<div className="col-md-12">
					<a href="http://demos.creative-tim.com/black-kit-pro/presentation.html" className="btn btn-neutral btn-round btn-lg" target="_blank">
						<i className="tim-icons icon-cloud-upload-94"></i> Upgrade to PRO
					</a>
				</div>
			</div> --> */}
        <br />
        <br />
        <div className="row row-grid align-items-center my-md">
          <div className="col-lg-6">
            <h3 className="text-primary font-weight-light mb-2">
              Thank you for supporting us!
            </h3>
            <h4 className="mb-0 font-weight-light">
              Let's get in touch on any of these platforms.
            </h4>
          </div>
          <div className="col-lg-6 text-lg-center btn-wrapper">
            <a
              id="twitter"
              className="btn btn-icon btn-twitter btn-round btn-lg"
              data-toggle="tooltip"
              data-original-title="Tweet!"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              id="facebook"
              className="btn btn-icon btn-facebook btn-round btn-lg"
              data-toggle="tooltip"
              data-original-title="Share!"
            >
              <i className="fab fa-facebook-square" />
            </a>
            <a
              target="_blank"
              href="https://github.com/creativetimofficial"
              className="btn btn-icon btn-github btn-round btn-lg"
              data-toggle="tooltip"
              data-original-title="Star on Github"
            >
              <i className="fab fa-github" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
