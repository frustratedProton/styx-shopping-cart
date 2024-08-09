import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductCard from '../components/ProductCard/ProductCard';
import userEvent from '@testing-library/user-event';

describe('Product card component', () => {
	const mockProduct = {
		id: 1,
		name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
		price: 109.95,
		category: "men's clothing",
		image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
		rating: {
			rate: 3.9,
			count: 120,
		},
	};

	it('renders the product title', () => {
		render(<ProductCard product={mockProduct} />);
		screen.debug();
		expect(
			screen.getByText(/fjallraven - foldsack no. 1 backpack, fits 15 laptops/i)
		).toBeInTheDocument();
	});

	it('renders the product price', () => {
		render(<ProductCard product={mockProduct} />);
		expect(screen.getByText(/\$109.95/i)).toBeInTheDocument();
	});

	it('renders the product image', () => {
		render(<ProductCard product={mockProduct} />);
		const image = screen.getByRole('img');
		expect(image).toHaveAttribute('src', mockProduct.image);
		expect(image).toHaveAttribute('alt', mockProduct.title);
	});

	it('calls addToCart with the correct product when the button is clicked', async () => {
		const addToCartMock = vi.fn();
		render(<ProductCard product={mockProduct} addToCart={addToCartMock} />);

		const user = userEvent.setup();
		const button = screen.getByRole('button', { name: /add to cart/i });

		await user.click(button);

		expect(addToCartMock).toHaveBeenCalledTimes(1);
		expect(addToCartMock).toHaveBeenCalledWith(mockProduct);
	});
});
