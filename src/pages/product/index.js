import React from "react";
import BoxTitle from "~/components/BoxTitle";
import ContactSection from "~/components/Contact";
import Footer from "~/components/Footer";
import BoxProduct from "~/components/HomePage/components/Product";
import "./product.scss";
function Product() {
  return (
    <div>
      <BoxTitle namePage={"Sản phẩm"} />
      <section className="section-box categories-main">
        <div className="container">
          <BoxProduct category="iCafe" />
          <BoxProduct category={"BMT Cafe"} />

          <BoxProduct category="Cầu Đất Cafe" />
          <BoxProduct category="eCafe" />
          <BoxProduct category="aCafe" />
          <BoxProduct category="Cafe nhúng" />
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

export default Product;
