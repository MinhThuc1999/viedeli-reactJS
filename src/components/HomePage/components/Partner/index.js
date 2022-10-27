import { Col, Row } from "antd";
import React from "react";
import "./partner.scss";

const style = {
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
};
function Partner() {
  return (
    <div>
      <div className="partner-box__list">
        <Row>
          <Col span={6} style={style}>
            <div className="partner-box--item">
              <a href="#">
                <img src={require("~/assets/images/partner-1.png")} alt="" />
              </a>
            </div>
          </Col>
          <Col span={6} style={style}>
            <div className="partner-box--item">
              <a href="#">
                <img src={require("~/assets/images/partner-2.png")} alt="" />
              </a>
            </div>
          </Col>
          <Col span={6} style={style}>
            <div className="partner-box--item">
              <a href="#">
                <img src={require("~/assets/images/partner-3.png")} alt="" />
              </a>
            </div>
          </Col>
          <Col span={6} style={style}>
            <div className="partner-box--item">
              <a href="#">
                <img src={require("~/assets/images/partner-4.png")} alt="" />
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Partner;
