import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import '../styles/Navbar.css';

const Navbar = () => {
	const { cart } = useContext(CartContext);
	const location = useLocation();

	const getTotalItems = () => {
		return cart.reduce((total, item) => total + item.quantity, 0);
	};

	return (
		<nav className="navbar">
			<div className="left-section">
				<Link to="/" className={location.pathname === '/' ? 'active' : ''}>
					Home
				</Link>
			</div>
			<div className="right-section">
				<Link
					to="/shop"
					className={location.pathname === '/shop' ? 'active' : ''}
				>
					Shop
				</Link>
				<Link
					to="/cart"
					className={location.pathname === '/cart' ? 'active' : ''}
				>
					<div className="cart-icon">
						<span className="icon-wrapper">
							<i className="fa-solid fa-bag-shopping"></i>
						</span>
						{getTotalItems() > 0 && (
							<span className="cart-count">{getTotalItems()}</span>
						)}
					</div>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
