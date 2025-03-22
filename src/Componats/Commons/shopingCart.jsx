import React, { useEffect, useState } from 'react';
import Footer from './footer';
import Header from './header';
import HeaderProvider from '../../context/HeaderProver';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './shopingCart.css'
import { faImage, faTags, faBox, faFileAlt, faInr, faTrash } from "@fortawesome/free-solid-svg-icons";
import api from '../../utils/api';
import AlertBox from '../../alert';  
import { useNavigate } from 'react-router-dom';

const ShoppingCart = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    const [shippingAddress, setShippingInfo] = useState({
        country: '',
        state: '',
        city: '',
        zipCode: '',
        address: '',
        phone: ''
    });

    const [couponCode, setCouponCode] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [msg, setmsg] = useState('')
    const [alertType, setAlertType] = useState('');

    const calculateTotal = () => {
        return items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    const handleQuantityChange = (id, newValue) => {
        const updatedItems = items.map(item =>
            item.id === id ? { ...item, quantity: Math.max(newValue, 0) } : item
        );
        setItems(updatedItems);
    };

    const handleCouponChange = (event) => {
        setCouponCode(event.target.value);
    };

    const handleShippingChange = (event) => {
        const { name, value } = event.target;
        setShippingInfo(prevShippingInfo => ({
            ...prevShippingInfo,
            [name]: value
        }));
    };

    useEffect(() => {

        api.get(`/ecobin/waste/carts`)
            .then(response => {
                setItems(response.data);
            })
            .catch(error => {
                console.error("Error fetching waste details:", error);
            });
    }, []);

    function removeCart(id) {
        
        api.get("/ecobin/waste/removeCart/" + id)
            .then(response => {
                setAlertType('success');
                setShowAlert(true);
                setmsg("waste Removed from cart")
                setTimeout(() => navigate('/shoppingCart'), 2500);

            })
            .catch(error => {
                console.error("Error adding to cart:", error);
            });
    }

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    const handleConfirmOrder = () => {

        if (isSubmitting) return;

        setIsSubmitting(true);

        const orderData = {
            wastes: items,
            shippingAddress,
            totalAmount: calculateTotal()
        };

        debugger
        api.post('/ecobin/waste/order', orderData)
    .then(response => {
        if (response.status >= 200 && response.status < 300) {
            setAlertType('success');
            setShowAlert(true);
            setmsg('Order confirmed!');
            setIsSubmitting(false);
            setTimeout(() => navigate(0), 2500);
        } else {
            throw new Error('Failed to confirm the order.');
        }
    })
    .catch(error => {
        setAlertType('error');
        setShowAlert(true);
        setmsg('Error confirming the order. Please try again.');
        console.error("Error confirming order:", error);
        setIsSubmitting(false);
    });

    };
    return (
        <>
            <HeaderProvider />
            <form className="bg0 p-t-130 p-b-85 ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-xl-7 m-lr-auto m-b-50">
                            <div className="m-l-25 m-r--38 m-lr-0-xl">
                                <div className="wrap-table-shopping-cart">
                                    <table className="table-shopping-cart">
                                        <thead>
                                            <tr className="table_head">
                                                <th className="column-1">Product</th>
                                                <th className="column-2"></th>
                                                <th className="column-3">Price</th>
                                                <th className="column-4">Quantity</th>
                                                <th className="column-5">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {items.map(item => (
                                                <tr key={item.id} className="table_row">
                                                    <td className="column-1">
                                                        <div className="how-itemcart1">
                                                            <img src={`data:image/png;base64,${item.images.data}`} alt={item.name} />
                                                        </div>
                                                    </td>
                                                    <td className="column-2">{item.name}</td>
                                                    <td className="column-3">₹ {item.price}</td>
                                                    <td className="column-4">
                                                        <div className="wrap-num-product flex-w m-l-auto m-r-0">
                                                            <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m" onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>
                                                                <i className="fs-16 zmdi zmdi-minus"></i>
                                                            </div>
                                                            <input className="mtext-104 cl3 txt-center num-product" type="number" name={`num-product${item.id}`} value={item.quantity} onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))} />
                                                            <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m" onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                                                                <i className="fs-16 zmdi zmdi-plus"></i> +
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="column-5">₹ {(item.price * item.quantity).toFixed(2)}</td>
                                                    <td> <FontAwesomeIcon className="m-r-30 icon-hover" icon={faTrash} onClick={() => removeCart(item.id)} /></td>

                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="flex-w flex-sb-m bor15 p-t-18 p-b-15 p-lr-40 p-lr-15-sm">
                                    <div className="flex-w flex-m m-r-20 m-tb-5">
                                        <input className="stext-104  plh4 size-117 bor13 p-lr-20 m-r-10 m-tb-5" type="text" name="coupon" value={couponCode} onChange={handleCouponChange} placeholder="Coupon Code" />
                                        <div className="flex-c-m stext-999 cl2 size-118 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-5">
                                            Apply coupon
                                        </div>
                                    </div>

                                    <div className="flex-c-m stext-999 cl2 size-119 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-10">
                                        Update Cart
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
                            <div className="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
                                <h4 className="mtext-109 p-b-30">
                                    Cart Totals
                                </h4>

                                <div className="flex-w flex-t bor12 p-b-13">
                                    <div className="size-208">
                                        <span className="stext-110">
                                            Subtotal:
                                        </span>
                                    </div>

                                    <div className="size-209">
                                        <span className="mtext-110">
                                            ₹ {calculateTotal()}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex-w flex-t bor12 p-t-15 p-b-30">
                                    <div className="size-208 w-full-ssm">
                                        <span className="stext-110">
                                            Shipping:
                                        </span>
                                    </div>

                                    <div className="size-209 p-r-18 p-r-0-sm w-full-ssm">
                                        <p className="stext-111 cl6 p-t-2">
                                            There are no shipping methods available. Please double check your address, or contact us if you need any help.
                                        </p>

                                        <div className="p-t-15">
                                            <span className="stext-112 cl8">
                                                Calculate Shipping
                                            </span>

                                            <div className="bor8 bg0 m-b-22">
                                                <input className="stext-111 cl8 plh3 size-111 p-lr-15" value={'India'} disabled type="text" name="country" onChange={handleShippingChange} />
                                            </div>

                                            <div className="bor8 bg0 m-b-12">
                                                <input className="stext-111 cl8 plh3 size-111 p-lr-15" type="text" name="state" placeholder="State" onChange={handleShippingChange} />
                                            </div>
                                            <div className="bor8 bg0 m-b-12">
                                                <input className="stext-111 cl8 plh3 size-111 p-lr-15" type="text" name="city" placeholder="City" onChange={handleShippingChange} />
                                            </div>
                                            <div className="bor8 bg0 m-b-22">
                                                <input className="stext-111 cl8 plh3 size-111 p-lr-15" type="text" name="zipCode" placeholder="Postcode / Zip" onChange={handleShippingChange} />
                                            </div>
                                            <div className="bor8 bg0 m-b-22">
                                                <input className="stext-111 cl8 plh3 size-111 p-lr-15" type="text" name="address" placeholder="Area/Building Name" onChange={handleShippingChange} />
                                            </div>

                                            <div className="bor8 bg0 m-b-22">
                                                <input className="stext-111 cl8 plh3 size-111 p-lr-15" type="number" name="phone" placeholder="Phone Number" onChange={handleShippingChange} />
                                            </div>
                                            <div className="flex-w">
                                                <div className="flex-c-m stext-999 cl2 size-115 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer">
                                                    Update Totals
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-w flex-t p-t-27 p-b-33">
                                    <div className="size-208">
                                        <span className="mtext-101 cl2">
                                            Total:
                                        </span>
                                    </div>

                                    <div className="size-209 p-t-1">
                                        <span className="mtext-110 cl2">
                                            ₹ {calculateTotal()}
                                        </span>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    className="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer"
                                    onClick={handleConfirmOrder}
                                >
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            {showAlert && (
                <AlertBox
                    title={alertType}
                    message={msg}
                    onClose={handleCloseAlert}
                    type={alertType}
                />
            )}
            <Footer />
        </>
    );
};

export default ShoppingCart;