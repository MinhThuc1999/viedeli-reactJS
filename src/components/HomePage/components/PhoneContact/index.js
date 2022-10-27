import React from "react";
import "./phone.scss";
function PhoneContact({ text, numberPhone, colorText, colorNumber }) {
  return (
    <div className="header__hotline">
      <span style={{ color: `${colorText}` }}>{text}</span>
      <span style={{ color: `${colorNumber}` }}>{numberPhone}</span>
    </div>
  );
}

export default PhoneContact;
