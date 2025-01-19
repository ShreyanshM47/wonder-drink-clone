import Link from 'next/link';

const Products = () => {
  const products = [
    { id: '1', name: 'Drink A', price: '$10', image: '/drink_a.jpg' },
    { id: '2', name: 'Drink B', price: '$12', image: '/drink_b.jpg' },
    { id: '3', name: 'Drink C', price: '$8', image: '/drink_c.jpg' },
    { id: '4', name: 'Drink D', price: '$15', image: '/drink_d.jpg' },
    { id: '5', name: 'Drink E', price: '$11', image: '/drink_e.jpg' },
    { id: '6', name: 'Drink F', price: '$14', image: '/drink_f.jpg' },
    { id: '7', name: 'Drink G', price: '$9', image: '/drink_g.jpg' },
    { id: '8', name: 'Drink H', price: '$13', image: '/drink_h.jpg' },
    { id: '9', name: 'Drink I', price: '$7', image: '/drink_i.jpg' },
    { id: '10', name: 'Drink J', price: '$16', image: '/drink_j.jpg' },
  ];

  return (
    <div>
      <h1>Our Products</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
            <img src={product.image} alt={product.name} width="150" />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <Link href={`/products/${product.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
