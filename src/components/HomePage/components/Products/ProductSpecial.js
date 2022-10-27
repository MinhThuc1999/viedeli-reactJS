import React from "react";
import "./product.scss";
function ProductSpecial({ img, nameProduct, category, price }) {
  return (
    <div className="product-box--item">
      <a href="#">
        <img src={img} alt="" />
      </a>
      <h3>
        <a href="#">{nameProduct}</a>
      </h3>
      <span className="item__category">
        <a href="#">{category}</a>
      </span>
      <span className="item__price">{price} đ/kg</span>
    </div>
  );
}

export default ProductSpecial;
