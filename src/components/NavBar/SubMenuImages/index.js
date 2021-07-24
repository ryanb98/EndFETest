import React from 'react'
import PropTypes from 'prop-types'
import SubMenuItemImagesStructure from './SubMenuItemImagesStructure'

const SubMenuImages = ({ category }) => {
  return <SubMenuItemImagesStructure category={category} />
}

SubMenuImages.defaultProps = {
  category: []
};

SubMenuImages.propTypes = {
  category: PropTypes.object,
};

export default SubMenuImages;
