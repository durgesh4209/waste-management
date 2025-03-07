import React from "react";
import ProductFilterSearch from "./filter";
import Footer from "../Commons/footer";
import Header from "../Commons/header";

export default function BuyWast() {
    return (
        <>
         <Header />
        <div style={{ paddingTop: "80px" }}> {/* Adjust padding based on header height */}
            <div class="bg0 m-t-23 p-b-140">
                <div className="container">
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
                    <div class="row isotope-grid">
                        <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item electronic_waste">
                            <div class="block2">
                                <div class="block2-pic hov-img0">
                                    <img src="images/Electronic-waste-1.webp" alt="IMG-PRODUCT" />

                                    <a href="/Quickview" class="block2-btn flex-c-m stext-103 cl2 size-102 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                        Quick View
                                    </a>
                                </div>

                                <div class="block2-txt flex-w flex-t p-t-14">
                                    <div class="block2-txt-child1 flex-col-l ">
                                        <a href="product-detail.html" class="stext-104 cl4 hov-cl10 trans-04 js-name-b2 p-b-6">
                                            Electronic Waste
                                        </a>

                                        <span class="stext-105 cl3">
                                            Price - ₹5400
                                        </span>
                                    </div>

                                    <div class="block2-txt-child2 flex-r p-t-3">
                                        <a href="#" class="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item bioMedical_waste">
                            <div class="block2">
                                <div class="block2-pic hov-img0">
                                    <img src="images/Medical-waste-1.webp" alt="IMG-PRODUCT" />

                                    <a href="#" class="block2-btn flex-c-m stext-103 cl2 size-102  bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                        Quick View
                                    </a>
                                </div>

                                <div class="block2-txt flex-w flex-t p-t-14">
                                    <div class="block2-txt-child1 flex-col-l ">
                                        <a href="product-detail.html" class="stext-104 cl4 hov-cl10 trans-04 js-name-b2 p-b-6">
                                            BioMedical Waste
                                        </a>

                                        <span class="stext-105 cl3">
                                            Price - ₹60
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item plastic_waste">
                            <div class="block2">
                                <div class="block2-pic hov-img0">
                                    <img src="images/Plastic-waste-01.jpeg" alt="IMG-PRODUCT" />

                                    <a href="#" class="block2-btn flex-c-m stext-103 cl2 size-102 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                        Quick View
                                    </a>
                                </div>

                                <div class="block2-txt flex-w flex-t p-t-14">
                                    <div class="block2-txt-child1 flex-col-l ">
                                        <a href="product-detail.html" class="stext-104 cl4 hov-cl10 trans-04 js-name-b2 p-b-6">
                                            Plastic Waste
                                        </a>

                                        <span class="stext-105 cl3">
                                            Price - ₹60
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item construction_waste">
                            <div class="block2">
                                <div class="block2-pic hov-img0">
                                    <img src="images/Construction Waste-1.jpg" alt="IMG-PRODUCT" />

                                    <a href="#" class="block2-btn flex-c-m stext-103 cl2 size-102 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                        Quick View
                                    </a>
                                </div>

                                <div class="block2-txt flex-w flex-t p-t-14">
                                    <div class="block2-txt-child1 flex-col-l ">
                                        <a href="product-detail.html" class="stext-104 cl4 hov-cl10 trans-04 js-name-b2 p-b-6">
                                            Construction Waste
                                        </a>

                                        <span class="stext-105 cl3">
                                            Price - ₹60
                                        </span>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item construction_waste">
                            <div class="block2">
                                <div class="block2-pic hov-img0">
                                    <img src="images/Construction Waste-1.jpg" alt="IMG-PRODUCT" />

                                    <a href="#" class="block2-btn flex-c-m stext-103 cl2 size-102 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                        Quick View
                                    </a>
                                </div>

                                <div class="block2-txt flex-w flex-t p-t-14">
                                    <div class="block2-txt-child1 flex-col-l ">
                                        <a href="product-detail.html" class="stext-104 cl4 hov-cl10 trans-04 js-name-b2 p-b-6">
                                            Construction Waste
                                        </a>

                                        <span class="stext-105 cl3">
                                            Price - ₹60
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="m-t--70">
                <Footer/>
            </div>
        </div>
        </>
 
    );
}