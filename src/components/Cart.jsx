import { useRef, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import Button from './Button';
import './Cart.css';

export default function Cart() {
    const {
        cartItems,
        cartTotal,
        isCartOpen,
        toggleCart,
        removeFromCart,
        updateQuantity
    } = useCart();

    const cartRef = useRef();

    useEffect(() => {
        if (isCartOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isCartOpen]);

    if (!isCartOpen) return null;

    return (
        <div className="cart-overlay fade-in" onClick={toggleCart}>
            <div
                className="cart-sidebar slide-in-right"
                ref={cartRef}
                onClick={e => e.stopPropagation()}
            >
                <div className="cart-header">
                    <h2>Your Selection</h2>
                    <button className="close-cart" onClick={toggleCart}>&times;</button>
                </div>

                <div className="cart-items">
                    {cartItems.length === 0 ? (
                        <div className="empty-cart">
                            <p>Your shopping bag is empty.</p>
                            <Button variant="outline" onClick={toggleCart}>Continue Shopping</Button>
                        </div>
                    ) : (
                        cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <div className="cart-item-image">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="cart-item-details">
                                    <h3>{item.title}</h3>
                                    <p className="cart-item-price">${item.price}</p>

                                    <div className="cart-controls">
                                        <div className="quantity-selector">
                                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                        </div>
                                        <button
                                            className="remove-item"
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="cart-footer">
                        <div className="cart-total">
                            <span>Subtotal</span>
                            <span className="amount">${cartTotal.toLocaleString()}</span>
                        </div>
                        <p className="shipping-note">Shipping & taxes calculated at checkout</p>
                        <Button variant="primary" className="checkout-btn">Proceed to Checkout</Button>
                    </div>
                )}
            </div>
        </div>
    );
}
