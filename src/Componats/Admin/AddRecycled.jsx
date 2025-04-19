import React, { useState, useEffect } from "react";
import AlertBox from "../../alert";
import Header from "../Commons/header";
import api from "../../utils/api";
import { useNavigate, useParams } from "react-router-dom";

export default function AddToRecycled() {
    const [showAlert, setShowAlert] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [waste, setWaste] = useState({});
    const [price, setPrice] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();


    const [alertData, setAlertData] = useState({
        show: false,
        title: "",
        message: "",
        type: "success"
    });

    useEffect(() => {

        api.get(`/ecobin/waste/id/${id}`)
            .then(response => {
                setWaste(response.data);
            })
            .catch(error => {
                console.error("Error fetching waste details:", error);
            });
    }, [id]);

    const increaseQuantity = () => setQuantity(prev => prev + 1);
    const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    const addToRecycled = () => {
        if (!price) {
            setAlertData({
                show: true,
                title: "Validation Error",
                message: "Please enter a price.",
                type: "warning"
            });
            return;
        }

        const payload = {
            id: id,
            price: parseFloat(price),
        };

        api.post("/ecobin/admin/waste/addToRecycled", payload)
            .then(response => {
                setAlertData({
                    show: true,
                    title: "Success",
                    message: "Waste added to Recycled Successfully!",
                    type: "success"
                });

                setTimeout(() => {
                    setAlertData({ ...alertData, show: false });
                    navigate("/recycledWaste");
                }, 2000);
            })
            .catch(error => {
                setAlertData({
                    show: true,
                    title: "Error",
                    message: "Failed to add waste to Recycled. Please try again.",
                    type: "warning"
                });
                console.error("Error adding to recycled:", error);
            });
    };

    return (
        <>
            <Header />
            <div style={{ paddingTop: "80px" }}>
                <div className="wrap-modal1 js-modal1 p-t-60 p-b-20 show-modal1">
                    <div className="overlay-modal1 js-hide-modal1"></div>
                    <div className="container">
                        <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
                            <a href="/allCollectedWaste">
                                <button className="how-pos3 hov3 trans-04 js-hide-modal1">
                                    <img src="images/icons/icon-close.png" alt="CLOSE" />
                                </button>
                            </a>
                            <div className="row">
                                <div className="col-md-6 col-lg-7 p-b-30">
                                    {waste?.images?.data ? (
                                        <img
                                            src={`data:image/png;base64,${waste.images.data}`}
                                            alt={waste.name || "Waste"}
                                            className="img-fluid m-l-90"
                                            style={{ height: 500, width: 400 }}
                                        />
                                    ) : (
                                        <img
                                            src="images/product-detail-01.jpg"
                                            alt="Default Waste"
                                            className="img-fluid m-l-90"
                                            style={{ height: 500, width: 400 }}
                                        />
                                    )}
                                </div>
                                <div className="col-md-6 col-lg-5 p-b-30">
                                    <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                                        {waste.name || "Loading..."}
                                    </h4>
                                    <span className="mtext-106 cl2">
                                        ${waste.price || "--"}
                                    </span>
                                    <p className="stext-102 cl3 p-t-23">
                                        {waste.description || "No description available."}
                                    </p>
                                    <div className="flex-w flex-r-m p-b-10 m-t-23">
                                        <div className="size-203 flex-c-m respon6">Waste Type</div>
                                        <div className="size-204 respon6-next">
                                            <input
                                                value={waste.type || "--"}
                                                className="border-0 p-2"
                                                disabled
                                            />
                                        </div>

                                    </div>
                                    <div className="flex-w flex-r-m p-b-10 m-t-23">
                                        <div className="size-203 flex-c-m respon6">Price</div>
                                        <div className="size-204 respon6-next">
                                            <input
                                                className="border-0 p-2"
                                                placeholder="Add Price"
                                                onChange={(e) => setPrice(e.target.value)}
                                            />
                                        </div>

                                    </div>
                                    <div className="flex-w flex-m">
                                        <div className="size-203 flex-c-m m-t-23">Waste in kg</div>
                                        <div className="wrap-num-product flex-w flex-m m-r-20 m-tb-10 m-t-23">
                                            <button className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m p-r-10" style={{ width: 55 }} onClick={decreaseQuantity}>-</button>
                                            <input type="number" className="mtext-104 cl3 txt-center num-product m-l--10" value={quantity} readOnly />
                                            <button className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m" style={{ widows: 40, marginRight: -10 }} onClick={increaseQuantity}>+</button>
                                        </div>
                                    </div>
                                    <button
                                        className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail mt-3"
                                        onClick={addToRecycled}
                                    >
                                        Add to Recycled
                                    </button>
                                    {alertData.show && (
                                        <AlertBox
                                            title={alertData.title}
                                            message={alertData.message}
                                            type={alertData.type}
                                            onClose={() => setAlertData({ ...alertData, show: false })}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
