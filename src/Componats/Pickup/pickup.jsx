import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../Sell/css/EcoCartForm.css';
import api from '../../utils/api';
import { useNavigate } from 'react-router-dom';
import AlertBox from '../../alert';

export default function EcoCartPickup() {
    const [wastes, setWastes] = useState([]);
    const [users, setUsers] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState('');
    const navigate = useNavigate();

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const wasteRes = await api.get('/ecobin/waste');
    //             const userRes = await api.get('/ecobin/users');
    //             setWastes(wasteRes.data);
    //             setUsers(userRes.data);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };
    //     fetchData();
    // }, []);

    const initialValues = {
        street: '',
        city: '',
        state: '',
        postalCode: '',
        country: '',
        wasteId: '',
        collectorId: '',
        requesterId: '',
        pickupDate: '',
        isCompleted: false,
        notes: ''
    };

    const validationSchema = Yup.object({
        street: Yup.string().required('Street is required'),
        city: Yup.string().required('City is required'),
        state: Yup.string().required('State is required'),
        postalCode: Yup.string().required('Postal Code is required'),
        country: Yup.string().required('Country is required'),
        wasteId: Yup.string().required('Select a waste'),
        collectorId: Yup.string().required('Select a collector'),
        requesterId: Yup.string().required('Select a requester'),
        pickupDate: Yup.date().required('Pickup Date is required'),
    });

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            await api.post('/ecobin/pickup', values);
            setAlertType('success');
            setShowAlert(true);
            setTimeout(() => navigate('/pickups'), 2500);
        } catch (error) {
            setAlertType('error');
            setShowAlert(true);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="pickup-form">
            {showAlert && <AlertBox title={alertType === 'error' ? 'Error' : 'Success'} message={alertType === 'error' ? 'Failed to add pickup.' : 'Pickup added successfully!'} onClose={() => setShowAlert(false)} type={alertType} />}
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({ isSubmitting }) => (
                    <Form>
                        <Field name="street" placeholder="Street" />
                        <ErrorMessage name="street" component="div" className="error" />

                        <Field name="city" placeholder="City" />
                        <ErrorMessage name="city" component="div" className="error" />

                        <Field name="state" placeholder="State" />
                        <ErrorMessage name="state" component="div" className="error" />

                        <Field name="postalCode" placeholder="Postal Code" />
                        <ErrorMessage name="postalCode" component="div" className="error" />

                        <Field name="country" placeholder="Country" />
                        <ErrorMessage name="country" component="div" className="error" />

                        <Field as="select" name="wasteId">
                            <option value="">Select Waste</option>
                            {wastes.map(w => <option key={w.id} value={w.id}>{w.name}</option>)}
                        </Field>
                        <ErrorMessage name="wasteId" component="div" className="error" />

                        <Field as="select" name="collectorId">
                            <option value="">Select Collector</option>
                            {users.map(u => <option key={u.id} value={u.id}>{u.username}</option>)}
                        </Field>
                        <ErrorMessage name="collectorId" component="div" className="error" />

                        <Field name="pickupDate" type="date" />
                        <ErrorMessage name="pickupDate" component="div" className="error" />

                        <Field as="textarea" name="notes" placeholder="Notes" />
                        <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit'}</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
