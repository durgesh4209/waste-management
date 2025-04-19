import React, { useState } from 'react';
import { useContext } from 'react';
import AuthContext from '../../context/authContext';
import api from '../../utils/api';
import '../Sell/css/EcoCartForm.css';
import AlertBox from '../../alert';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState('');
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await api.post('/auth/login', { email, password }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            debugger
            if (response.data.jwtToken) {
                login(response.data.jwtToken);
                localStorage.setItem('userFullName', response.data.firstname + ' ' + response.data.lastname);
                localStorage.setItem('role', response.data.role);
                localStorage.setItem('token', response.data.jwtToken);
                setAlertType('success');
                debugger
                console.log(response.data
                )
                setTimeout(() => {
                    const role = response.data.role.trim().toLowerCase();
                
                    if (role === "dispatcher") {
                        navigate("/dispatcherDashboard");
                    } else if (role === "admin") {
                        navigate("/adminDashboard");
                    } else {
                        navigate("/home");
                    }
                }, 2500);
            } else {

                setAlertType('error');
                setShowAlert(true);
                alert("Login failed, please try again.");
            }
        } catch (error) {
            console.error('There was a problem with the login:', error);
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
                    Login
                </div>
                <form onSubmit={handleSubmit} className="m-t-30">
                    <div className="form-field d-flex align-items-center">
                        <i className="fas fa-envelope"></i>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                    <button type="submit" className="btn m-t-30">
                        Login
                    </button>
                </form>
                <div className="text-center fs-6 m-t-20">
                    <a href="/signup">Sign up</a>
                </div>
            </div>
            {showAlert && (
                <AlertBox
                    title={alertType === 'error' ? 'Error' : 'Success'}
                    message={alertType === 'error' ? 'Login failed, please try again.' : 'Login successful!'}
                    onClose={handleCloseAlert}
                    type={alertType}
                />
            )}
        </div>
    );
};

export default LoginForm;