import './Testimonials.css';

export default function Testimonials() {
    const testimonials = [
        {
            quote: "The craftsmanship is extraordinary. My LeatherLux bag has become more beautiful with age — it's truly an investment piece.",
            name: "Marcus Chen",
            title: "Architect"
        },
        {
            quote: "I've never owned leather goods of this quality. The attention to detail and timeless design make it worth every penny.",
            name: "Sophia Laurent",
            title: "Creative Director"
        },
        {
            quote: "LeatherLux understands that luxury is about longevity. This wallet will outlast any trend and age gracefully.",
            name: "James Morrison",
            title: "Entrepreneur"
        }
    ];

    return (
        <section className="testimonials section-lg bg-ivory-dark">
            <div className="container">
                <div className="section-header text-center">
                    <h2>Trusted by Discerning Customers</h2>
                    <p className="text-large">
                        Hear from those who value craftsmanship and timeless quality
                    </p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="testimonial-card slide-up"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="quote-icon">"</div>
                            <p className="testimonial-quote">{testimonial.quote}</p>
                            <div className="testimonial-author">
                                <p className="author-name">{testimonial.name}</p>
                                <p className="author-title">{testimonial.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
