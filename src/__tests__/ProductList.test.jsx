import { describe, expect, it } from 'vitest';
import { CartContext, CartProvider } from '../context/CartContext';
import ProductList from '../components/ProductList/ProductList';
import { act, render, renderHook } from '@testing-library/react';
import { useContext } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

describe('ProductList Component', () => {
	const mockProducts = [
		{
			id: 1,
			name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
			price: 109.95,
			category: "men's clothing",
			image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
			rating: {
				rate: 3.9,
				count: 120,
			},
		},
		{
			id: 2,
			name: 'Mens Casual Premium Slim Fit T-Shirts',
			price: 22.3,
			category: "men's clothing",
			image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UL640_QL65_ML3_.jpg',
			rating: {
				rate: 4.1,
				count: 259,
			},
		},
	];

	const renderWithProviders = (ui) => {
		const router = createBrowserRouter([
			{
				path: '/',
				element: ui,
				children: [{ path: 'shop', element: <ProductList /> }],
			},
		]);

		render(
			<CartProvider>
				<RouterProvider router={router} />
			</CartProvider>
		);
	};

	it('renders the product titles', () => {
		renderWithProviders(<ProductList />);
		// Simulate providing products to the context
		const { result } = renderHook(() => useContext(CartContext));
		act(() => {
			result.current.setProducts(mockProducts);
		});

		expect(
			screen.getByText(/fjallraven - foldsack no. 1 backpack, fits 15 laptops/i)
		).toBeInTheDocument();
    
		expect(
			screen.getByText(/mens casual premium slim fit t-shirts/i)
		).toBeInTheDocument();
	});
});
