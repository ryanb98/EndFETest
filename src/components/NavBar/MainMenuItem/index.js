import React from 'react';
import PropTypes from 'prop-types';
import MainMenuItemStructure from './MainMenuStructure';

const MainMenuItem = ({
  category,
  currentTab,
  toggleSubNav
}) => {

  const isCurrentTab = currentTab === category['name'];

  const componentProps = {
    category,
    isCurrentTab,
    toggleSubNav,
    currentTab,

  }
  return <MainMenuItemStructure {...componentProps} />
}

MainMenuItem.propTypes = {
  category: PropTypes.object.isRequired,
  currentTab: PropTypes.string.isRequired,
  toggleSubNav: PropTypes.func.isRequired,
};

export default MainMenuItem;
