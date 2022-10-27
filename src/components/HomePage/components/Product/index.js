import { Col, Row } from "antd";
import React from "react";
import ProductItem from "./ItemProduct";
import products from "~/data/product";
import "./boxProduct.scss";
import { Link } from "react-router-dom";
function BoxProduct({ category }) {
  return (
    <div className="post--categories">
      <div className="title">
        <h3>{category}</h3>
        <p>
          <a href="product-detail.html">Xem thêm</a>
        </p>
      </div>
      <div className="post--categories__list">
        <Row>
          {products.map((item, index) => {
            return (
              <Col span={6} key={index}>
                <Link to={`/product-detail/${item.id}`}>
                  <ProductItem
                    name={item.name}
                    price={item.price}
                    img={item.image}
                  />
                </Link>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default BoxProduct;
