import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/Cart.css';

const Cart = () => {
	const { cart, removeFromCart, updateQuantity, clearCart, totalPrice } =
		useContext(CartContext);

	return (
		<div className="cart-container">
			<h2>Cart</h2>
			{cart.length === 0 ? (
				<p className="empty-cart">Your cart is empty.</p>
			) : (
				<>
					{cart.map((item) => (
						<div key={item.id}>
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
					<button className="clear-cart-button" onClick={clearCart}>
						Clear Cart
					</button>
				</>
			)}
		</div>
	);
};

export default Cart;
