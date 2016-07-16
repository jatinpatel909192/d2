import React, { PropTypes } from 'react';
import { Row, Column } from 'react-foundation';
import { CardText, CardHeader, Card } from 'material-ui/Card';
import { List } from 'material-ui/List';

function PlayersTab(props) {
  return (
    <Row>
      <Column onLarge={6} onLargeOffset={3}>
        <Card>
          <CardHeader
            title="Cottage"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>
            <List>
              {props.players.filter(player => player.location === 'cottage').map(player =>
                <SelectablePlayerList
                  playlist={this.props.playlist}
                  player={player} />)}
            </List>
          </CardText>
        </Card>
        <Card>
          <CardHeader
            title="Khanvel"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>
            <List>
              {props.players.filter(player => player.location === 'Khanvel').map(player =>
                <SelectablePlayerList
                  playlist={this.props.playlist}
                  player={player} />)}
            </List>
          </CardText>
        </Card>
        <Card>
          <CardHeader
            title="Office"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>
            <List>
              {props.players.filter(player => player.location === 'office').map(player =>
                <SelectablePlayerList
                playlist={this.props.playlist}
                player={player} />)}
            </List>
          </CardText>
        </Card>
      </Column>
    </Row>
  );
}

PlayersTab.propTypes = {
  players: PropTypes.array.isRequired,
  playerList: PropTypes.func.isRequired,
};

export default PlayersTab;
