import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import RowData from '../PlayerTable/RowData';
 

let tools;

beforeEach(() => {
  rtl.cleanup();

  const player = {
    name: "Megan Rapinoe",
    country: "United States",
    searches: 99,
    id: 1
  }
  tools = rtl.render(
    <table>
      <tbody>
        <RowData player={player} />
      </tbody>
    </table>);
});

describe('RowData component', () => {
  it('runs', () => {
    tools.debug();
  });

  it('shows correct player name', () => {
    const name = tools.queryByText(/Megan Rapinoe/i);
    expect(name).toBeInTheDocument();
  });

  it('shows correct country', () => {
    const country = tools.queryByText(/United States/i);
    expect(country).toBeInTheDocument();
  })
  it('shows correct number of searches', () => {
    const searches = tools.queryByText(/99/);
    expect(searches).toBeInTheDocument();
  })
})
