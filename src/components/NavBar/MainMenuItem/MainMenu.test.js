import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import MainMenuItemStructure from './MainMenuStructure';
import category from '../models/__mocks__/testData';
import SubMenuItem from '../SubMenuItem';

const toggleSubNav = jest.fn('Latest');

describe('MainMenuItemStructure', () => {
  afterEach(() => cleanup());

  const setUp = () => {
    render(<MainMenuItemStructure category={category[0]} isCurrentTab={true} currentTab={'Latest'} toggleSubNav={toggleSubNav}/>)
  }

  test('renders without crashing', () => {
    setUp();
  });

  test('applies correct link tag to menuitem', () => {
    const { getByText } = render(<MainMenuItemStructure category={category[0]} isCurrentTab={true} currentTab={'Latest'} toggleSubNav={toggleSubNav}/>);
    const listItem = getByText('Latest');
    expect(listItem).toHaveAttribute('href', 'latest-products');
  });
});