import React from "react";
import "./newBox.scss";
function NewBox({ col = 8, image, title, content }) {
  return (
    <div className="news-box__item">
      <a href="#">
        <img src={image} alt="" />
      </a>
      <p className="item__category">
        <a href="#">Tin nổi bật</a>
      </p>
      <h3>
        <a href="#">{title}</a>
      </h3>
      <p className="item__desc">{content}</p>
    </div>
  );
}

export default NewBox;
