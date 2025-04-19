import React, { useState } from 'react';

export default function Cart() {
  
  const [isCartVisible, setIsCartVisible] = useState(false);

  const showCart = () => {
    setIsCartVisible(true);
  };

  const hideCart = () => {
    setIsCartVisible(false);
  };

  return (
    <>
    
      <div className={`wrap-header-cart js-panel-cart ${isCartVisible ? 'show-header-cart' : ''}`}>
        <div className="s-full js-hide-cart" onClick={hideCart}></div>

        <div className="header-cart flex-col-l p-l-65 p-r-25">
          <div className="header-cart-title flex-w flex-sb-m p-b-8">
            <span className="mtext-103 c7">
              Your Cart
            </span>

            <div className="fs-35 lh-10 p-lr-5 pointer hov-cl10 trans-04 js-hide-cart" onClick={hideCart}>
              <i className="zmdi zmdi-close" onClick={hideCart}></i>
            </div>
          </div>

          <div className="header-cart-content flex-w js-pscroll">
            <ul className="header-cart-wrapitem w-full">
              <li className="header-cart-item flex-w flex-t m-b-12">
                <div className="header-cart-item-img">
                  <img src="images/Plastic-waste-1.jpg" alt="Plastic Waste" />
                </div>

                <div className="header-cart-item-txt p-t-8">
                  <a href="#" className="header-cart-item-name m-b-18 hov-cl10 trans-04">
                    Plastic Waste
                  </a>

                  <span className="header-cart-item-info">
                    1kg x 190.00
                  </span>
                </div>
              </li>

              <li className="header-cart-item flex-w flex-t m-b-12">
                <div className="header-cart-item-img">
                  <img src="images/Electronic-waste-1.webp" alt="Electronic Waste" />
                </div>

                <div className="header-cart-item-txt p-t-8">
                  <a href="#" className="header-cart-item-name m-b-18 hov-cl10 trans-04">
                    Electronic Waste
                  </a>

                  <span className="header-cart-item-info">
                    1 x 439.00
                  </span>
                </div>
              </li>

              <li className="header-cart-item flex-w flex-t m-b-12">
                <div className="header-cart-item-img">
                  <img src="images/Medical-waste-1.webp" alt="Medical Waste" />
                </div>

                <div className="header-cart-item-txt p-t-8">
                  <a href="#" className="header-cart-item-name m-b-18 hov-cl10 trans-04">
                    Medical Waste
                  </a>

                  <span className="header-cart-item-info">
                    1 x 217.00
                  </span>
                </div>
              </li>
            </ul>

            <div className="w-full">
              <div className="header-cart-total w-full p-tb-40">
                Total: 756.00
              </div>

              <div className="header-cart-buttons flex-w w-full">
                <a href="shoping-cart.html" className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10">
                  View Cart
                </a>

                <a href="shoping-cart.html" className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10">
                  Check Out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
