import Link from 'next/link';
import { useEffect, useState } from 'react';

const Home = () => {
  const products = [
    { id: '1', name: 'Drink A', price: '$10', image: '/drink_a.jpg', description: 'A refreshing fizzy drink.' },
    { id: '2', name: 'Drink B', price: '$12', image: '/drink_b.jpg', description: 'A citrusy burst of energy.' },
    { id: '3', name: 'Drink C', price: '$8', image: '/drink_c.jpg', description: 'A soothing herbal blend.' },
    { id: '4', name: 'Drink D', price: '$15', image: '/drink_d.jpg', description: 'A premium sparkling drink.' },
    { id: '5', name: 'Drink E', price: '$11', image: '/drink_e.jpg', description: 'A classic cola refreshment.' },
    { id: '6', name: 'Drink F', price: '$14', image: '/drink_f.jpg', description: 'A tropical mango treat.' },
    { id: '7', name: 'Drink G', price: '$9', image: '/drink_g.jpg', description: 'A berry-rich drink for all.' },
    { id: '8', name: 'Drink H', price: '$13', image: '/drink_h.jpg', description: 'A sparkling cherry delight.' },
    { id: '9', name: 'Drink I', price: '$7', image: '/drink_i.jpg', description: 'A lemonade twist in a bottle.' },
    { id: '10', name: 'Drink J', price: '$16', image: '/drink_j.jpg', description: 'A smooth caramel soda.' },
  ];

  const randomIndex = new Date().getDate() % products.length;
  const bestSeller = products[randomIndex];
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  return (
    <div className={`homepage ${isVisible ? 'visible' : ''}`}>
      <header style={headerStyle}>
        <h1>Welcome to Wonder Drink Clone</h1>
        <nav style={navStyle}>
          <Link href="/products">Products</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/account">Account</Link>
        </nav>
      </header>
      <main style={mainStyle}>
        <h2>Today's Best Seller</h2>
        <div className="bestseller-card" style={bestsellerCardStyle}>
          <img src={bestSeller.image} alt={bestSeller.name} style={imageStyle} />
          <h3>{bestSeller.name}</h3>
          <p>{bestSeller.price}</p>
          <p>{bestSeller.description}</p>
          <Link href={`/products/${bestSeller.id}`}>
            <button style={buttonStyle}>View Details</button>
          </Link>
        </div>
        <h2>All Products</h2>
        <div className="product-grid" style={productGridStyle}>
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`product-card product-${index}`}
              style={productCardStyle}
            >
              <img src={product.image} alt={product.name} style={imageStyle} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <p>{product.description}</p>
              <Link href={`/products/${product.id}`}>
                <button style={buttonStyle}>View Details</button>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

const headerStyle = { textAlign: 'center', padding: '20px', backgroundColor: '#1e90ff', color: '#fff' };
const navStyle = { display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '10px' };
const mainStyle = { padding: '20px', textAlign: 'center' };
const productGridStyle = { display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', marginTop: '20px' };
const productCardStyle = { animation: 'fadeIn 0.5s ease-in-out', textAlign: 'center', width: '200px' };
const bestsellerCardStyle = { marginBottom: '40px', animation: 'slideIn 0.8s ease-out' };
const imageStyle = { width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' };
const buttonStyle = { marginTop: '10px', padding: '8px 15px', backgroundColor: '#1e90ff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' };

export default Home;
