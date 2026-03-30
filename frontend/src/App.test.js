import { render, screen } from '@testing-library/react';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { ShopContext } from './Contexts/ShopContext';

jest.mock(
  'react-router-dom',
  () => ({
    Link: ({ children }) => <a>{children}</a>,
    useNavigate: () => jest.fn(),
  }),
  { virtual: true }
);

test('renders customer navbar links', () => {
  const contextValue = {
    getTotalCartItems: () => 0,
  };

  render(
    <ShopContext.Provider value={contextValue}>
      <Navbar />
    </ShopContext.Provider>
  );

  expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
  expect(screen.getByText('Shop')).toBeInTheDocument();
  expect(screen.getByText('Women')).toBeInTheDocument();
});
