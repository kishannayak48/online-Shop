import React from "react";
import { CiHeart } from "react-icons/ci";


function TopBar() {
  return (
    <div className="topbar">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-4 col-12">
            <div className="top-left">
              <ul className="menu-top-link">
                <li>
                  <div className="select-position">
                    <select id="select4">
                      <option value={0} selected="">
                        $ USD
                      </option>
                      <option value={1}>€ EURO</option>
                      <option value={2}>$ CAD</option>
                      <option value={3}>₹ INR</option>
                      <option value={4}>¥ CNY</option>
                      <option value={5}>৳ BDT</option>
                    </select>
                  </div>
                </li>
                <li>
                  <div className="select-position">
                    <select id="select5">
                      <option value={0} selected="">
                        English
                      </option>
                      <option value={1}>Español</option>
                      <option value={2}>Filipino</option>
                      <option value={3}>Français</option>
                      <option value={4}>العربية</option>
                      <option value={5}>हिन्दी</option>
                      <option value={6}>বাংলা</option>
                    </select>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="top-middle">
              <ul className="useful-links">
                <li>
                  <a href="./home">Home</a>
                </li>
                <li>
                  <a href="./about">About Us</a>
                </li>
                <li>
                  <a href="./contact">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="top-end">
              <div className="user">
                <i className="lni lni-user" />
                Hello
              </div>
              <ul className="user-login">
                <li>
                  <a href="./login">Sign In</a>
                </li>
                <li>
                  <a href="./signUp">Register</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
