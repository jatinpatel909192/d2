import React, { PropTypes } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';

// Import Components
import PlayerListItem from './PlayerListItem';
import styles from './PlayerLocationListItem.css';

function PlayerLocationListItem(props) {
  return (
    <Card className={styles['location-card']}>
      <CardHeader
        title={props.location}
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText expandable={true}>
          {
            props.players.map(player =>
              <PlayerListItem
                key={player.id}
                player={player}
                onDelete={() => props.handleDeletePlayer(player)}
              />
            )
          }
      </CardText>
    </Card>
  );
}

PlayerLocationListItem.propTypes = {
  location: PropTypes.string.isRequired,
  players: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    ipAddress: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    cpuid: PropTypes.string.isRequired,
  })).isRequired,
  handleDeletePlayer: PropTypes.func.isRequired,
};

export default PlayerLocationListItem;
