import React from 'react'

const ShoppingInfo = () => {
  return (
    <div>
      <>
        <section className="shipping-info">
          <div className="container">
            <ul>
              <li>
                <div className="media-icon">
                  <i className="lni lni-delivery" />
                </div>
                <div className="media-body">
                  <h5>Free Shipping</h5>
                  <span>On order over $99</span>
                </div>
              </li>
              <li>
                <div className="media-icon">
                  <i className="lni lni-support" />
                </div>
                <div className="media-body">
                  <h5>24/7 Support.</h5>
                  <span>Live Chat Or Call.</span>
                </div>
              </li>
              <li>
                <div className="media-icon">
                  <i className="lni lni-credit-cards" />
                </div>
                <div className="media-body">
                  <h5>Online Payment.</h5>
                  <span>Secure Payment Services.</span>
                </div>
              </li>
              <li>
                <div className="media-icon">
                  <i className="lni lni-reload" />
                </div>
                <div className="media-body">
                  <h5>Easy Return.</h5>
                  <span>Hassle Free Shopping.</span>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </>
    </div>
  );
}

export default ShoppingInfo