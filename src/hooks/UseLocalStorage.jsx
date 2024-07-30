import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
	const [value, setValue] = useState(() => {
		try {
			const jsonVal = localStorage.getItem(key);
			return jsonVal !== null ? JSON.parse(jsonVal) : initialValue;
		} catch (error) {
			console.error('Error reading from localStorage', error);
			return initialValue;
		}
	});

	useEffect(() => {
		try {
			localStorage.setItem(key, JSON.stringify(value));
		} catch (error) {
			console.error('Error setting to localStorage', error);
		}
	}, [key, value]);

	return [value, setValue];
};

export default useLocalStorage;
