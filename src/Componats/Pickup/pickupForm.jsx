import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import '../Sell/css/EcoCartForm.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faTags, faBox, faFileAlt, faInr, faTrash } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Commons/footer";
import HeaderProvider from "../../context/HeaderProver";
import api from "../../utils/api";
import { useNavigate } from "react-router-dom";
import AlertBox from "../../alert";

export default function EcoCartPickupForm() {
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const initialValues = {
        image: null,
        name: "",
        type: "",
        price: "",
        quantity: "",
        description: "",
        street: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Waste Name is required"),
        type: Yup.string().required("Waste Type is required"),
        price: Yup.number().positive().required("Price is required"),
        quantity: Yup.number().positive().required("Quantity is required"),
        description: Yup.string().required("Description is required"),
        image: Yup.mixed().required("Image is required"),
        street: Yup.string().required("Street is required"),
        city: Yup.string().required("City is required"),
        state: Yup.string().required("State is required"),
        postalCode: Yup.string().required("Postal Code is required"),
        country: Yup.string().required("Country is required"), 
    });

    const handleSubmit = async(values, { setSubmitting }) => {
        console.log("Submitted Values:", values);
        debugger
        const formData = new FormData();
        formData.append("data", JSON.stringify({
            name: values.name,
            type: values.type,
            price: values.price,
            quantity: values.quantity,
            description: values.description,
            street: values.street,
            city: values.city,
            state: values.state,
            postalCode: values.postalCode,
            country: values.country
        }));

        formData.append("image", values.image);
     
         try {
                   const response = await api.post("/ecobin/pickup", formData, {
                       headers: { "Content-Type": "multipart/form-data" }
                   });
                   setAlertType('success');
                   setShowAlert(true);
                   setMsg('Pickup Schedule successfully! ')
                   setTimeout(() => { navigate('0') }, 2500)
               } catch (error) {
                   setAlertType('error');
                   setShowAlert(true);
                   setMsg('unable to Schedule Pickup! ')
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
                <div className="wrapper2 m-t--20">
                    <div className="formLogo mt-4">
                        <img src="images/waste-12.jpg" alt="EcoCart Logo" />
                    </div>
                    <h2 className="name mt-2">Schedule Pickup</h2>

                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ setFieldValue, isSubmitting }) => (
                            <Form className="p-3 mt-3">
                                <div className="form-row">
                                    <div className="form-field">
                                        <FontAwesomeIcon icon={faTags} />
                                        <Field as="select" name="type">
                                            <option value="">Select Waste Type</option>
                                            <option value="ORGANIC">Organic</option>
                                            <option value="RECYCLABLE">Recyclable</option>
                                            <option value="HAZARDOUS">Hazardous</option>
                                            <option value="E_WASTE">Electronic Waste</option>
                                        </Field>
                                        <ErrorMessage name="type" component="div" className="error-message" />
                                    </div>

                                    <div className="form-field">
                                        <FontAwesomeIcon icon={faTrash} />
                                        <Field type="text" name="name" placeholder="Waste Name" />
                                        <ErrorMessage name="name" component="div" className="error-message" />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-field">
                                        <FontAwesomeIcon icon={faBox} />
                                        <Field type="number" name="quantity" placeholder="Quantity (Kg)" />
                                        <ErrorMessage name="quantity" component="div" className="error-message" />
                                    </div>

                                    <div className="form-field">
                                        <FontAwesomeIcon icon={faInr} />
                                        <Field type="number" name="price" placeholder="Price" />
                                        <ErrorMessage name="price" component="div" className="error-message" />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-field">
                                        <FontAwesomeIcon icon={faImage} />
                                        <input
                                            type="file"
                                            name="image"
                                            onChange={(event) => setFieldValue("image", event.target.files[0])}
                                        />
                                        <ErrorMessage name="image" component="div" className="error-message" />
                                    </div>

                                    <div className="form-field">
                                        <FontAwesomeIcon icon={faFileAlt} />
                                        <Field as="textarea" name="description" placeholder="Description" />
                                        <ErrorMessage name="description" component="div" className="error-message" />
                                    </div>
                                </div>
 
                                {["street", "city", "state", "postalCode", "country"].map((field, idx) => (
                                    <div className="form-row" key={idx}>
                                        <div className="form-field">
                                            <Field name={field} placeholder={field.charAt(0).toUpperCase() + field.slice(1)} />
                                            <ErrorMessage name={field} component="div" className="error-message" />
                                        </div>
                                    </div>
                                ))}

                                <button type="submit" className="btn mt-3  m-l-200 w-50" disabled={isSubmitting}>
                                    {isSubmitting ? "Submitting..." : "Submit"}
                                </button>
                            </Form>
                        )}
                    </Formik>

                    {showAlert && (
                        <AlertBox title={alertType} message={msg} onClose={handleCloseAlert} type={alertType} />
                    )}
                </div>
                <Footer />
            </div>
        </>
    );
}
