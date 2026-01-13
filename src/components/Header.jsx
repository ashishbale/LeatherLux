import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Header.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { cartCount, toggleCart } = useCart();
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-content">
                <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
                    <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
                </button>

                <div className="logo">
                    <Link to="/" className="logo-text">LeatherLux</Link>
                </div>

                <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                    <ul className="nav-list">
                        <li><Link to="/" className="nav-link">Home</Link></li>
                        {/* We use standard anchors for hash scrolling on home, or Link for pages */}
                        <li>
                            {location.pathname === '/' ?
                                <a href="#collections" className="nav-link">Shop</a> :
                                <Link to="/#collections" className="nav-link">Shop</Link>
                            }
                        </li>
                        <li>
                            {location.pathname === '/' ?
                                <a href="#craftsmanship" className="nav-link">Craftsmanship</a> :
                                <Link to="/#craftsmanship" className="nav-link">Craftsmanship</Link>
                            }
                        </li>
                        <li>
                            {location.pathname === '/' ?
                                <a href="#about" className="nav-link">About</a> :
                                <Link to="/#about" className="nav-link">About</Link>
                            }
                        </li>
                    </ul>
                </nav>

                <div className="header-actions">
                    <button className="icon-btn search-btn" aria-label="Search">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </button>
                    <button className="icon-btn cart-btn" onClick={toggleCart} aria-label="Cart">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </button>
                </div>
            </div>

            <div className={`mobile-overlay ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(false)}></div>
        </header>
    );
}
