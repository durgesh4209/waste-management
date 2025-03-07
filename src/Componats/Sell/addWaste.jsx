import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./css/EcoCartForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faTags, faBox, faFileAlt, faInr, faTrash } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Commons/footer";
import Header from "../Commons/header";

export default function EcoCartForm() {
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
        formData.append("name", values.name);
        formData.append("type", values.type);
        formData.append("price", values.price);
        formData.append("quantity", values.quantity);
        formData.append("description", values.description);

        try {
            const requestHeaders = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            };
            const response = await axios.post("http://localhost:7171/ecobin/waste", formData, requestHeaders);
            alert("Waste added successfully!");
            console.log(response.data);
        } catch (error) {
            alert("Failed to add waste.");
            console.error("Error:", error);
        }
        setSubmitting(false);
    };

    return (
       <>
       <Header/>
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
                                <ErrorMessage name="type" component="div" className="error-message" />
                            </div>

                            <div className="form-field d-flex align-items-center">
                                <FontAwesomeIcon icon={faTrash} />
                                <Field type="text" name="name" placeholder="Waste Name" />
                                <ErrorMessage name="name" component="div" className="error-message" />
                            </div>

                            <div className="form-field d-flex align-items-center">
                                <FontAwesomeIcon icon={faBox} />
                                <Field type="number" name="quantity" placeholder="Quantity In Kg" />
                                <ErrorMessage name="quantity" component="div" className="error-message" />
                            </div>

                            <div className="form-field d-flex align-items-center">
                                <FontAwesomeIcon icon={faInr} />
                                <Field type="number" name="price" placeholder="Price" />
                                <ErrorMessage name="price" component="div" className="error-message" />
                            </div>

                            <div className="form-field d-flex align-items-center">
                                <FontAwesomeIcon icon={faImage} />
                                <input type="file" name="image" onChange={(event) => setFieldValue("image", event.currentTarget.files[0])} />
                                <ErrorMessage name="image" component="div" className="error-message" />
                            </div>

                            <div className="form-field d-flex align-items-center">
                                <FontAwesomeIcon icon={faFileAlt} className="m-t--56" />
                                <Field as="textarea" name="description" placeholder="Description" />
                                <ErrorMessage name="description" component="div" className="error-message" />
                            </div>

                            <button type="submit" className="btn mt-3" disabled={isSubmitting}>
                                {isSubmitting ? "Submitting..." : "Submit"}
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
            <Footer />
        </div>
       </>
    );
}