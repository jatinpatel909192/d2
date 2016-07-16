import React, { PropTypes } from 'react';
import { Row, Column, Label, Colors, Icon } from 'react-foundation';
import Paper from 'material-ui/Paper';
import { ListItem } from 'material-ui/List';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import { grey400 } from 'material-ui/styles/colors';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';

// Import Styles
import styles from './PlayerListItem.css';

function PlayerListItem(props) {
  return (
    <div>
      <Row className={styles['player-list-row']}>
        <Column className={styles['player-list-column']}>
          <Paper zDepth={1} transitionEnabled={false} rounded={false}>
            <ListItem
              className={styles['player-list-item']}
              primaryText={props.player.name}
              secondaryText={
                <span>
                  {
                    props.player.status === 'tvOff' &&
                      <Label color={Colors.WARNING}>
                        <Icon name="fi-x-circle" /> TV is Off
                      </Label>
                  }
                  {
                    props.player.status === 'on' &&
                      <Label color={Colors.SUCCESS}>
                        <Icon name="fi-x-tick" />On and Working
                      </Label>
                  }
                  {
                    props.player.status === 'off' &&
                      <Label color={Colors.ALERT}>
                        <Icon name="fi-x-circle" /> Player is Off
                      </Label>
                  }
                  <span>
                {props.player.ipAddress}
                  </span>
                </span>
              }
              rightIconButton={
                <IconMenu
                  onItemTouchTap={props.onDelete}
                  iconButtonElement={
                    <IconButton
                      touch={true}
                      tooltip="more"
                      tooltipPosition="bottom-left"
                    >
                      <MoreVertIcon color={grey400} />
                    </IconButton>
                }>
                  <MenuItem index={1} >Delete</MenuItem>
                </IconMenu>
              } />
            }
          </Paper>
        </Column>
      </Row>
    </div>
  );
}

PlayerListItem.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    cpuid: PropTypes.string.isRequired,
    ipAddress: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PlayerListItem;
