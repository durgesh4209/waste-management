import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; 
import "./css/EcoCartForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faTags, faBox, faFileAlt, faInr, faTrash } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Commons/footer"; 
import HeaderProvider from "../../context/HeaderProver";
import api from "../../utils/api";
import { useNavigate } from "react-router-dom";
import AlertBox from "../../alert";

export default function EcoCartForm() {
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState('');
    const navigate = useNavigate
        ();

    const initialValues = {
        image: null,
        name: "",
        type: "",
        price: "",
        quantity: "",
        description: ""
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().trim().required("Waste Name is required"),
        type: Yup.string().required("Waste Type is required"),
        price: Yup.number().required("Price is required"),
        quantity: Yup.number().required("Quantity is required"),
        description: Yup.string().required("Description is required"),
        image: Yup.mixed().required("Image is required")
    });


    const handleSubmit = async (values, { setSubmitting }) => {
        const formData = new FormData();

        formData.append("data", JSON.stringify({
            name: values.name,
            type: values.type,
            price: values.price,
            quantity: values.quantity,
            description: values.description
        }));

        formData.append("image", values.image);

        try {
            const response = await api.post("/ecobin/waste", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            setAlertType('success');
            setShowAlert(true);
            setTimeout(() => { navigate('/buy') }, 2500)
        } catch (error) {
            setAlertType('error');
            setShowAlert(true);
        }
        setSubmitting(false);
    };
    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    return (
        <>
            <HeaderProvider />
            <div style={{ paddingTop: "10px" }} className="body">
                <div className="wrapper m-t--20">
                    <div className="formLogo mt-4">
                        <img src="images/waste-12.jpg" alt="EcoCart Logo" />
                    </div>
                    <div className="name mt-2">
                        Add Waste
                    </div>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                        {({ setFieldValue, isSubmitting }) => (
                            <Form className="p-3 mt-3">
                                <div className="form-field d-flex align-items-center">
                                    <FontAwesomeIcon icon={faTags} />
                                    <Field as="select" name="type">
                                        <option value="">Select Waste Type</option>
                                        <option value="ORGANIC">Organic</option>
                                        <option value="RECYCLABLE">Recyclable</option>
                                        <option value="HAZARDOUS">Hazardous</option>
                                        <option value="E_WASTE">Electronic Waste</option>
                                    </Field>
                                    <ErrorMessage name="type" component="div" className="error-message" style={{ color: "red" }} />
                                </div>

                                <div className="form-field d-flex align-items-center">
                                    <FontAwesomeIcon icon={faTrash} />
                                    <Field type="text" name="name" placeholder="Waste Name" />
                                    <ErrorMessage name="name" component="div" className="error-message" style={{ color: "red" }} />
                                </div>

                                <div className="form-field d-flex align-items-center">
                                    <FontAwesomeIcon icon={faBox} />
                                    <Field type="number" name="quantity" placeholder="Quantity In Kg" />
                                    <ErrorMessage name="quantity" component="div" className="error-message" style={{ color: "red" }} />
                                </div>

                                <div className="form-field d-flex align-items-center">
                                    <FontAwesomeIcon icon={faInr} />
                                    <Field type="number" name="price" placeholder="Price" />
                                    <ErrorMessage name="price" component="div" className="error-message" style={{ color: "red" }} />
                                </div>

                                <div className="form-field d-flex align-items-center">
                                    <FontAwesomeIcon icon={faImage} />
                                    <input type="file" name="image" onChange={(event) => setFieldValue("image", event.currentTarget.files[0])} />
                                    <ErrorMessage name="image" component="div" className="error-message" style={{ color: "red" }} />
                                </div>

                                <div className="form-field d-flex align-items-center">
                                    <FontAwesomeIcon icon={faFileAlt} className="m-t--56" />
                                    <Field as="textarea" name="description" placeholder="Description" />
                                    <ErrorMessage name="description" component="div" className="error-message" style={{ color: "red" }} />
                                </div>

                                <button type="submit" className="btn mt-3" disabled={isSubmitting}>
                                    {isSubmitting ? "Submitting..." : "Submit"}
                                </button>
                            </Form>
                        )}
                    </Formik>
                    {showAlert && (
                        <AlertBox
                            title={alertType === 'error' ? 'Error' : 'Success'}
                            message={alertType === 'error' ? 'Failed to add waste.' : 'Waste added successfully!'}
                            onClose={handleCloseAlert}
                            type={alertType}
                        />
                    )}
                </div>
                <Footer />
            </div>
        </>
    );
}