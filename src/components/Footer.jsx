import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <span className="footer-logo">LeatherLux</span>
                        <p>
                            Defining modern luxury with timeless leather goods.
                            Handcrafted for those who value permanence.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h4>Collections</h4>
                        <ul>
                            <li><a href="#">New Arrivals</a></li>
                            <li><a href="#">Best Sellers</a></li>
                            <li><a href="#">Leather Bags</a></li>
                            <li><a href="#">Accessories</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">Our Story</a></li>
                            <li><a href="#">Sustainability</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>

                    <div className="footer-newsletter">
                        <h4>Stay Connected</h4>
                        <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
                        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Enter your email address" />
                            <button type="button">Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">&copy; {currentYear} LeatherLux. All rights reserved.</p>
                    <div className="social-links">
                        <a href="#">Instagram</a>
                        <a href="#">Facebook</a>
                        <a href="#">Twitter</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
