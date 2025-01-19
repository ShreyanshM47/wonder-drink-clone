import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [userDetails, setUserDetails] = useState({ name: '', address: '', email: '' });
  const router = useRouter();

  useEffect(() => {

    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);

    const price = savedCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(price);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order details', { userDetails, cartItems, totalPrice });

    localStorage.removeItem('cart');
    router.push('/order-confirmation');
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <div className="cart-summary">
        <h2>Your Cart</h2>
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
            ))
          )}
        </div>
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
      </div>

      <form onSubmit={handleSubmit} className="checkout-form">
        <h2>Shipping Information</h2>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={userDetails.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={userDetails.address}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userDetails.email}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Place Order</button>
      </form>

      <Link href="/cart">
        <button className="back-button">Back to Cart</button>
      </Link>
    </div>
  );
};

export default Checkout;
