import { Col, Progress, Row } from "antd";
import React from "react";
import "./evaluate.scss";
function Vote({ arr = [59, 25, 8, 6, 5] }) {
  return (
    <div>
      <Row style={{ marginBottom: "10px" }}>
        <Col span={4}>5 sao</Col>
        <Col span={15}>
          <Progress percent={arr[0]} showInfo={false} />
        </Col>
        <Col span={4} offset={1}>
          {arr[0]}
        </Col>
      </Row>
      <Row style={{ marginBottom: "10px" }}>
        <Col span={4}>4 sao</Col>
        <Col span={15}>
          <Progress percent={arr[1]} showInfo={false} />
        </Col>
        <Col span={4} offset={1}>
          {arr[1]}
        </Col>
      </Row>
      <Row style={{ marginBottom: "10px" }}>
        <Col span={4}>3 sao</Col>
        <Col span={15}>
          <Progress percent={arr[2]} showInfo={false} />
        </Col>
        <Col span={4} offset={1}>
          {arr[2]}
        </Col>
      </Row>
      <Row style={{ marginBottom: "10px" }}>
        <Col span={4}>2 sao</Col>
        <Col span={15}>
          <Progress percent={arr[3]} showInfo={false} />
        </Col>
        <Col span={4} offset={1}>
          {arr[3]}
        </Col>
      </Row>
      <Row style={{ marginBottom: "10px" }}>
        <Col span={4}>1 sao</Col>
        <Col span={15}>
          <Progress percent={arr[4]} showInfo={false} />
        </Col>
        <Col span={4} offset={1}>
          {arr[4]}
        </Col>
      </Row>
    </div>
  );
}

export default Vote;
