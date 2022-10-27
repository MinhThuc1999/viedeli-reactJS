import { Row, Col } from "antd";
import React from "react";
import "./box.scss";
function Mission({ img, title, content }) {
  return (
    <div className="introduct__item">
      <img src={require("~/assets/images/introduct/coffe.png")} alt="" />
      <div className="content">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Mission;
