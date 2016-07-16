import React, { PropTypes } from 'react';
import { ListItem, Paper } from 'material-ui';
import { Row, Column } from 'react-foundation';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';
import { grey400 } from 'material-ui/styles/colors';

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem key={1} index={1}>Delete</MenuItem>
  </IconMenu>
);

const styles = {
  row: {
    marginBottom: '10px',
  },
  column: {
    marginBottom: '10px',
  },
  listItem: {
    padding: '10px',
  },
};

function PlaylistListRow(props) {
  return (
    <Row style={styles.row}>
      <Column style={styles.column}>
        <Paper zDepth={1} transitionEnabled={false} rounded={false}>
          <Link to={`playlists/${props.playlist.id}`}>
            <ListItem
              style={styles.listItem}
              primaryText={props.playlist.name}
              rightIconButton={rightIconMenu} />
          </Link>
        </Paper>
      </Column>
    </Row>
  );
}

PlaylistListRow.propTypes = {
  playlist: PropTypes.object.isRequired,
};

export default PlaylistListRow;
