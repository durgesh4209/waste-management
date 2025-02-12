import React from "react";

export default function Header() {
    return (
        <>
            <header>
                <div className="wrap-menu-desktop">
                    <nav className="limiter-menu-desktop container">
                        <a href="index.html" className="logo">
                            <img src="images/icons/logo-1.png" alt="IMG-LOGO" />
                        </a>

                        <div className="menu-desktop">
                            <ul className="main-menu">
                                <li className="active-menu">
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/buy">Buy</a>
                                </li>
                                <li>
                                    <a href="about.html">Sell</a>
                                </li>
                                <li className="label1">
                                    <a href="product.html">Categories</a>
                                    <ul className="sub-menu">
                                        <div className="flex-w flex-l-m filter-tope-group m-tb-19">
                                            {[
                                                "Organic Waste",
                                                "Electronic Waste",
                                                "BioMedical Waste",
                                                "Plastic Waste",
                                                "Construction Waste",
                                                "Industrial Waste",
                                                "Agricultural Waste",
                                            ].map((category, index) => (
                                                <button
                                                    key={index}
                                                    className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                                                    data-filter={`.${category.toLowerCase().replace(/\s+/g, "_")}`}
                                                >
                                                    {category}
                                                </button>
                                            ))}
                                        </div>
                                    </ul>
                                </li>
                                <li>
                                    <a href="blog.html">Blog</a>
                                </li>
                                <li>
                                    <a href="contact.html">Contact</a>
                                </li>
                            </ul>
                        </div>

                        <div className="wrap-icon-header flex-w flex-r-m">
                            <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                                <i className="zmdi zmdi-search"></i>
                            </div>
                            <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart" data-notify="2">
                                <i className="zmdi zmdi-shopping-cart"></i>
                            </div>

                            <div className="dropdown">
                                <button
                                    className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
                                    type="button"
                                    id="profileDropdown"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="bi bi-person-circle profile-icon me-2"></i>
                                </button>

                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                                    <li>
                                        <a className="dropdown-item">
                                            <h4>Vishal Shinde</h4>
                                        </a>
                                    </li>
                                    <div className="dropdown-2">
                                        <li>
                                            <a className="dropdown-item" href="profile.html">
                                                View Profile
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="login.html">
                                                Login
                                            </a>
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

                {/* Mobile Header */}
                <div className="wrap-header-mobile">
                    <div className="logo-mobile">
                        <a href="index.html">
                            <img src="images/icons/logo-1.png" alt="IMG-LOGO" />
                        </a>
                    </div>

                    <div className="wrap-icon-header flex-w flex-r-m m-r-15">
                        <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
                            <i className="zmdi zmdi-search"></i>
                        </div>
                        <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart" data-notify="2">
                            <i className="zmdi zmdi-shopping-cart"></i>
                        </div>

                        <div className="dropdown">
                            <button className="btn btn-custom dropdown-toggle d-flex align-items-center" type="button" id="profileDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-person-circle profile-icon me-2"></i>
                            </button>

                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                                <li>
                                    <a className="dropdown-item">
                                        <h5>Vishal</h5>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="profile.html">
                                        View Profile
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="login.html">
                                        Login
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </div>
                </div>

                {/* Cart Panel */}
                <div className="wrap-header-cart js-panel-cart">
                    <div className="s-full js-hide-cart"></div>

                    <div className="header-cart flex-col-l p-l-65 p-    r-25">
                        <div className="header-cart-title flex-w flex-sb-m p-b-8">
                            <span className="mtext-103 c7">Your Cart</span>
                            <div className="fs-35 lh-10 p-lr-5 pointer hov-cl10 trans-04 js-hide-cart">
                                <i className="zmdi zmdi-close"></i>
                            </div>
                        </div>

                        <div className="header-cart-content flex-w js-pscroll">
                            <ul className="header-cart-wrapitem w-full">
                                {[
                                    { img: "images/Plastic-waste-1.jpg", name: "Plastic Waste", price: "1kg x 190.00" },
                                    { img: "images/Electronic-waste-1.webp", name: "Electronic Waste", price: "1 x 439.00" },
                                    { img: "images/Medical-waste-1.webp", name: "Medical Waste", price: "1 x 217.00" },
                                ].map((item, index) => (
                                    <li key={index} className="header-cart-item flex-w flex-t m-b-12">
                                        <div className="header-cart-item-img">
                                            <img src={item.img} alt="IMG" />
                                        </div>
                                        <div className="header-cart-item-txt p-t-8">
                                            <a href="#" className="header-cart-item-name m-b-18 hov-cl10 trans-04">
                                                {item.name}
                                            </a>
                                            <span className="header-cart-item-info">{item.price}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <div className="w-full">
                                <div className="header-cart-total w-full p-tb-40">Total: 756.00</div>

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
            </header>
        </>
    )
}