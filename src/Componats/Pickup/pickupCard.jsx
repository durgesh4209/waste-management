import React, { useEffect, useState } from 'react';
import './card.css';
import api from '../../utils/api';
import AlertBox from '../../alert';
import { useNavigate } from 'react-router-dom';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const PickupCard = ({ order }) => {
    const [order1, setOrder1] = useState(order);
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setOrder1(order);
    }, [order]);

    const handleCancelOrder = () => {
        api.get(`/ecobin/waste/order/status/cancelled/id/${order.id}`)
            .then(response => {
                setAlertType('success');
                setShowAlert(true);
                setMsg('Order successfully cancelled!');
                // setTimeout(() => navigate('/orders'), 2500);
                navigate(0);
            })
            .catch(error => {
                setAlertType('error');
                setShowAlert(true);
                setMsg('Error cancelling the order. Please try again.');
                console.error("Error cancelling order:", error);
            });
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    return (
        <div className="container mt-5">
            <div className="card shadow-sm p-4 mb-4">
                <h5 className="mb-3 ">
                    <span className="text-success">●</span> {order.orderStatus}
                    <span className="badge bg-secondary ms-2 m-l-4">{order.wastes.length}</span>
                </h5>

                {order.wastes.map((waste, index) => (
                    <div key={index} className="d-flex mb-4 border-bottom pb-3 align-items-center">
                        <div className="how-itemcart1">
                            <img src={`data:image/png;base64,${waste.images.data}`} alt={waste.name} />
                        </div>
                        <div className="flex-grow-1">
                            <h6 className="fw-bold">{waste.name}</h6>
                            <p className="mb-1 text-muted">Order ID: {order.id}</p>
                            <p className="mb-1 text-muted">Category: {waste.type}</p>
                            <p className="mb-1 text-muted">Quantity: {waste.quantity} kg</p>
                        </div>
                        <div className="text-end m-l-300">
                            <p className="fw-bold text-success">₹{waste.price}</p>
                        </div>

                        <div className="flex-grow-1 m-l-200">
                            <h6 className="fw-bold">
                                <div className="confirmIcon confirmIcon1 m-r-2"></div>
                                Order {order1.orderStatus} on{" "}
                                {new Date(order1.orderDate).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </h6>

                            {/* Show delivery date message only if the order is not delivered */}
                            {order1.orderStatus.toLowerCase() !== "delivered" && (
                                <p className="mb-1 text-muted m-t-20">
                                    Will be Delivered before{" "}
                                    {new Date(
                                        new Date(order1.orderDate).setDate(
                                            new Date(order1.orderDate).getDate() + 5
                                        )
                                    ).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </p>
                            )}
                        </div>

                    </div>
                ))}

                <div className="d-flex justify-content-end align-items-center mt-3 w-100">
                    <button className="btn btn-danger " hidden >Cancel</button>
                    {order.orderStatus !== 'Delivered' ? (
                        <button className="btn btn-danger" style={{ width: 100 }} onClick={handleCancelOrder}>Cancel</button>
                    ) : (
                        <button className="btn btn-primary" hidden>Cancelled</button>
                    )}
                </div>

                {showAlert && (
                    <AlertBox
                        title={alertType}
                        message={msg}
                        onClose={handleCloseAlert}
                        type={alertType}
                    />
                )}
            </div>
        </div>
    );
};

export default PickupCard;
