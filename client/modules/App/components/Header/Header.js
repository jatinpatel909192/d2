import React, { PropTypes } from 'react';
import AppNavBar from './AppNavBar';
import AppMenuDrawer from './AppMenuDrawer';

export function Header(props) {
  return (
    <div>
      <AppMenuDrawer appDrawerOpen={props.appDrawerOpen} overlayClose={props.overlayClose} />
      <AppNavBar logout={props.logout} toggleDrawer={props.toggleDrawer} />
    </div>
  );
}

Header.propTypes = {
  overlayClose: PropTypes.func.isRequired,
  appDrawerOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

export default Header;
