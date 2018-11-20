import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactForm() {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card card-plain">
              <div className="card-header">
                <h1 className="profile-title text-left">Contact</h1>
                <h5 className="text-on-back">03</h5>
              </div>
              <div className="card-body">
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Your Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Eko Andri"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Email address</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="anyemail@email.com"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Phone</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="62-8117011090"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Company</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="subarnanto.com"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Message</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Hi there, sorry this feature isn't working yet, text me to get further information"
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-round float-right"
                    rel="tooltip"
                    data-original-title="Can't wait for your message"
                    data-placement="right"
                  >
                    Send text
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-4 ml-auto">
            <div className="info info-horizontal">
              <div className="icon icon-primary">
                <FontAwesomeIcon
                  icon={["fas", "map-pin"]}
                  style={{ marginTop: 8 }}
                />
              </div>
              <div className="description">
                <h4 className="info-title">Find me at school at</h4>
                <p>
                  <span style={{ fontWeight: 700, fontSize: 14 }}>
                    STMIK Swadharma
                  </span>
                  <br /> Jl. Malaka No.3 Jakarta,
                  <br /> Indonesia
                </p>
              </div>
            </div>
            <div className="info info-horizontal">
              <div className="icon icon-primary">
                <FontAwesomeIcon
                  icon={["fas", "mobile"]}
                  style={{ marginTop: 8 }}
                />
              </div>
              <div className="description">
                <h4 className="info-title">Or contact me directly</h4>
                <p>
                  <span style={{ fontWeight: 700, fontSize: 14 }}>Andri</span>
                  <br /> +62 811 7011 090
                  <br /> Mon - Fri, 8:00-21:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
