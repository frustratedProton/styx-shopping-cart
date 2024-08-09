import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { CartProvider } from '../context/CartContext';
import '@testing-library/jest-dom';
import App from '../App';
import userEvent from '@testing-library/user-event';
import Home from '../routes/Home/Home';
import Shop from '../routes/Shop/Shop';
import Cart from '../routes/Cart/Cart';

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

const renderWithProviders = () => {
	return render(
		<CartProvider>
			<RouterProvider router={router} />
		</CartProvider>
	);
};

describe('App component', () => {
	it('renders without crashing', () => {
		renderWithProviders();
	});

	it('renders the Navbar', () => {
		renderWithProviders();
		expect(screen.getByRole('navigation')).toBeInTheDocument();
	});

	it('navigates to shop route', async () => {
		renderWithProviders();

		const user = userEvent.setup();
		const shopLink = screen.getByRole('link', { name: /shop/i });
		await user.click(shopLink);

		const headings = await screen.findAllByRole('heading');
		expect(headings[0].textContent).toMatch(/shop page/i);
	});

	it('navigates to cart route', async () => {
		renderWithProviders();

		const user = userEvent.setup();
		const cartLink = screen.getByTestId('cart-link');
		await user.click(cartLink);

		expect(screen.getByRole('heading').textContent).toMatch(/cart/i);
	});
});
