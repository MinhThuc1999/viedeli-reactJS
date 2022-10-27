import React from "react";
import "./BoxWhyUs.scss";
function BoxWhyUs({ icon, title, content }) {
  return (
    <div>
      <div className="why-us__item">
        <img src={icon} alt="" />
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default BoxWhyUs;
