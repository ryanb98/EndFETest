import React from 'react';
import PropTypes from 'prop-types'
import { StyledMainMenuItem, StyledNavLink } from './MainMenuStyles';
import SubMenuItem from '../SubMenuItem';

const MainMenuItemStructure = ({
  category,
  isCurrentTab,
  currentTab,
  toggleSubNav,
}) => (
  <StyledMainMenuItem
    currentTab={currentTab}
    isCurrentTab={isCurrentTab}
    onFocus={() => toggleSubNav(category['name'])}
    onBlur={() => toggleSubNav(category['name'])}
    onMouseEnter={() => toggleSubNav(category['name'])}
    onMouseLeave={() => toggleSubNav('name')}

  >
    <StyledNavLink className={isCurrentTab ? 'active' : ''} href={category['url_path']} >
      {category.name}
    </StyledNavLink>
    <SubMenuItem 
      subMenuData={category['children_data']}
      showSubNav={isCurrentTab}
      category={category}
    />
  </StyledMainMenuItem>
);

MainMenuItemStructure.propTypes = {
  category: PropTypes.object.isRequired,
  isCurrentTab: PropTypes.bool.isRequired,
  currentTab: PropTypes.string.isRequired,
  toggleSubNav: PropTypes.func.isRequired,
}

export default MainMenuItemStructure;
