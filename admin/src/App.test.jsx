import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('Admin app suite', () => {
  it('renders sidebar navigation entries', () => {
    render(
      <MemoryRouter initialEntries={['/addproduct']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Add Product')).toBeInTheDocument();
    expect(screen.getByText('Product List')).toBeInTheDocument();
  });
});
