import './BrandPhilosophy.css';

export default function BrandPhilosophy() {
    return (
        <section className="brand-philosophy section-lg" id="philosophy">
            <div className="container">
                <div className="philosophy-grid">
                    <div className="philosophy-image">
                        <img src="/images/brand_philosophy_image_1768290041146.png" alt="LeatherLux Artisan Workshop" />
                        <div className="image-decoration"></div>
                    </div>
 {/* Hiiii */}
                    <div className="philosophy-content">
                        <h2>Philosophy of Perfection</h2>
                        <div className="divider-small"></div>
                        <p className="text-large">
                            In a world of fast fashion, we choose slow perfection.
                            LeatherLux was born from a desire to return to the roots of
                            traditional leather craftsmanship.
                        </p>
                        <p>
                            We source our hides from sustainable Italian tanneries and
                            dedicate hours to hand-stitching each seam. Our promise is
                            simple: uncompromising quality that stands the test of time.
                        </p>
                        <div className="philosophy-stats">
                            <div className="stat-item">
                                <span className="stat-number">100%</span>
                                <span className="stat-label">Full Grain</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">25+</span>
                                <span className="stat-label">Years Life</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
