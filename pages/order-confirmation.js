import React from 'react';
import { useRouter } from 'next/router';

const OrderConfirmation = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <div className="order-confirmation">
      <h1>Thank you for your order!</h1>
      <p>Your order has been successfully placed.</p>
      <button onClick={handleGoHome}>Go to Home</button>
    </div>
  );
};

export default OrderConfirmation;
