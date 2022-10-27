import { Col, Row } from "antd";
import { FaFacebookF, FaGooglePlusG, FaPinterest } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineWifi } from "react-icons/ai";
import "./footer.scss";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <Row>
        <Col span={6}>
          <div className="footer--logo">
            <a href="#">
              <img src={require("~/assets/images/logo.png")} alt="" />
            </a>
          </div>
        </Col>
        <Col span={6}>
          <div className="footer--item">
            <h3>Công ty Vie Deli Việt Nam</h3>

            <p>
              Vie Deli Hanoi: <br />
              +84 (0)983 418 935 <br />
              Vie Deli Saigon: <br />
              +84 (0)917 850 810
            </p>
            <p>viedelicoffee@gmail.com</p>
          </div>
        </Col>
        <Col span={6}>
          <div className="footer--item">
            <h3>ĐỊA CHỈ</h3>

            <p>
              <b>Hà Nội:</b>
              <br />
              Số 33 Ngõ 424 Trần Khát Chân, Phường Phố Huế, Q. Hai Bà Trưng{" "}
            </p>

            <p>
              <b>Sài Gòn:</b>
              <br />
              29/11 Nguyễn Bỉnh Khiêm, Phường Đa Kao, Q1
            </p>
          </div>
        </Col>
        <Col span={6}>
          <div className="footer--item footer__subscribe-box">
            <h3>ĐĂNG KÝ NHẬN TIN KHUYẾN MÃI</h3>
            <div className="footer--subcribe">
              <form action="">
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email của bạn"
                    name=""
                    id=""
                  />
                </div>
              </form>
            </div>

            <div className="footer--social">
              <ul>
                <Link className="link" to="">
                  <FaFacebookF />
                </Link>
                <Link className="link" to="">
                  <AiOutlineTwitter />
                </Link>
                <Link className="link" to="">
                  <AiOutlineWifi />
                </Link>
                <Link className="link" to="">
                  <FaGooglePlusG />
                </Link>
                <Link className="link" to="">
                  <FaPinterest />
                </Link>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
