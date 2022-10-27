import { Col, Row } from "antd";
import React from "react";
import "./locationBox.scss";
import { GrNext } from "react-icons/gr";

function LocationBox() {
  return (
    <div className="section-box location-box">
      <Row>
        <Col span={12}>
          <div className="location-box__image">
            <img src={require("~/assets/images/service-bg.jpg")} alt="" />
          </div>
        </Col>
        <Col span={12}>
          <div className="location-box__item">
            <h2>Điểm phục vụ</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Este natus error sit voluptatem accusantium
              doloremque laumagni dvdolore magnam aliquam quaerat voluptatem.
            </p>
            <span>
              <a href="server-add.html">Xem thêm</a>
              <GrNext />
            </span>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default LocationBox;
