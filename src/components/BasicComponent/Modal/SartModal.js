import React from "react";

export default function SartModal() {
  return (
    // {/* <!-- Sart Modal --> */}
    <div
      className="modal fade"
      id="myModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header justify-content-center">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              <i className="tim-icons icon-simple-remove" />
            </button>
            <h4 className="title title-up">Modal title</h4>
          </div>
          <div className="modal-body">
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean. A small river named Duden flows by their
              place and supplies it with the necessary regelialia. It is a
              paradisematic country, in which roasted parts of sentences fly
              into your mouth.
            </p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default">
              Nice Button
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    // {/* <!--  End Modal --> */}
  );
}
