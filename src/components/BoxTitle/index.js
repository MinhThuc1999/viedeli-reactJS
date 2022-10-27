import React from "react";
import { Link } from "react-router-dom";
import "./boxTitle.scss";
function BoxTitle({ namePage }) {
  return (
    <div>
      <section className="main-title">
        <div className="container">
          <h2>{namePage}</h2>
          <ul className="link">
            <Link to="/">Trang chủ</Link>
            <span style={{ fontWeight: "600" }}> / {namePage}</span>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default BoxTitle;
