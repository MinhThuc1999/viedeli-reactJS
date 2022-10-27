import { Col, Row } from "antd";
import React from "react";
import "./evaluate.scss";
import Vote from "./Vote";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

function Evaluate() {
  const stars = [1, 2, 3, 4, 5];
  const [star, setStar] = React.useState(0);

  return (
    <div className="main--review">
      <div className="main__evaluate">
        <Row>
          <Col span={6}>
            <div className="eval-review">
              <p className="text">Đánh giá</p>
              <p className="average">4.1</p>
              <p className="stars">
                {stars.map((item, index) => {
                  let Star = AiFillStar;
                  if (index + 1 > star) {
                    Star = AiOutlineStar;
                  }

                  return (
                    <Star
                      size={32}
                      onClick={() => {
                        if (star === index + 1) {
                          setStar(0);
                        } else {
                          setStar(index + 1);
                        }
                      }}
                    />
                  );
                })}
              </p>
              <p className="total">(101 đánh giá &amp; nhận xét)</p>
            </div>
          </Col>
          <Col span={10}>
            <div className="status">
              <Vote />
            </div>
          </Col>
          <Col span={8}>
            <div className="submit-eval">
              <p>Bạn đã dùng sản phẩm này ?</p>
              <p>
                <a href="#">Gửi đánh giá của bạn</a>
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Evaluate;
