import React from "react";
import AutoSlider from "./slider";
import Banner from "./banner";
import Footer from "../Commons/footer";
import Header from "../Commons/header";
import CartDrawer from "../Commons/cart";
import HeaderProvider from "../../context/HeaderProver";

export default function Home() {
    return (
        <>
            <div>
                <HeaderProvider/>
            </div>
            <div>
                <CartDrawer />
            </div>
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
