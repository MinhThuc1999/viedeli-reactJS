import React from "react";
import { Carousel } from "antd";

const contentStyle = {};

function Slider() {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <img src={require("~/assets/images/banner.png")} alt="" />
        </div>
        <div>
          <img src={require("~/assets/images/banner-2.png")} alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
