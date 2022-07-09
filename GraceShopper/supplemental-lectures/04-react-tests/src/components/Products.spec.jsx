import React from 'react';
// import testing libraries. This gives us react-specific test functions
import { render, waitFor } from '@testing-library/react';
// This gives us access to a "fake dom" through jest
import '@testing-library/jest-dom/extend-expect';
// Import the Products component itself, to test
import Products from './Products';

// Mock the API call. This example mocks all get requests
import axios from 'axios';
jest.mock('axios');
axios.get.mockResolvedValue({
  data: [
    {
      id: 1,
      name: 'diamond saw',
      description: 'studded with real fake diamonds',
      price: '0',
      imageURL: 'https://static9.depositphotos.com/1669785/1150/i/600/depositphotos_11506024-stock-photo-package.jpg',
      inStock: false,
      category: 'all'
    },
    {
      id: 2,
      name: 'tool belt',
      description: 'Over 500 pockets!',
      price: '0',
      imageURL: 'https://static9.depositphotos.com/1669785/1150/i/600/depositphotos_11506024-stock-photo-package.jpg',
      inStock: false,
      category: 'all'
    },
    {
      id: 3,
      name: 'hammer',
      description: 'not even rusty',
      price: '0',
      imageURL: 'https://static9.depositphotos.com/1669785/1150/i/600/depositphotos_11506024-stock-photo-package.jpg',
      inStock: false,
      category: 'all'
    }
  ]
})

describe('Products', () => {
  
  // TODO 5 - Write React tests
  // TODO - write a unit test: component contains an element to contain the text `Products`
  it('contains an element that has the text `Products`', async() => {
    const { getByText } = await waitFor(() => render (<Products />));
    expect(getByText('Products')).toBeInTheDocument();
  })
  // TODO - write a unit test: component contains an element to contain the text `diamond saw` (from the name of one of the mock products above)
  it('contains an element that has the text from one of the products from the api', async() => {
    const { getByText } = await waitFor(() => render (<Products />));
    expect(getByText('diamond saw')).toBeInTheDocument();
  })
  // TODO - write a snapshot test. Entire component should match
  it('entire component matches the snapshot', async() => {
    const { container } = await waitFor(() => render (<Products />));
    expect(container).toMatchSnapshot();
  })
  
})