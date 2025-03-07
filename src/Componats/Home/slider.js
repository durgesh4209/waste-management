import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderStyles.css";

export default function AutoSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        pauseOnHover: false,
    };

    const slides = [
        { 
            image: "/images/waste-1.jpg", 
            title: "WASTE RECYCLING", 
            subtitle: "Sustainable solutions for a cleaner future.", 
            buttonText: "READ MORE", 
            link: "product.html"
        },
        { 
            image: "/images/waste-7.jpg", 
            title: "MEDICAL WASTE", 
            subtitle: "Safe disposal and recycling solutions.", 
            buttonText: "SHOP NOW", 
            link: "product.html"
        },
        { 
            image: "/images/waste-5.webp", 
            title: "PLASTIC WASTE ", 
            subtitle: "Innovative recycling for a better tomorrow.", 
            buttonText: "LEARN MORE", 
            link: "product.html"
        }
    ];

    return (
        <section className="section-slide">
            <div className="wrap-slick1">
                <Slider {...settings}>
                    {slides.map((slide, index) => (
                        <div key={index} className="slide-wrapper">
                            <div className="slide-item" style={{ backgroundImage: `url(${slide.image})` }}>
                                <div className="overlay"></div>
                                <div className="content-container">
                                    <span className="slide-title">{slide.title}</span>
                                    <h2 className="slide-subtitle">{slide.subtitle}</h2>
                                    <a href={slide.link} className="slide-button">{slide.buttonText}</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}
