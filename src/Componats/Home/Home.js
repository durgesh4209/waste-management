import React from "react";
import AutoSlider from "./slider";
import Banner from "./banner";
import Footer from "../Commons/footer";
import Header from "../Commons/header";

export default function Home() {
    return (
        <>
         <div>
            <Header/>
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
