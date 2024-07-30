/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import { fetchProducts } from '../api'

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const loadProducts = async () => {
			const fetchedProducts = await fetchProducts();
			setProducts(fetchedProducts);
		};

		loadProducts();
	}, []);
	const addToCart = (product) => {
		setCart((prevCart) => {
			const existingProduct = prevCart.find((item) => item.id === product.id);
			if (existingProduct) {
				return prevCart.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				);
			} else {
				return [...prevCart, { ...product, quantity: 1 }];
			}
		});
	};

	const removeFromCart = (id) => {
		setCart((prevCart) => prevCart.filter((item) => item.id !== id));
	};

	const updateQuantity = (id, quantity) => {
		setCart((prevCart) =>
			prevCart.map((item) => (item.id === id ? { ...item, quantity } : item))
		);
	};

	const clearCart = () => {
		setCart([]);
		localStorage.removeItem('cart');
	};

	const totalPrice = cart.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);

	return (
		<CartContext.Provider
			value={{
				products,
				cart,
				addToCart,
				removeFromCart,
				updateQuantity,
				clearCart,
				totalPrice,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export { CartContext };
