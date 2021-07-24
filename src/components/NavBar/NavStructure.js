import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledNavContainer,
  StyledNavLinksContainer,
  StyledLinks
} from './NavStyles';
import MainMenuItem from './MainMenuItem';

const NavStructure = ({ mockData, toggleSubNav, currentTab  }) => {
  return (
    <StyledNavContainer>
      <StyledNavLinksContainer>
        <StyledLinks>
          {mockData.map((category) => (
            <MainMenuItem key={category.id} category={category} toggleSubNav={toggleSubNav} currentTab={currentTab}/>
          ))}
        </StyledLinks>
      </StyledNavLinksContainer>
    </StyledNavContainer>
  )
}

NavStructure.defaultProps = {
  data: [],
  currentTab: '',
}

NavStructure.propTypes = {
  testData: PropTypes.arrayOf(PropTypes.array),
  toggleSubNav: PropTypes.func.isRequired,
  currentTab: PropTypes.string,
}

export default NavStructure;
