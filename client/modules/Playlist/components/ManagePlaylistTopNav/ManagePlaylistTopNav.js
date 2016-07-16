import React, { PropTypes } from 'react';
import { Row, Column } from 'react-foundation';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import { Link } from 'react-router';

// Import Components
import ManagePlaylistFlashWidgetForm from './ManagePlaylistFlashWidgetForm';

function ManagePlaylistTopNav(props) {
  return (
    <Row>
      <Column large={3}>
        <Link to="/playlists">
          <FlatButton style={{ height: '51px' }} label="Back to all Playlist" secondary={true} />
        </Link>
      </Column>
      <Column large={6}>
        <h3 className="text-center">{props.playlist.name}</h3>
      </Column>
      <Column large={3}>
        <Toggle onToggle={this.saveChanges} label="Make it Live?" />
        <Toggle label="Make it a Flash Message?" />
        <ManagePlaylistFlashWidgetForm />
      </Column>
    </Row>
  );
}

ManagePlaylistTopNav.propTypes = {
  playlist: PropTypes.object.isRequired,
};

export default ManagePlaylistTopNav;
