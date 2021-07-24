import React from 'react';
import { render } from '@testing-library/react';
import NavStructure from './NavStructure';
import mockData from './models/__mocks__/testData';

const props = {
  mockData,
  toggleSubNav: jest.fn(),
  currentTab: 'Latest'
}

it('renders without crashing', () => {
  render(<NavStructure {...props} />)
});