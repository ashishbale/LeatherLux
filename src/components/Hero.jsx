import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const heroImages = [
        '/images/hero_leather_texture_1768289947040.png',
        '/images/leather_bag_product_1768289966429.png',
        '/images/brand_philosophy_image_1768290041146.png'
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero" id="home">
            {heroImages.map((img, index) => (
                <div
                    key={index}
                    className={`hero-bg-slide ${index === currentSlide ? 'active' : ''}`}
                >
                    <img src={img} alt="Hero Background" />
                    <div className="hero-overlay"></div>
                </div>
            ))}

            <div className="container hero-container">
                <div className="hero-content">
                    <span className="hero-subtitle slide-up">Est. 2024</span>
                    <h1 className="hero-title slide-up delay-100">
                        Defining Modern <br />
                        <span className="text-gold">Luxury</span>
                    </h1>
                    <p className="hero-description slide-up delay-200">
                        Handcrafted Italian leather goods designed for those who value longevity over trends.
                    </p>
                    <div className="hero-actions slide-up delay-300">
                        <button
                            className="btn-hero-primary"
                            onClick={() => scrollTo('collections')}
                        >
                            Shop Collection
                        </button>
                        <button
                            className="btn-hero-secondary"
                            onClick={() => scrollTo('philosophy')}
                        >
                            Our Story
                        </button>
                    </div>
                </div>
            </div>

            <div className="hero-dots">
                {heroImages.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </section>
    );
}
