import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Header from '../PlayerTable/Header';

let tools;

beforeEach(() => {
  rtl.cleanup();
  tools = rtl.render(<table><Header /></table>);
});

describe('Header component', () => {
  it('runs', () => {
    tools.debug();
  });

  it('shows name title', () => {
    const title = tools.queryByText(/Name/i);
    expect(title).toBeInTheDocument();
  });

  it('shows country title', () => {
    const title = tools.queryByText(/country/i);
    expect(title).toBeInTheDocument();
  })
  it('shows searches title', () => {
    const title = tools.queryByText(/searches/i);
    expect(title).toBeInTheDocument();
  })
})
