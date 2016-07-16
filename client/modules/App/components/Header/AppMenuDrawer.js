import React, { PropTypes } from 'react';
import MenuItem from 'material-ui/MenuItem';
import { Link, IndexLink } from 'react-router';
import Drawer from 'material-ui/Drawer';

const styles = {
  innerDiv: {
    padding: '0px',
  },
};
function AppMenuDrawer(props) {
  return (
    <Drawer
      open={props.appDrawerOpen}
      docked={false}
      onRequestChange={() => props.overlayClose}
      >
      <MenuItem innerDivStyle={styles.innerDiv}>
        <div>
          <img src="img/dr.jpg" alt="user" className="avatar" />
          <div className="overlayAvatar">
            <div className="contentWrap">
              <p className="userName">Amit Solanki</p>
              <p className="userEmail">amit.fash@gmail.com</p>
            </div>
          </div>
        </div>
      </MenuItem>
      <IndexLink to="/"><MenuItem>Dashboard</MenuItem></IndexLink>
      <Link to="/contents"><MenuItem>Content</MenuItem></Link>
      <Link to="/playlists"><MenuItem>Playlists</MenuItem></Link>
      <Link to="/players"><MenuItem>Players</MenuItem></Link>
      <Link to="/users"><MenuItem>User Settings</MenuItem></Link>
    </Drawer>
  );
}

AppMenuDrawer.propTypes = {
  appDrawerOpen: PropTypes.bool.isRequired,
  overlayClose: PropTypes.func.isRequired,
};

export default AppMenuDrawer;
