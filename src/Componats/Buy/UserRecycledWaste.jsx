import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductFilterSearch from "./filter";
import Footer from "../Commons/footer";
import api from "../../utils/api"; 
import HeaderProvider from "../../context/HeaderProver";

export default function UserRecycledWaste() {
    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate();


    useEffect(() => {
        api.get("/ecobin/admin/waste/recycledWaste")
            .then(response => {
                setProducts(response.data || []);
                console.log(response);
            })
            .catch(error => {
                console.error("Error fetching waste products:", error);
            });
    }, []);

    return (
        <>
            <HeaderProvider/>
            <div style={{ paddingTop: "80px" }}>
                <div className="bg0 m-t-23 p-b-140">
                    <div className="container">
                        <div className="wrap-header-cart js-panel-cart">
                            <div className="s-full js-hide-cart"></div>

                            <div className="header-cart flex-col-l p-l-65 p-r-25">
                                <div className="header-cart-title flex-w flex-sb-m p-b-8">
                                    <span className="mtext-103 c7">Your Cart</span>
                                    <div className="fs-35 lh-10 p-lr-5 pointer hov-cl10 trans-04 js-hide-cart">
                                        <i className="zmdi zmdi-close"></i>
                                    </div>
                                </div>

                                <div className="header-cart-content flex-w js-pscroll">
                                    <ul className="header-cart-wrapitem w-full">
                                        {cartItems.length > 0 ? (
                                            cartItems.map(item => (
                                                <li key={item.id} className="header-cart-item flex-w flex-t m-b-12">
                                                    <div className="header-cart-item-img">
                                                        <img src={item.image} alt={item.name} />
                                                    </div>
                                                    <div className="header-cart-item-txt p-t-8">
                                                        <a href="#" className="header-cart-item-name m-b-18 hov-cl10 trans-04">
                                                            {item.name}
                                                        </a>
                                                        <span className="header-cart-item-info">
                                                            {item.quantity} x {item.price}
                                                        </span>
                                                    </div>
                                                </li>
                                            ))
                                        ) : (
                                            <p>Your cart is empty</p>
                                        )}
                                    </ul>
                                    <div className="w-full">
                                        <div className="header-cart-total w-full p-tb-40">Total: ₹{totalPrice}</div>
                                        <div className="header-cart-buttons flex-w w-full">
                                            <a href="shoping-cart.html" className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10">
                                                View Cart
                                            </a>
                                            <a href="checkout.html" className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10">
                                                Check Out
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ProductFilterSearch />

                        <div className="row isotope-grid">
                            {products.length > 0 ? (
                                products.map(product => (
                                    <div key={product.id} className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item">
                                        <div className="block2">
                                            <div className="block2-pic hov-img0">
                                                <img src={`data:image/png;base64,${product.images.data}`} alt={product.name} />
                                                <Link to={`/Quickview/${product.id}`} className="block2-btn flex-c-m stext-103 cl2 size-102 bor2 hov-btn1 p-lr-15 trans-04">
                                                    Quick View
                                                </Link>
                                            </div>
                                            <div className="block2-txt flex-w flex-t p-t-14">
                                                <div className="block2-txt-child1 flex-col-l">
                                                    <a href="product-detail.html" className="stext-104 cl4 hov-cl10 trans-04 p-b-6">
                                                        {product.name}
                                                    </a>
                                                    <span className="stext-105 cl3">Price - ₹{product.price}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>Loading products...</p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="m-t--70">
                    <Footer />
                </div>
            </div>
        </>
    );
}