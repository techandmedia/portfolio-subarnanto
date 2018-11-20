import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import denys from "../../../assets/img/denys.jpg";
import fabien from "../../../assets/img/fabien-bazanegue.jpg";
import mark from "../../../assets/img/mark-finn.jpg";

const data = [
  {
    id: 0,
    image: denys,
    active: "active",
    desc: "Big City Life, United States",
    alt: "First Picture"
  },
  {
    id: 1,
    image: fabien,
    active: "active",
    desc: "Somewhere Beyond, United States",
    alt: "Second Picture"
  },
  {
    id: 2,
    image: mark,
    active: "active",
    desc: "Stocks, United States",
    alt: "Third Picture"
  }
];

function CarouselIndicator(props) {
  const i = props.i;
  const carousel = data.map(car => {
    if (i === car.id) {
      return <li key={car.id} data-slide-to={i} className="active" />;
    } else {
      return <li key={car.id} data-slide-to={i} />;
    }
  });
  return <ol className="carousel-indicators">{carousel}</ol>;
}

export default class MainCarousel extends React.Component {
  state = {
    i: 0
  };

  onArrowRight = a => {
    const dl = data.length - 1;
    if (this.state.i === dl) {
      this.setState({ i: 0 });
    } else {
      this.setState({ i: this.state.i + a });
    }
  };

  onArrowLeft = a => {
    const dl = data.length - 1;
    if (this.state.i === 0) {
      this.setState({ i: dl });
    } else {
      this.setState({ i: this.state.i - a });
    }
  };

  render() {
    const { i } = this.state;

    return (
      <div className="col-md-6">
        <div className="row justify-content-between align-items-center">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <CarouselIndicator i={i} />
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <img
                  className="d-block"
                  src={data[i].image}
                  alt={data[i].alt}
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{data[i].desc}</h5>
                </div>
              </div>
            </div>
            <span className="carousel-control-prev">
              <FontAwesomeIcon
                onClick={() => this.onArrowLeft(1)}
                icon={["fas", "arrow-left"]}
                style={{ cursor: "pointer" }}
              />
            </span>
            <span className="carousel-control-next">
              <FontAwesomeIcon
                onClick={() => this.onArrowRight(1)}
                icon={["fas", "arrow-right"]}
                style={{ cursor: "pointer" }}
              />
            </span>
          </div>
        </div>
      </div>
    );
  }
}
