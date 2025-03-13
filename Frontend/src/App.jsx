import React, { useState, useEffect } from 'react';
import './App.css';
import Slider from 'react-slick';
import { FaSearch, FaUser, FaMoon, FaSun } from "react-icons/fa";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem('darkMode') === 'true'
    );

    useEffect(() => {
        document.body.classList.toggle('dark', darkMode);
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    const carouselImages = [
        '/images/event1.jpg',
        '/images/event2.jpg',
        '/images/event3.jpg',
        '/images/event4.jpg',
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        cssEase: 'linear',
    };

    return (
        <div className={darkMode ? "dark" : ""}>
            {/* Header */}
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />

            {/* Hero Section */}
            <div className="hero-carousel-wrapper">
                <div className="hero-overlay">
                    <h1>Welcome to EVENTOPIA</h1>
                    <p>Your one-stop solution for event management!</p>
                </div>

                {/* Carousel Section */}
                <div className="carousel">
                    <Slider {...settings}>
                        {carouselImages.map((img, index) => (
                            <div key={index} className="carousel-slide">
                                <img
                                    src={img}
                                    alt={`Event ${index + 1}`}
                                    className="carousel-img"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            {/* Feature Boxes */}
            <section className="features px-8 py-12">
                <div className="feature-box">
                    <h2>Easy Scheduling</h2>
                    <p>Quickly create and manage events with a simple and intuitive interface.</p>
                </div>

                <div className="feature-box">
                    <h2>Vendor Management</h2>
                    <p>Keep track of Events and ensure seamless communication with Vendors.</p>
                </div>

                <div className="feature-box">
                    <h2>Event Analytics</h2>
                    <p>Get insights into event performance and engagement with real-time data.</p>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default App;
