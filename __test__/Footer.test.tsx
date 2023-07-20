import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from '../src/components/Footer';

describe('Footer', () => {
  test('renders Footer component with links', () => {
    render(<Footer />);

    const linkedinElement = screen.getByRole('link', { name: /linkedin/i });
    expect(linkedinElement).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/cindy-zhang-au/'
    );

    const githubElement = screen.getByRole('link', { name: /github/i });
    expect(githubElement).toHaveAttribute(
      'href',
      'https://github.com/Cindy088'
    );

    const mailElement = screen.getByRole('link', { name: /mail/i });
    expect(mailElement).toHaveAttribute('href', 'mailto:yizhangwork@gmail.com');

    const facebookElement = screen.getByLabelText('facebook');
    expect(facebookElement).toBeInTheDocument();

    const instagramElement = screen.getByLabelText('instagram');
    expect(instagramElement).toBeInTheDocument();
  });
});
