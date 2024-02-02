// pages/LoginPage.js
import Link from "next/link";
import React, { useState } from "react";
import { FaFacebookF, FaGooglePlusG, FaUser } from "react-icons/fa";
import { TiSocialLinkedin, TiSocialTwitter } from "react-icons/ti";
import "bootstrap/dist/css/bootstrap.min.css";
import { BiLock } from "react-icons/bi";

import Image from "next/image";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add your login logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };
  return (
    <div
      className="container-fluid vh-100 overflow-auto"
      style={{
        backgroundImage: 'url("assets/images/banner/banner-2-bg.jpg")',
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="row vh-100  ">
        <div className="col-lg-6 bg-gray p-5 text-center">
          <h4 className="text-center fw-bolder fs-2">Register</h4>
          <p className="mb-3 fs-7">
            Register Now and Fell the New Digital World
          </p>
          <Link href="./signUp">
            <button className="btn fw-bold mb-0 btn-outline-success px-5 rounded-pill">
              Sign Up
            </button>
          </Link>
          <div className="img-cover p-4  ">
            <Image
              height={350}
              width={350}
              src="/assets/images/loginbg.jpeg"
              alt=""
            />
          </div>
        </div>
        <div className="col-lg-6 p  vh-100">
          <div className="row d-flex vh-100">
            <div className="col-md-8 p-4 ikigui m-auto text-center align-items-center">
              <h2 className="text-center fw-bolder mb-4 fs-2">Login</h2>
              <form>
                <div className="input-group mb-2">
                  <div className="input-group mb-2">
                    <span
                      className="input-group-text border-end-0 inbg"
                      id="basic-addon1"
                    >
                      <FaUser />
                    </span>
                    <input
                      type="text"
                      id="username"
                      className="form-control ps-8 border-start-2 fs-7 inbg form-control-lg mb-0"
                      placeholder="Enter Username"
                      aria-describedby="basic-addon1"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>
                <div className="input-group mb-4">
                  <div className="input-group mb-4">
                    <span
                      className="input-group-text border-end-0 inbg"
                      id="basic-addon1"
                    >
                      <BiLock />
                    </span>

                    <input
                      type="password"
                      className="form-control ps-8 border-start-2 fs-7 inbg form-control-lg mb-0"
                      placeholder="Enter Password"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-lg fw-bold fs-7 btn-success  w-100"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </form>
              <p className="text-center py-4 fw-bold fs-8">
                Or Sign in with social platforms
              </p>
              <ul className="d-inline-block mx-auto">
                <li className="float-start px-3">
                  <Link href="">
                    <FaFacebookF />
                  </Link>
                </li>
                <li className="float-start px-3">
                  <Link href="">
                    <TiSocialTwitter />
                  </Link>
                </li>
                <li className="float-start px-3">
                  <Link href="">
                    <TiSocialLinkedin />
                  </Link>
                </li>
                <li className="float-start px-3">
                  <Link href="">
                    <FaGooglePlusG />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
