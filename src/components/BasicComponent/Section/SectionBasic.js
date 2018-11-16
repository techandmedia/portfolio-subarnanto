import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function() {
  return (
    <div className="section section-basic" id="basic-elements">
      <img src="assets/img/path1.png" className="path" />
      <div className="container">
        <h2 className="title">Basic Elements</h2>
        <h3>Buttons</h3>
        <p className="category">Pick your style</p>
        <div className="row">
          <div className="col-md-10">
            <button className="btn btn-primary" type="button">
              Default
            </button>
            <button className="btn btn-primary btn-round" type="button">
              Round
            </button>
            <button className="btn btn-primary btn-round" type="button">
              <FontAwesomeIcon icon={['far','heart']} /> With Icon
            </button>
            <button
              className="btn btn-primary btn-icon btn-round"
              type="button"
            >
              <FontAwesomeIcon icon={['fas','heart']} />
            </button>
            <button
              className="btn btn-primary btn-simple btn-round"
              type="button"
            >
              Simple
            </button>
          </div>
        </div>
        <p className="category">Pick your size</p>
        <div className="row">
          <div className="col-md-10">
            <button className="btn btn-primary btn-sm">Small</button>
            <button className="btn btn-primary">Regular</button>
            <button className="btn btn-primary btn-lg">Large</button>
          </div>
        </div>
        <p className="category">Pick your color</p>
        <div className="row">
          <div className="col-md-12">
            <button className="btn">Default</button>
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-info">Info</button>
            <button className="btn btn-success">Success</button>
            <button className="btn btn-warning">Warning</button>
            <button className="btn btn-danger">Danger</button>
            <button className="btn btn-neutral">Neutral</button>
          </div>
        </div>
        <br />
        <h3>Links</h3>
        <div className="row">
          <div className="col-md-8">
            <button className="btn btn-link">Default</button>
            <button className="btn btn-link btn-primary ">Primary</button>
            <button className="btn btn-link btn-info">Info</button>
            <button className="btn btn-link btn-success">Success</button>
            <button className="btn btn-link btn-warning">Warning</button>
            <button className="btn btn-link btn-danger">Danger</button>
          </div>
        </div>
        <div className="space-70" />
        <div id="inputs">
          <h3>Inputs</h3>
          <p className="category">Form Controls</p>
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="form-group">
                <input
                  type="text"
                  // value=""
                  placeholder="Regular"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="form-group has-success">
                <input
                  type="text"
                  // value="Success"
                  className="form-control form-control-success"
                />
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="form-group has-danger">
                <input
                  type="email"
                  // value="Error Input"
                  className="form-control form-control-danger"
                />
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={['fas','user']} />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Left Font Awesome Icon"
                />
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Right Icon"
                />
                <div className="input-group-append">
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={['fas','lock']} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-70" />
        <div className="row" id="checkRadios">
          <div className="col-sm-6 col-lg-3">
            <p className="category">Checkboxes</p>
            <div className="form-check">
              <label className="form-check-label">
                <input className="form-check-input" type="checkbox" />
                <span className="form-check-sign" />
                Unchecked
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="checkbox"
                  onChange="checked"
                />
                <span className="form-check-sign" />
                Checked
              </label>
            </div>
            <div className="form-check disabled">
              <label className="form-check-label">
                <input className="form-check-input" type="checkbox" disabled />
                <span className="form-check-sign" />
                Disabled Unchecked
              </label>
            </div>
            <div className="form-check disabled">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked
                  disabled
                />
                <span className="form-check-sign" />
                Disabled Checked
              </label>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <p className="category">Radios</p>
            <div className="form-check form-check-radio">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                />
                <span className="form-check-sign" />
                Radio is off
              </label>
            </div>
            <div className="form-check form-check-radio">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option2"
                  checked
                />
                <span className="form-check-sign" />
                Radio is on
              </label>
            </div>
            <div className="form-check form-check-radio disabled">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios1"
                  id="exampleRadios2"
                  value="option3"
                  disabled
                />
                <span className="form-check-sign" />
                Disabled radio is off
              </label>
            </div>
            <div className="form-check form-check-radio disabled">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios1"
                  id="exampleRadios2"
                  value="option4"
                  disabled
                  checked
                />
                <span className="form-check-sign" />
                Disabled radio is on
              </label>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <p className="category">Toggle Buttons</p>
            <input
              type="checkbox"
              name="checkbox"
              className="bootstrap-switch"
              checked
            />
            <br />
            <input
              type="checkbox"
              name="checkbox"
              className="bootstrap-switch"
              data-on-label="ON"
              data-off-label="OFF"
            />
          </div>
          <div className="col-sm-6 col-lg-3">
            <p className="category">Sliders</p>
            <div id="sliderRegular" className="slider" />
            <br />
            <div id="sliderDouble" className="slider slider-primary" />
          </div>
        </div>
      </div>
    </div>
  );
}
