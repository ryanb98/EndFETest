import React, { useState } from 'react';
import NavStructure from './NavStructure'
import mockData  from './models/__mocks__/testData';

const Nav = () => {
  const [currentTab, setCurrentTab] = useState('');

  const toggleSubNav = (title) => {
    setCurrentTab(title)
  }

  const componentProps = { mockData, toggleSubNav, currentTab };

  return <NavStructure {...componentProps}/>;
}

export default Nav;
