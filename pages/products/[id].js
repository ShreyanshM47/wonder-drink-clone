import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const ProductDetails = ({ product }) => {
  const router = useRouter();

  if (!product) {
    return <div>Loading...</div>;
  }

  const price = Number(product.price);
  const formattedprice = isNaN(price) ? 0 : price.toFixed(2);

  return (
    <div className="product-page">
      <div className="header">
        <div className="cart-button">
          <Link href="/cart">🛒 Cart</Link>
        </div>
        <button className="back-button" onClick={() => router.back()}>
          ← Back
        </button>
      </div>

      <div className="product-details-container">
        <div className="product-image-container">
          <img src={product.image} alt={product.name} className="product-image" />
        </div>
        <div className="product-info-container">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-description">{product.description}</p>
          <p className="product-price">${formattedprice}</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;
  const products = [
    { id: '1', name: 'Drink A', description: 'Refreshing Drink A', price: 10, image: '/drink_a.jpg' },
    { id: '2', name: 'Drink B', description: 'Delicious Drink B', price: 12, image: '/drink_b.jpg' },
    { id: '3', name: 'Drink C', description: 'Light and Crisp Drink C', price: 8, image: '/drink_c.jpg' },
    { id: '4', name: 'Drink D', description: 'Tasty Drink D', price: 15, image: '/drink_d.jpg' },
    { id: '5', name: 'Drink E', description: 'Energizing Drink E', price: 11, image: '/drink_e.jpg' },
    { id: '6', name: 'Drink F', description: 'Fizzy and Fun Drink F', price: 14, image: '/drink_f.jpg' },
    { id: '7', name: 'Drink G', description: 'Great Taste Drink G', price: 9, image: '/drink_g.jpg' },
    { id: '8', name: 'Drink H', description: 'Hydrating Drink H', price: 13, image: '/drink_h.jpg' },
    { id: '9', name: 'Drink I', description: 'Invigorating Drink I', price: 7, image: '/drink_i.jpg' },
    { id: '10', name: 'Drink J', description: 'Juicy Drink J', price: 16, image: '/drink_j.jpg' },
];
const product = products.find((prod) => prod.id === id);

return { props: { product } };
}

export default ProductDetails;