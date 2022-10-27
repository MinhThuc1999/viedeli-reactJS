import { Carousel, Col, Row } from "antd";
import React from "react";
import { AiOutlineTwitter, AiOutlineWifi } from "react-icons/ai";
import { FaFacebookF, FaGooglePlusG, FaPinterest } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import BoxTitle from "~/components/BoxTitle";
import Evaluate from "~/components/Evaluate";
import Footer from "~/components/Footer";
import PhoneContact from "~/components/HomePage/components/PhoneContact";
import products from "~/data/product";
import "./productDetail.scss";
function ProductDetail() {
  const params = useParams();
  const product = products.find((id) => id.id.toString() === params.id);
  return (
    <div>
      <BoxTitle namePage={"Sản phẩm"} />
      <section className="product-header">
        <div className="container">
          <div className="header--box">
            <Row>
              <Col span={12}>
                <img style={{ width: "100%" }} src={product.image} alt="" />
              </Col>
              <Col span={12}>
                <div className="box__right">
                  <h2>{product.name}</h2>
                  <p className="text-link">Thuần / Pure Robusta</p>
                  <p className="text-title">MÔ TẢ:</p>
                  <p className="text-decoration">{product.describe}</p>
                  <p className="price">{product.price} đ/kg</p>
                  <div className="contact-box--form--button-wrap">
                    <Row>
                      <Col span={10}>
                        <p>
                          <a href="#">Đặt Hàng</a>
                        </p>
                      </Col>
                      <Col span={10} offset={2}>
                        <PhoneContact
                          text={"ĐẶT HÀNG"}
                          numberPhone="0983.418.935"
                          colorText={"#767676"}
                          colorNumber="#898f4b"
                        />
                      </Col>
                    </Row>
                  </div>
                  <div className="share">
                    <ul>
                      <li>Chia sẻ:</li>
                      <Link
                        style={{ marginRight: "10px" }}
                        className="link"
                        to=""
                      >
                        <FaFacebookF size={18} />
                      </Link>
                      <Link
                        style={{ marginRight: "10px" }}
                        className="link"
                        to=""
                      >
                        <AiOutlineTwitter size={18} />
                      </Link>

                      <Link
                        style={{ marginRight: "10px" }}
                        className="link"
                        to=""
                      >
                        <FaGooglePlusG size={18} />
                      </Link>
                    </ul>
                  </div>
                  <p className="line"></p>
                  <p className="text-service">
                    Giao hàng miễn phí tại Hanoi cho đơn hàng từ 3kg trở lên.
                    10.000đ cho các đơn hàng tại Hà Nội dười 3kg và 50.000đ phí
                    tới các tỉnh và thành phố khác trên toàn quốc cho đơn hàng
                    bất kỳ dưới 20kg.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>
      <section className="section-box product-main">
        <div className="container">
          <div className="main--top">
            <h2>Thông tin sản phẩm</h2>
            <div className="slide">
              <Carousel autoplay>
                <div>
                  <img
                    src={require("~/assets/images/sản phẩm chi tiết/slide.jpg")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={require("~/assets/images/sản phẩm chi tiết/slide.jpg")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={require("~/assets/images/sản phẩm chi tiết/slide.jpg")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={require("~/assets/images/sản phẩm chi tiết/slide.jpg")}
                    alt=""
                  />
                </div>
              </Carousel>
            </div>

            <div className="text">
              <p>{product.infomation}</p>
            </div>
          </div>
          <Evaluate />
        </div>
      </section>
      <footer className="footer">
        <section className="footer-inner section-box">
          <div className="container">
            <Footer />
          </div>
        </section>
      </footer>
    </div>
  );
}

export default ProductDetail;
