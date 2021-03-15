import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
export default class BootstrapCarousel extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <div className="row title" style={{ marginBottom: "20px" }}>
          </div>
        </div>
        <div className="container">
          <Carousel>
            <Carousel.Item style={{ height: "300px"}}>
              <img
                style={{ height: "300px"}}
                //className="d-block w-100"
                src={"assets/carousel2.jpg"}
              />
            </Carousel.Item>
            <Carousel.Item style={{ height: "300px"}}>
              <img
                style={{ height: "300px" }}
                //className="d-block w-100"
                src={"assets/carousel1.jpg"}
              />
            </Carousel.Item>
            <Carousel.Item style={{ height: "300px"}}>
              <img
                style={{ height: "300px"  }}
                //className="d-block w-100"
                src={"assets/carousel3.jpg"}
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}