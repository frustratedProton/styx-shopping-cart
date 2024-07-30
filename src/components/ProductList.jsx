import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import ProductCard from './ProductCard';
import '../styles/ProductList.css';

const ProductList = () => {
  const { products, addToCart } = useContext(CartContext);
  const [search, setSearch] = useState('');

  const filterProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="product-list">
      <h2>Products</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filterProducts.length === 0 ? (
          <p>No Products Found</p>
        ) : (
          filterProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;
