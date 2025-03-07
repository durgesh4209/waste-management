import React from "react";
import { AuthProvider } from "../../context/authContext";
import LoginForm from "./login"; 

export default function Login() {
    return (
        <>
            <AuthProvider>
                <LoginForm /> 
            </AuthProvider>
        </>
    )

}