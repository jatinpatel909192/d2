import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const AppNavBar = (props) => {
  return (
    <AppBar
      title={<span style={styles.title}>Pursuit DIN</span>}
      onLeftIconButtonTouchTap={props.toggleDrawer}
      iconElementRight={
        <IconMenu
          onItemTouchTap={() => { props.logout(); }}
          iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
          }
          targetOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
          >
          <MenuItem primaryText="Sign out" />
        </IconMenu>
    }
      />
);
};

AppNavBar.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

export default AppNavBar;
