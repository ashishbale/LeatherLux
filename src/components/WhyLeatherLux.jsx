import './WhyLeatherLux.css';

export default function WhyLeatherLux() {
    const benefits = [
        {
            title: "Sustainable Sourcing",
            description: "Vegetable-tanned leather from ethical tanneries."
        },
        {
            title: "Artisan Craftsmanship",
            description: "Hand-finished edges and heavy-duty stitching."
        },
        {
            title: "Lifetime Guarantee",
            description: "We repair any defects in materials or workmanship."
        }
    ];

    return (
        <section className="why-leatherlux section-lg bg-espresso-dark">
            <div className="container">
                <div className="benefits-grid">
                    <div className="benefits-header">
                        <h2>Why LeatherLux?</h2>
                        <p>We don't just sell products; we create legacies.</p>
                    </div>

                    <div className="benefits-list">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="benefit-item">
                                <h3>{benefit.title}</h3>
                                <p>{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
