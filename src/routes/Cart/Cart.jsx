import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, totalPrice } = useContext(CartContext);
  const [checkedOut, setCheckedOut] = useState(false);
  const [orderSummary, setorderSummary] = useState([]);

  const handleCheckout = () => {
    setorderSummary(cart);
    setCheckedOut(true);
    clearCart();
  };

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {checkedOut ? (
        <div className="order-summary-container">
          <h3>Thank you for your purchase!</h3>
          <p>Your cart was successfully checked out. Here is your Order Summary:</p>
          {orderSummary.length === 0 ? (
            <p>No items were purchased.</p>
          ) : (
            <div className="order-summary-items">
              {orderSummary.map((item) => (
                <div key={item.id} className="order-summary-item">
                  <h4>{item.name}</h4>
                  <img src={item.image} alt={item.name} />
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
          )}
          <Link to="/shop" className="continue-shopping">
            Continue Shopping
          </Link>
        </div>
      ) : cart.length === 0 ? (
        <p className="empty-cart">
          Your cart is empty.
          <br />
          <Link to="/shop" className="empty-cart">
            Click here to return to shop
          </Link>
        </p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <img src={item.image} alt={item.name} />
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button
                className="remove-button"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
              <button
                className="quantity-button"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                <i className="fa-solid fa-plus"></i>
              </button>
              <button
                className="quantity-button"
                onClick={() =>
                  updateQuantity(item.id, Math.max(item.quantity - 1, 1))
                }
              >
                <i className="fa-solid fa-minus"></i>
              </button>
            </div>
          ))}
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          <div className="cart-utility-buttons">
            <button className="clear-cart-button" onClick={clearCart}>
              Clear Cart
            </button>
            <button className="checkout-button" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
