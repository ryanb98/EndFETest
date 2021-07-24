import React from 'react'
import PropTypes from 'prop-types';
import SubMenuStructure from './SubMenuStructure';

const SubMenuItem = ({ subMenuData, showSubNav, category }) => {
  const componentProps = {subMenuData, showSubNav, category};

  return <SubMenuStructure {...componentProps} />
}

SubMenuItem.propTypes = {
  subMenuData: PropTypes.array,
  category: PropTypes.object.isRequired,
  showSubNav: PropTypes.bool.isRequired,
}

export default SubMenuItem;