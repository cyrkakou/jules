// my-app/app/__tests__/HomePage.test.tsx
import { render, screen } from '@testing-library/react';
import HomePage from '../page'; // Adjust path to your HomePage component

describe('HomePage', () => {
  it('renders the welcome heading', () => {
    render(<HomePage />);
    const heading = screen.getByRole('heading', {
      name: /Welcome to SaaSBoiler!/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders the Get Started link', () => {
    render(<HomePage />);
    const link = screen.getByRole('link', { name: /Get Started/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/auth/signin');
  });
});
