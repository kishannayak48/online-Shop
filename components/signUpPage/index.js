import React, { useState } from "react";
// import "./App.css"; // Import or create your CSS file for styling
import Styles from "./RegistrationForm.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h4 className="text-center fw-bolder fs-2">Register</h4>
            <p className="mb-3 fs-7">
              Register Now and Fell the New Digital World
            </p>
            <Link href="./signUp">
              <button className="btn fw-bold mb-5 btn-outline-success px-4 rounded-pill">
                Login 
              </button>
            </Link>
            <div className="img-cover p-4">
              <Image
                height={350}
                width={350}
                src="/assets/images/loginbg.jpeg"
                alt=""
              />
            </div>
          </Col>
          <Col>
            <div>
              <form onSubmit={handleSubmit} className={Styles.form}>
                <h3 className={Styles.h3}>Registration Form</h3>
                <div className={Styles.div}>
                  <label htmlFor="firstName" className={Styles.label}>
                    First Name
                  </label>
                  <input
                    className={Styles.input}
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className={Styles.div}>
                  <label className={Styles.label} htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    className={Styles.input}
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div className={Styles.div}>
                  <label className={Styles.label} htmlFor="email">
                    Email
                  </label>
                  <input
                    className={Styles.input}
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className={Styles.div}>
                  <label className={Styles.label} htmlFor="password">
                    Password
                  </label>
                  <input
                    className={Styles.input}
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className={Styles.div}>
                  <label className={Styles.label} htmlFor="confirmPassword">
                    Confirm Password
                  </label>
                  <input
                    className={Styles.input}
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
                <div className={Styles.div}>
                  <label className={Styles.label}>
                    <input
                      className={Styles.checkbox}
                      type="checkbox"
                      id="acceptTerms"
                      name="acceptTerms"
                      checked={formData.acceptTerms}
                      onChange={handleChange}
                    />
                    I accept the Terms of Use & Privacy Policy.
                  </label>
                </div>
                <button type="submit" className={Styles.button}>
                  Register Now
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <Container className={Styles.body}> */}

      {/* </Container> */}
    </>
  );
}

export default SignUpPage;
