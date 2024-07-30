/* eslint-disable react/prop-types */
import '../styles/ProductCard.css'

const ProductCard = ({ product, addToCart }) => {
  return (
    <div
      className="product-card"
      style={{
        border: '1px solid #ddd',
        padding: '10px',
        margin: '10px',
        borderRadius: '5px',
      }}
    >
      <h3>{product.name}</h3>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: '100px', height: 'auto', borderRadius: '5px' }}
      />
      <p>Price: ${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
