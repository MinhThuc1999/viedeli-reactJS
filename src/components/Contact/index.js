import { Col, Row } from "antd";
import React from "react";
import "./contactSection.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PhoneContact from "../HomePage/components/PhoneContact";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "at least 2 characters!")
    .max(50, "no more than 50 characters")
    .required("Required!!!"),
  lastName: Yup.string()
    .min(2, "at least 2 characters!")
    .max(50, "no more than 50 characters")
    .required("Required!!!"),
  email: Yup.string().email("Invalid email!!!").required("Required!!!"),
  passWord: Yup.string()
    .min(2, "at least 2 characters!")
    .max(50, "no more than 50 characters")
    .required("Required!!!"),
});

function ContactSection() {
  return (
    <div>
      <Row>
        <Col span={8}>
          <div className="contact-box--item">
            <img src={require("~/assets/images/contact-left.jpg")} alt="" />
          </div>
        </Col>
        <Col span={8}>
          <div className="contact-box--item">
            <div className="contact-box--form">
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                }}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                  // same shape as initial values
                  console.log(values);
                }}
              >
                <Form>
                  <p
                    style={{ paddingBottom: "26px" }}
                    className="section-title"
                  >
                    Liên hệ mua hàng
                  </p>
                  <p className="fiel_input">
                    <Field name="ten" type="text" placeholder="HỌ VÀ TÊN" />
                  </p>
                  <p style={{ color: "red" }}>
                    <ErrorMessage name="passWord" />
                  </p>
                  <p className="fiel_input">
                    <Field name="email" type="email" placeholder="Email" />
                  </p>
                  <p style={{ color: "black" }}>
                    <ErrorMessage name="email" />
                  </p>
                  <p className="fiel_input">
                    <Field
                      name="phone"
                      type="text"
                      placeholder="SỐ ĐIỆN THOẠI"
                    />
                  </p>
                  <p style={{ color: "red" }}>
                    <ErrorMessage name="passWord" />
                  </p>
                  <div className="contact-box--form--button-wrap">
                    <Row>
                      <Col span={10}>
                        <button type="submit">Liên hệ</button>
                      </Col>
                      <Col span={12} offset={2}>
                        <PhoneContact
                          text={"HOTLINE 24/7"}
                          numberPhone="090.154.8866"
                          colorText={"#FFFFEE"}
                          colorNumber="#FFFFEE"
                        />
                      </Col>
                    </Row>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </Col>
        <Col span={8}>
          <div className="contact-box--item">
            <img src={require("~/assets/images/contact-right.jpg")} alt="" />
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default ContactSection;
