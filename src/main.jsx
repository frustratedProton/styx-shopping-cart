import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home.jsx';
import Shop from './components/Shop.jsx';
import Cart from './components/Cart.jsx';
import { CartProvider } from './context/CartContext.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'shop',
				element: <Shop />,
			},
			{
				path: 'cart',
				element: <Cart />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<CartProvider>
			<RouterProvider router={router} />
		</CartProvider>
	</React.StrictMode>
);
