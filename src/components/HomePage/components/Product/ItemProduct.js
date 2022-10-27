import { Col } from "antd";
import React from "react";
import "./boxProduct.scss";
function ProductItem({ img, name, price }) {
  return (
    <div className="item">
      <p>
        <img src={img} alt="" />
      </p>
      <h4>
        <p>{name}</p>
      </h4>
      <p className="price">{price} đ/kg</p>
    </div>
  );
}

export default ProductItem;
