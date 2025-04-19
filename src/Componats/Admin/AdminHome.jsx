import React from "react"; 
import { AuthProvider } from "../../context/authContext";
import AutoSlider from "../Home/slider";
import Banner from "../Home/banner";
import Footer from "../Commons/footer";
import AdminHeader from "./AdminHeader";

export default function AdminDashboard() {

    return (
        <>
            <AuthProvider>
                <AdminHeader />
            </AuthProvider>
            {/* <div>
                <CartDrawer />
            </div> */}
            <div>
                <AutoSlider />

            </div>
            <div>
                <Banner />
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}