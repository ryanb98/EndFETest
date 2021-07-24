import React from 'react';
import { cleanup, render } from '@testing-library/react';
import SubMenuItemImages from './index';
import category from '../models/__mocks__/testData';

describe('SubMenuItemImages', () => {

  afterEach(() => cleanup());

  test('renders without crashing', () => {
    render(<SubMenuItemImages category={category[4]}/>)
  });

  test('column 4 renders images', () => {
    const { getByTestId } = render(<SubMenuItemImages category={category[4]}/>)
    const image4 = getByTestId('column4');
    expect(image4).toBeTruthy();
  });
});