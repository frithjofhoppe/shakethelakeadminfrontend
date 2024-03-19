import {render, screen} from '@testing-library/react';
import React from 'react'; // Add import statement for React
import App from './App';

describe('A truthy statement', () => {
	it('should be equal to 2', () => {
		expect(1 + 1).toEqual(2);
	});
	it('renders the App component', () => {
		render(<App />);
    
		// Screen.debug(); // Prints out the jsx in the App component unto the command line
	});
});
