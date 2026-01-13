import './Craftsmanship.css';

export default function Craftsmanship() {
    return (
        <section className="craftsmanship section-lg bg-espresso" id="craftsmanship">
            <div className="container">
                <div className="craft-content text-center">
                    <h2>Mastery in Every Detail</h2>
                    <p className="text-large">
                        True luxury lies in the unseen. Our artisans dedicate days to perfecting a single piece.
                    </p>
                </div>

                <div className="craft-grid">
                    <div className="craft-item">
                        <div className="craft-image">
                            <img src="/images/craftsmanship_hands_1768290021148.png" alt="Hand Stitching" />
                        </div>
                        <div className="craft-details">
                            <h3>Hand-Stitched</h3>
                            <p>Every seam is sewn by hand for superior durability compared to machine stitching.</p>
                        </div>
                    </div>

                    <div className="craft-item">
                        <div className="craft-image">
                            <img src="/images/hero_leather_texture_1768289947040.png" alt="Premium Materials" />
                        </div>
                        <div className="craft-details">
                            <h3>Full-Grain Leather</h3>
                            <p>Sourced from the finest tanneries in Tuscany, ensuring minimal processing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
