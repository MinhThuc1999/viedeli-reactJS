import React from "react";
import { Col, Row } from "antd";
import "./header.scss";
import { publicRoutes } from "~/routes/routes";
import { Link, Outlet } from "react-router-dom";
import SearchForm from "../HomePage/components/SearchForm";
import PhoneContact from "../HomePage/components/PhoneContact";
//import imgLogo from "~/assets/images/logo.png";
function Header() {
  const [toggle, setToggle] = React.useState(false);

  return (
    <div>
      <header className="header">
        <div>
          <Row>
            <Col span={3} offset={1}>
              <div className="header__logo">
                <Link to="/">
                  <img src={require("~/assets/images/logo.png")} alt="" />
                </Link>
              </div>
            </Col>
            <Col span={14}>
              {" "}
              <nav className="header__nav">
                <ul>
                  {publicRoutes.map((item) => {
                    return (
                      <li key={item.id}>
                        <Link to={item.path}>{item.content}</Link>
                      </li>
                    );
                  })}
                  <li>
                    {toggle ? <SearchForm /> : null}
                    <p
                      onClick={() => {
                        setToggle((s) => !s);
                        console.log(toggle);
                      }}
                      className="icon-search"
                    >
                      <img
                        src={require("~/assets/images/search-icon.png")}
                        className="header--search-icon"
                        alt=""
                      />
                    </p>
                  </li>
                </ul>
              </nav>
            </Col>
            <Col span={6}>
              {" "}
              <PhoneContact
                text={"HOTLINE 24/7"}
                numberPhone="090.154.8866"
                colorText={"#767676"}
                colorNumber="#898f4b"
              />
            </Col>
          </Row>
        </div>
      </header>
    </div>
  );
}

export default Header;
