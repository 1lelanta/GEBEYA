import { render, screen } from '@testing-library/react';
import App from './App';
import ShopContextProvider from './Contexts/ShopContext';

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
