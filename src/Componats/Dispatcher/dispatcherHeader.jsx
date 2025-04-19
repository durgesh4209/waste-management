import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext, { AuthProvider } from "../../context/authContext";
import { use } from "react";

export default function DispatcherHeader() {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    if (!auth || !auth.user) {
        console.warn("AuthContext is not available. Make sure AuthProvider wraps your component tree.");
        return null;
    }

    const { user, logout } = auth;

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <>
                <header>
                    <div id="header" className="wrap-menu-desktop">
                        <nav className="limiter-menu-desktop container">
                            <a href="/" className="logo">
                                <img src="images/icons/logo-1.png" alt="IMG-LOGO" />
                            </a>

                            <div className="menu-desktop">
                                <ul className="main-menu">
                                    <li className="active-menu"><a href="/dispatcherDashboard">Home</a></li>
                                    {/* <li><a href="/buy">Buy</a></li> */}
                                    {/* <li><a href="/addWaste">Sell</a></li> */}
                                    <li><a href="/dispatcherOrder">Orders</a></li>
                                    {/* <li><a href="/pickupForm">Schedule Pickup</a></li> */}
                                    <li><a href="/viewPickupDispatcher">View Pickups</a></li>
                                    {/* <li className="label1">
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
                                    </li> */}
                                    <li><a href="/dispatcherBlog">Blog</a></li>
                                    {/* <li><a href="/contact">Contact</a></li> */}
                                </ul>
                            </div>

                            <div className="wrap-icon-header flex-w flex-r-m">
                                <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                                    <i className="zmdi zmdi-search"></i>
                                </div>
                                {/* <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart" data-notify="2">
                                    <a href="/shoppingCart" style={{ color: "white" }}><i className="zmdi zmdi-shopping-cart"></i></a>
                                </div> */}

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
                                                <h6>{user.firstName} {user.lastName}</h6>
                                            </a>
                                        </li>
                                        <div className="dropdown-2">
                                            <li>
                                                <a className="dropdown-item" href="/profile">View Profile</a>
                                            </li>
                                            <li>
                                                <button className="dropdown-item" onClick={handleLogout}>
                                                    Logout
                                                </button>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header> 

        </>
    );
}
