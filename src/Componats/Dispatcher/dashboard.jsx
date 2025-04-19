import React from "react";
import DispatcherHeader from "./dispatcherHeader";
import { AuthProvider } from "../../context/authContext";
import AutoSlider from "../Home/slider";
import Banner from "../Home/banner";
import Footer from "../Commons/footer";

export default function DispatcherDashboard() {

    return (
        <>
            <AuthProvider>
                <DispatcherHeader />
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