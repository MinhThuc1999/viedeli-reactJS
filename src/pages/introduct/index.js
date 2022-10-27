import React from "react";
import BoxTitle from "~/components/BoxTitle";
import "./introduct.scss";
import { Col, Row } from "antd";
import Mission from "~/components/HomePage/components/Introduct";
import ContactSection from "~/components/Contact";
import Footer from "~/components/Footer";
function Introduct() {
  return (
    <div>
      <BoxTitle namePage={"Giới thiệu"} />
      <section className="posts-title">
        <div className="container">
          <Row>
            <Col span={10}>
              <div className="posts-title--left">
                <p>
                  Vie là mã quốc gia của Việt Nam trong bảng tên viết tắt quốc
                  tế, đồng thời trong tiếng Pháp và một số ngôn ngữ khác, Vie có
                  nghĩa là Cuộc Sống, Sự Sống, Đời (La Vie).
                </p>

                <p>
                  Deli là viết tắt của Délicieux (tiếng Pháp), Delicious (tiếng
                  Anh), Delizioso (tiếng Ý), hay Délicat (tiếng Pháp) và
                  Delicate (tiếng Anh). Trong các ngôn ngữ phổ biến ở Châu Âu
                  thì Deli thường được dùng để chỉ các loại đồ ăn thức uống, đặc
                  biệt sử dụng trong ẩm thực với ý nghĩa thơm ngon, tinh tế.
                </p>

                <p>
                  Vie Deli hướng tới việc cung cấp đồ ăn thức uống thơm ngon và
                  tinh khiết cho tất cả mọi người.
                </p>
              </div>
            </Col>
            <Col className="posts-title--right" span={14}>
              <img
                src={require("~/assets/images/introduct/banner.jpg")}
                alt=""
              />
            </Col>
          </Row>
        </div>
      </section>
      <section className=" introduct-top">
        <div className="introduct-top--title">
          <img
            src={require("~/assets/images/introduct/icon-small.jpg")}
            alt=""
          />
          <p>Cà phê thiên nhiên nguyên chất tại Việt Nam</p>
        </div>
        <div className="introduct-top--main">
          <Row>
            <Col span={8}>
              <img
                src={require("~/assets/images/introduct/intro1.jpg")}
                alt=""
              />
            </Col>
            <Col span={8}>
              <img
                src={require("~/assets/images/introduct/intro2.jpg")}
                alt=""
              />
            </Col>
            <Col span={8}>
              <img
                src={require("~/assets/images/introduct/intro3.jpg")}
                alt=""
              />
            </Col>
          </Row>
        </div>
        <div className="introduct-top--bot">
          <p>Về chúng tôi</p>
          <p>
            Là những người đã từng sinh sống và học tập ở Việt Nam cũng như một
            số quốc gia phát triển trên thế giới, chúng tôi mong muốn mang lại
            cho người Việt Nam những sản phẩm thực sự chất lượng và đem những
            sản phẩm thơm ngon tinh khiết do người Việt làm ra tới mọi ngóc
            ngách địa cầu.
          </p>
        </div>
      </section>
      <section className="introduct-main">
        <div className="introduct--block">
          <p>Câu truyện của chúng tôi</p>
          <p>
            Từ nghiền đến đam mê và mong muốn chia sẻ thói quen sử dụng cà phê
            an toàn theo chuẩn mực quốc tế, chúng tôi đã thành lập doanh nghiệp
            năm 2013 nhằm quảng bá phong cách thưởng thức cà phê thiên nhiên
            nguyên chất. Chúng tôi mong muốn sau này những ai thưởng thức cà phê
            trên thế giới có thể biết rằng họ đang tận hưởng hương vị cà phê đến
            từ Việt Nam.
          </p>
        </div>
      </section>
      <section className="introduct-bottom">
        <div className="container">
          <div className="introduct-bottom--top">
            <p>Tầm nhìn sứ mệnh</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex eadolore magnam aliquam quaerat voluptatem.
            </p>
          </div>

          <div className="introduct-bottom--main">
            <Row>
              <Col span={8}>
                <Mission
                  title="DẪN ĐẦU"
                  content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eadolore magnam aliquam quaerat voluptatem."
                />
              </Col>
              <Col span={8}>
                <Mission
                  title="DẪN ĐẦU"
                  content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eadolore magnam aliquam quaerat voluptatem."
                />
              </Col>
              <Col span={8}>
                <Mission
                  title="DẪN ĐẦU"
                  content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eadolore magnam aliquam quaerat voluptatem."
                />
              </Col>
            </Row>
          </div>
          <div className="introduct-bottom--bottom">
            <p>Giao hàng miễn phí tại Hanoi</p>
            <p>
              cho đơn hàng từ 3kg trở lên. 10.000đ cho các đơn hàng tại Hà Nội
              dười 3kg và 50.000đ phí tới các tỉnh và thành phố khác trên toàn
              quốc cho đơn hàng bất kỳ dưới 20kg.
            </p>
          </div>
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
    </div>
  );
}

export default Introduct;
