import { Col, Pagination, Row } from "antd";
import React from "react";
import NewBox from "./components/NewBox";
import "./hotNew.scss";
function HotNews() {
  return (
    <div className="section-box news-box">
      <div className="container">
        <h2 className="section-title">tin nổi bật</h2>
        <Row>
          <Col span={8}>
            <NewBox
              image={require("~/assets/images/new-thumbnail-1.jpg")}
              title="Viedeli - đại lý phân phối cafe Y5 đã có mặt tại thành phố Nha Trang"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem repudiandae eveniet itaque, error consequuntur voluptatem fugit pariatur voluptatum iure sequi, ab ea similique inventore quos distinctio amet. Odio, adipisci ipsum."
            />
          </Col>
          <Col span={8}>
            <NewBox
              image={require("~/assets/images/new-thumbnail-1.jpg")}
              title="Viedeli - đại lý phân phối cafe Y5 đã có mặt tại thành phố Nha Trang"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem repudiandae eveniet itaque, error consequuntur voluptatem fugit pariatur voluptatum iure sequi, ab ea similique inventore quos distinctio amet. Odio, adipisci ipsum."
            />
          </Col>
          <Col span={8}>
            <NewBox
              image={require("~/assets/images/new-thumbnail-1.jpg")}
              title="Viedeli - đại lý phân phối cafe Y5 đã có mặt tại thành phố Nha Trang"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem repudiandae eveniet itaque, error consequuntur voluptatem fugit pariatur voluptatum iure sequi, ab ea similique inventore quos distinctio amet. Odio, adipisci ipsum."
            />
          </Col>
        </Row>
        <div style={{ textAlign: "center", marginTop: 30 }}>
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
    </div>
  );
}

export default HotNews;
