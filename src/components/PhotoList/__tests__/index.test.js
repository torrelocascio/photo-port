import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PhotoList from '../'


const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
  ]
  const mockCurrentCategory = jest.fn();
  const mockSetCurrentCategory = jest.fn();


afterEach(cleanup);

describe('PhotoList is rendering', () => {
  it('renders', () => {
    render(<PhotoList category={categories[0]} />);
  });

  it('renders', () => {
    const { asFragment } = render(<PhotoList category={categories[0]}  />)
    expect(asFragment()).toMatchSnapshot()
  });
});