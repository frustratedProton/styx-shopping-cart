/* eslint-disable react/prop-types */
import '../styles/ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
  // console.log(product)
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <div className="image-price-container">
        <img src={product.image} alt={product.name} />
        <p>Price: ${product.price.toFixed(2)}</p>
        <div className="rating-container">
          <p>
            Ratings: {product.rate} ({product.count})
          </p>
        </div>
      </div>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
