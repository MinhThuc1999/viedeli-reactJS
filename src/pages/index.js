import React from "react";
import { Outlet } from "react-router-dom";
import "./styleHomepage.scss";
import BoxWhyUs from "~/components/HomePage/components/BoxWhyUs";
import Slider from "~/components/HomePage/components/SliderCarousel";
import { Col, Row, Pagination } from "antd";
import ProductSpecial from "~/components/HomePage/components/Products/ProductSpecial";
import LocationBox from "~/components/HomePage/components/LocationBox";
import HotNews from "~/components/HomePage/components/HotNews";
import Partner from "~/components/HomePage/components/Partner";
import ContactSection from "~/components/Contact";
import Footer from "~/components/Footer";

function HomePage() {
  return (
    <div>
      <section>
        <Slider />
      </section>
      <section className="section-box why-us">
        <h2 className="section-title">Tại sao chọn Viedeli</h2>
        <Row>
          <Col span={7} offset={1}>
            <BoxWhyUs
              icon={require("~/assets/images/service-icon.png")}
              title={"CHẤT LƯỢNG CAO"}
              content={
                "Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Dtium, ququi dolor em ipsum quia dolor sit amet, consemag"
              }
            />
          </Col>
          <Col span={7} offset={1}>
            <BoxWhyUs
              icon={require("~/assets/images/service-icon.png")}
              title={"ĐA CHỦNG LOẠI"}
              content={
                "Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Dtium, ququi dolor em ipsum quia dolor sit amet, consemag"
              }
            />
          </Col>
          <Col span={7} offset={1}>
            <BoxWhyUs
              icon={require("~/assets/images/service-icon.png")}
              title={"SẢN PHẨM TỰ NHIÊN"}
              content={
                "Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Dtium, ququi dolor em ipsum quia dolor sit amet, consemag"
              }
            />
          </Col>
        </Row>
        <p className="why-us--reamore">
          <a href="#">Xem thêm</a>
        </p>
      </section>
      <section className="section-box product-box">
        <div className="container">
          <h2 className="section-title">
            Sản phẩm <span>Nổi bật</span> Vie Deli Coffee
          </h2>
          <div className="product-box__list">
            <Row>
              <Col span={8}>
                <ProductSpecial
                  img={require("~/assets/images/product-thumbnail.jpg")}
                  nameProduct={"Cafe nhúng"}
                  category={"VINAMITA ROBUSTA"}
                  price={"150.000 "}
                />
              </Col>
              <Col span={8}>
                <ProductSpecial
                  img={require("~/assets/images/product-thumbnail.jpg")}
                  nameProduct={"Cafe nhúng"}
                  category={"VINAMITA ROBUSTA"}
                  price={"150.000 "}
                />
              </Col>
              <Col span={8}>
                <ProductSpecial
                  img={require("~/assets/images/product-thumbnail.jpg")}
                  nameProduct={"Cafe nhúng"}
                  category={"VINAMITA ROBUSTA"}
                  price={"150.000 "}
                />
              </Col>
            </Row>
          </div>
          <div style={{ textAlign: "center", marginTop: 30 }}>
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </div>
      </section>
      <section>
        <LocationBox />
      </section>
      <section>
        <HotNews />
      </section>
      <section className="section-box partner-box">
        <div className="container">
          <h2 className="section-title">Đối tác</h2>
          <Partner />
        </div>
      </section>
      <footer className="footer">
        <section className="section-box contact-box">
          <ContactSection />
        </section>
        <section className="footer-inner section-box">
          <div className="container">
            <Footer />
          </div>
        </section>
      </footer>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default HomePage;
