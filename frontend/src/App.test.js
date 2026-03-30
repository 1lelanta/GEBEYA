import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';
import ShopContextProvider from './Contexts/ShopContext';

jest.mock(
  'react-router-dom',
  () => ({
    BrowserRouter: ({ children }) => <div>{children}</div>,
    Routes: ({ children }) => <div>{children}</div>,
    Route: ({ element }) => element || null,
    Link: ({ children }) => <a>{children}</a>,
    useNavigate: () => jest.fn(),
    useParams: () => ({ productId: '1' }),
  }),
  { virtual: true }
);

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([]),
    })
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

test('renders primary navbar entries', () => {
  render(
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  );

  expect(screen.getByText('SHOPPER')).toBeInTheDocument();
  expect(screen.getByText('Shop')).toBeInTheDocument();
  expect(screen.getByText('Women')).toBeInTheDocument();
});
