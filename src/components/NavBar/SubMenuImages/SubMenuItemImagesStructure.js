import React from 'react'
import PropTypes from 'prop-types'
import { StyledimageColumn } from './SubMenuItemImagesStyles';
import { StyledSubNavLink } from '../SubMenuItem/SubMenuStyles';

const SubMenuItemImagesStructure = ({ category }) => {
 return (
  <>
    <StyledimageColumn>
      <StyledSubNavLink href={category['dropdown_image_link1']}>
        <div>
          <img src={category['dropdown_image_url1']}></img>
          <span>{category['dropdown_image_title1']}</span>
        </div>
      </StyledSubNavLink>
      <StyledSubNavLink href={category['dropdown_image_link2']}>
        <div>
          <img src={category['dropdown_image_url2']}></img>
          <span>{category['dropdown_image_title2']}</span>
        </div>
      </StyledSubNavLink>
    </StyledimageColumn>
  
    {category['dropdown_image_link4'] && (
      <StyledimageColumn>
      <StyledSubNavLink href={category['dropdown_image_link3']}>
        <div>
          <img src={category['dropdown_image_url3']} />
          <span>{category['dropdown_image_title3']}</span>
        </div>
      </StyledSubNavLink>
      <StyledSubNavLink href={category['dropdown_image_link4']}>
        <div data-testid="column4">
          <img src={category['dropdown_image_url4']} />
          <span>{category['dropdown_image_title4']}</span>
        </div>
      </StyledSubNavLink>
      </StyledimageColumn>
    )}
  </>
 ); 
};

SubMenuItemImagesStructure.defaultProps = {
  category: [],
}

SubMenuItemImagesStructure.protoTypes = {
  category: PropTypes.array,
}

export default SubMenuItemImagesStructure;
