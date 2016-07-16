import React, { PropTypes } from 'react';
import { Row, Column } from 'react-foundation';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Import Components
import PlaylistListRow from './PlaylistListRow';

function PlaylistList(props) {
  return (
    <Row>
      <Column large={8} offsetOnLarge={2}>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          {
            props.playlists.map(playlist =>
              <PlaylistListRow
              key={playlist.id}
              playlist={playlist} />
          )
        }
        </MuiThemeProvider>
      </Column>
    </Row>
  );
}

PlaylistList.propTypes = {
  playlists: PropTypes.object.isRequired,
};

export default PlaylistList;
