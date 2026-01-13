import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import './ProductDetail.css';

export default function ProductDetail() {
    const { id } = useParams();
    const { addToCart } = useCart();
    const product = products.find(p => p.id === id);
    const [activeTab, setActiveTab] = useState('features');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) {
        return (
            <div className="product-not-found container">
                <h2>Product not found</h2>
                <Link to="/" className="text-gold">Return to Home</Link>
            </div>
        );
    }

    return (
        <div className="product-detail-page">
            <div className="container">
                <div className="product-layout">
                    <div className="product-gallery">
                        <div className="main-image-container">
                            <img src={product.image} alt={product.title} />
                        </div>
                    </div>

                    <div className="product-info">
                        <div className="product-header">
                            <span className="product-category">{product.category}</span>
                            <h1 className="product-title">{product.title}</h1>
                            <div className="product-price">${product.price}</div>
                        </div>

                        <div className="product-divider"></div>

                        <p className="product-description">
                            {product.description}
                        </p>

                        <button
                            className="btn-primary-lg"
                            onClick={() => addToCart(product)}
                        >
                            Add to Cart
                        </button>

                        <div className="product-trust-badges">
                            <span>✓ Free Shipping</span>
                            <span>✓ Lifetime Warranty</span>
                            <span>✓ 30-Day Returns</span>
                        </div>

                        <div className="product-tabs">
                            <div className="tab-headers">
                                <button
                                    className={`tab-btn ${activeTab === 'features' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('features')}
                                >
                                    Features
                                </button>
                                <button
                                    className={`tab-btn ${activeTab === 'care' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('care')}
                                >
                                    Care Guide
                                </button>
                            </div>
                            <div className="tab-content">
                                {activeTab === 'features' && (
                                    <ul className="features-list">
                                        {product.details.map((detail, index) => (
                                            <li key={index}>{detail}</li>
                                        ))}
                                    </ul>
                                )}
                                {activeTab === 'care' && (
                                    <div className="care-guide">
                                        <p>Clean with a soft, dry cloth. Use leather conditioner every 6-12 months.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
