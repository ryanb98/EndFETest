import React from 'react'
import PropTypes from 'prop-types'
import { StyledSubMenuContainer, StyledSubMenuContent, StyledSubNavLink, StyledColumn } from './SubMenuStyles';
import SubMenuItemImagesStructure from '../SubMenuImages/SubMenuItemImagesStructure';

const SubMenuStructure = ({ subMenuData, showSubNav, category }) => {
  const column1 = subMenuData.filter(
    column1 => !column1['include_in_menu_column2'] && !column1['include_in_menu_column3']);

  const column2 = subMenuData.filter(column2 => column2['include_in_menu_column2']);
  const column3 = subMenuData.filter(column3 => column3['include_in_menu_column3']);

  return (
    <StyledSubMenuContainer showSubNav={showSubNav}>
      <StyledSubMenuContent>
        <StyledColumn>
          {column1.map((subMenu1) => (
            <StyledSubNavLink key={subMenu1.id} href={subMenu1['url_path']} >
              {subMenu1.name}
            </StyledSubNavLink>
          ))}
        </StyledColumn>
        <StyledColumn>
          {column2.map((subMenu2) => (
            <StyledSubNavLink key={subMenu2.id} href={subMenu2['url_path']} >
              {subMenu2.name}
            </StyledSubNavLink>
          ))}
        </StyledColumn>
        {!!column3.length && (
          <StyledColumn>
          {column3.map((subMenu3) => (
            <StyledSubNavLink key={subMenu3.id} href={subMenu3['url_path']} >
              {subMenu3.name}
            </StyledSubNavLink>
          ))}
        </StyledColumn>
        )}
        <SubMenuItemImagesStructure category={category} />
      </StyledSubMenuContent>
    </StyledSubMenuContainer>
  );
};

SubMenuStructure.propTypes = {
  subMenuData: PropTypes.array.isRequired,
  category: PropTypes.object.isRequired,
  showSubNav: PropTypes.bool.isRequired,
}

export default SubMenuStructure;



