import React, { PropTypes } from 'react';
import { Row, Column } from 'react-foundation';
import { List } from 'material-ui/List';
// Import Components
import PlayerLocationListItem from './PlayerLocationListItem';

function PlayerLocationList(props) {
  return (
    <div>
      <h2 className="text-center">Players</h2>
      <Row>
        <Column>
          <List>
          {
            props.locations.map(location =>
              <PlayerLocationListItem
                location={location}
                key={location}
                handleDeletePlayer={props.handleDeletePlayer}
                players={props.players.filter(player => player.location !== location)}
              />
            )
          }
          </List>
        </Column>
      </Row>
    </div>
  );
}

PlayerLocationList.propTypes = {
  locations: PropTypes.array.isRequired,
  players: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    ipAddress: PropTypes.string.isRequired,
    cpuid: PropTypes.string.isRequired,
  })).isRequired,
  handleDeletePlayer: PropTypes.func.isRequired,
};

export default PlayerLocationList;
