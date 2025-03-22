import React, { useState } from 'react';
import api from '../../utils/api';
import '../Sell/css/EcoCartForm.css';
import AlertBox from '../../alert';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await api.post('/auth/register', {
                userName: userName,
                password,
                firstName: firstName,
                lastName: lastName,
                middleName: middleName
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.data!=null &&response.status ===201 ) {
                setAlertType('success');
                setShowAlert(true);
                setTimeout(() => { navigate('/') }, 2500); // Redirect to login page after signup
            } else {
                setAlertType('error');
                setShowAlert(true);
            }
        } catch (error) {
            console.error('There was a problem with the signup:', error);
            setAlertType('error');
            setShowAlert(true);
        }
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    return (
        <div style={{ paddingTop: "40px" }} className="body">
            <div className="wrapper">
                <div className="formLogo m-t-20">
                    <img src="images/waste-12.jpg" alt="EcoCart Logo" />
                </div>
                <div className="name m-t-25">
                    Sign Up
                </div>
                <form onSubmit={handleSubmit} className="m-t-30">
                    <div className="form-field d-flex align-items-center m-t-30">
                        <i className="fas fa-user"></i>
                        <input
                            type="text"
                            name="first_name"
                            placeholder="Enter your First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-field d-flex align-items-center m-t-30">
                        <i className="fas fa-user"></i>
                        <input
                            type="text"
                            name="middle_name"
                            placeholder="Enter your Middle Name"
                            value={middleName}
                            onChange={(e) => setMiddleName(e.target.value)}
                        />
                    </div>
                    <div className="form-field d-flex align-items-center m-t-30">
                        <i className="fas fa-user"></i>
                        <input
                            type="text"
                            name="last_name"
                            placeholder="Enter your Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-field d-flex align-items-center">
                        <i className="fas fa-user"></i>
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Enter your User Name"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-field d-flex align-items-center m-t-30">
                        <i className="fas fa-lock"></i>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {/* <div className="form-field d-flex align-items-center m-t-30">
                        <i className="fas fa-user-tag"></i>
                        <input
                            type="text"
                            name="role"
                            placeholder="Enter your Role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        />
                    </div> */}

                    <button type="submit" className="btn m-t-30">
                        Sign Up
                    </button>
                </form>
                <div className="text-center fs-6 m-t-20">
                    <a href="/">Already have an account? Login</a>
                </div>
            </div>
            {showAlert && (
                <AlertBox
                    title={alertType === 'error' ? 'Error' : 'Success'}
                    message={alertType === 'error' ? 'Signup failed, please try again.' : 'Signup successful!'}
                    onClose={handleCloseAlert}
                    type={alertType}
                />
            )}
        </div>
    );
};

export default SignUpForm;