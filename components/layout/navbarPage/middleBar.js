import React from "react";

function MiddleBar() {
  return (
    <>
      <div className="header-middle">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-3 col-7">
              {/* Start Header Logo */}
              <a className="navbar-brand" href="index.html">
                <img src="assets/images/logo/logo.svg" alt="Logo" />
              </a>
              {/* End Header Logo */}
            </div>
            <div className="col-lg-5 col-md-7 d-xs-none">
              {/* Start Main Menu Search */}
              <div className="main-menu-search">
                {/* navbar search start */}
                <div className="navbar-search search-style-5">
                  <div className="search-select">
                    <div className="select-position">
                      <select id="select1">
                        <option selected="">All</option>
                        <option value={1}>option 01</option>
                        <option value={2}>option 02</option>
                        <option value={3}>option 03</option>
                        <option value={4}>option 04</option>
                        <option value={5}>option 05</option>
                      </select>
                    </div>
                  </div>
                  <div className="search-input">
                    <input type="text" placeholder="Search" />
                  </div>
                  <div className="search-btn">
                    <button>
                      <i className="lni lni-search-alt" />
                    </button>
                  </div>
                </div>
                {/* navbar search Ends */}
              </div>
              {/* End Main Menu Search */}
            </div>
            <div className="col-lg-4 col-md-2 col-5">
              <div className="middle-right-area">
                <div className="nav-hotline">
                  <i className="lni lni-phone" />
                  <h3>
                    Hotline:
                    <span>(+100) 123 456 7890</span>
                  </h3>
                </div>
                <div className="navbar-cart">
                  <div className="wishlist">
                    <a href="javascript:void(0)">
                      <i className="lni lni-heart" />
                      <span className="total-items">0</span>
                    </a>
                  </div>
                  <div className="cart-items">
                    <a href="javascript:void(0)" className="main-btn">
                      <i className="lni lni-cart" />
                      <span className="total-items">2</span>
                    </a>
                    {/* Shopping Item */}
                    <div className="shopping-item">
                      <div className="dropdown-cart-header">
                        <span>2 Items</span>
                        <a href="cart.html">View Cart</a>
                      </div>
                      <ul className="shopping-list">
                        <li>
                          <a
                            href="javascript:void(0)"
                            className="remove"
                            title="Remove this item"
                          >
                            <i className="lni lni-close" />
                          </a>
                          <div className="cart-img-head">
                            <a className="cart-img" href="product-details.html">
                              <img
                                src="assets/images/header/cart-items/item1.jpg"
                                alt="#"
                              />
                            </a>
                          </div>
                          <div className="content">
                            <h4>
                              <a href="product-details.html">
                                Apple Watch Series 6
                              </a>
                            </h4>
                            <p className="quantity">
                              1x - <span className="amount">$99.00</span>
                            </p>
                          </div>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0)"
                            className="remove"
                            title="Remove this item"
                          >
                            <i className="lni lni-close" />
                          </a>
                          <div className="cart-img-head">
                            <a className="cart-img" href="product-details.html">
                              <img
                                src="assets/images/header/cart-items/item2.jpg"
                                alt="#"
                              />
                            </a>
                          </div>
                          <div className="content">
                            <h4>
                              <a href="product-details.html">
                                Wi-Fi Smart Camera
                              </a>
                            </h4>
                            <p className="quantity">
                              1x - <span className="amount">$35.00</span>
                            </p>
                          </div>
                        </li>
                      </ul>
                      <div className="bottom">
                        <div className="total">
                          <span>Total</span>
                          <span className="total-amount">$134.00</span>
                        </div>
                        <div className="button">
                          <a href="checkout.html" className="btn animate">
                            Checkout
                          </a>
                        </div>
                      </div>
                    </div>
                    {/*/ End Shopping Item */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MiddleBar;
