import { Link } from 'react-router-dom';
import './FeaturedCollections.css';

export default function FeaturedCollections() {
    const collections = [
        {
            id: 'bag-001',
            title: 'Leather Bags',
            description: 'Timeless messenger bags and briefcases',
            image: '/images/leather_bag_product_1768289966429.png'
        },
        {
            id: 'wallet-001',
            title: 'Wallets & Accessories',
            description: 'Refined essentials for daily life',
            image: '/images/leather_wallet_product_1768289983237.png'
        },
        {
            id: 'belt-001',
            title: 'Belts & Essentials',
            description: 'Classic designs with impeccable detail',
            image: '/images/leather_belt_product_1768290002531.png'
        }
    ];

    return (
        <section className="featured-collections section-lg" id="collections">
            <div className="container">
                <div className="section-header text-center">
                    <h2>Our Collections</h2>
                    <p className="text-large">Handcrafted for those who appreciate quality</p>
                </div>
                <div className="collections-grid">
                    {collections.map((item, index) => (
                        <div key={index} className="collection-card">
                            <div className="collection-image">
                                <img src={item.image} alt={item.title} />
                                <div className="collection-overlay">
                                    <Link to={`/product/${item.id}`} className="collection-btn">Explore</Link>
                                </div>
                            </div>
                            <div className="collection-info">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
