import React from 'react';
import { cleanup, render } from '@testing-library/react';
import SubMenuStructure from './SubMenuStructure';
import category from '../models/__mocks__/testData';


describe('SubMenuItem', () => {

  afterEach(() => cleanup());

  test('renders without crashing', () => {
    render(<SubMenuStructure category={category[0]} subMenuData={category[0]['children_data']} showSubNav={true}/>)
  });

  test('make sure column 3 has the image title and not a list item ', () => {
    const { getByText } = render(<SubMenuStructure category={category[0]} subMenuData={category[0]['children_data']} showSubNav={true}/>);
    const imageTitle = getByText('AMIRI');
    expect(imageTitle).toBeTruthy();
  });
});