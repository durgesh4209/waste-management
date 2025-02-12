import React, { useEffect, useState } from 'react';
import ProductFilterSearch from './filter';
import Header from '../Commons/header';

export default function BuyWest() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('API_ENDPOINT');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div style={{ marginTop: -23 }}>
        <Header />
      </div>
      <div>
        <div className="wrap-header-cart js-panel-cart">
          <div className="s-full js-hide-cart"></div>

          <div className="header-cart flex-col-l p-l-65 p-r-25">
            <div className="header-cart-title flex-w flex-sb-m p-b-8">
              <span className="mtext-103 c7">
                Your Cart
              </span>

              <div className="fs-35 lh-10 p-lr-5 pointer hov-cl10 trans-04 js-hide-cart">
                <i className="zmdi zmdi-close"></i>
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
        <div>
          <ProductFilterSearch />
        </div>
        <div>
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item bioMedical_waste">
                {/* Block2 */}
                <div className="block2">
                  <div className="block2-pic hov-img0">
                    <img src={product.imageUrl} alt={product.name} />
                    <a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                      Quick View
                    </a>
                  </div>

                  <div className="block2-txt flex-w flex-t p-t-14">
                    <div className="block2-txt-child1 flex-col-l">
                      <a href="product-detail.html" className="stext-104 cl4 hov-cl10 trans-04 js-name-b2 p-b-6">
                        {product.name}
                      </a>

                      <span className="stext-105 cl3">
                        Price - ₹{product.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  )
}