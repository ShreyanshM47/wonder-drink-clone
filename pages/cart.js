import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);

    const price = savedCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(price);
  }, []);

  const handleAddItem = (item) => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingItemIndex = savedCart.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex >= 0) {

      savedCart[existingItemIndex].quantity += 1;
    } else {

      savedCart.push({ ...item, quantity: 1 });
    }

    
    localStorage.setItem('cart', JSON.stringify(savedCart));

    setCartItems(savedCart);

    const price = savedCart.reduce((acc, cartItem) => acc + cartItem.price * cartItem.quantity, 0);
    setTotalPrice(price);
  };

  const handleRemoveItem = (itemIndex) => {
    const updatedCart = cartItems.filter((_, index) => index !== itemIndex);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    const price = updatedCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(price);
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <p>{item.name}</p>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => handleRemoveItem(index)}>Remove</button>
              </div>
            </div>
          ))}
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <Link href="/checkout">
            <button className="checkout-button">Proceed to Checkout</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
