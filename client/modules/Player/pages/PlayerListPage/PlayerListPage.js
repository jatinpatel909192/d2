import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import _ from 'lodash';

// Import Components
import PlayerLocationList from '../../components/PlayerLocationList';
import PlayerCreateWidget from '../../components/PlayerCreateWidget/PlayerCreateWidget';

// Import Actions
import { addPlayerRequest, fetchPlayers, deletePlayerRequest, toggleAddPlayer } from '../../PlayerActions';

// Import Selectors
import { getPlayers, getShowAddPlayer } from '../../PlayerReducer';

const muiTheme = getMuiTheme((null, { userAgent: 'all' }));

class PlayerListPage extends Component {

  getChildContext() {
    return { muiTheme };
  }

  componentDidMount() {
    this.props.dispatch(fetchPlayers());
  }
  handleDeletePlayer = player => {
    if (confirm('Do you want to delete this player')) { // eslint-disable-line
      this.props.dispatch(deletePlayerRequest(player));
    }
  };

  handleAddPlayer = (name, location) => {
    this.props.dispatch(toggleAddPlayer());
    this.props.dispatch(addPlayerRequest({ name, location }));
  };
  handleTogglePlayer = () => {
    this.props.dispatch(toggleAddPlayer());
  }

  render() {
    return (
      <div>
        <PlayerCreateWidget
          addPlayer={this.handleAddPlayer}
          showAddPlayer={this.props.showAddPlayer} />
        <PlayerLocationList
          handleDeletePlayer={this.handleDeletePlayer}
          locations={this.props.locations}
          players={this.props.players} />
        <FloatingActionButton
          secondary={true}
          onTouchTap={this.handleTogglePlayer}
          >
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
}

PlayerListPage.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

// Actions required to provide data for this component to render in sever side.
PlayerListPage.need = [() => { return fetchPlayers(); }];

// Refactor this!!!!
function findUniqLocations(players) {
  const locations = [];
  _.forEach(players, (value) => {
    _.forEach(value, (val, ka) => {
      if (ka === 'location') {
        locations.push(val);
      }
    });
  });
  return _.uniq(locations);
}


// Retrieve data from store as props
function mapStateToProps(state) {
  const players = getPlayers(state);
  console.log(state);
  let locations = [];
  if (players.length > 0) {
    locations = findUniqLocations(state.players);
  }
  const showAddPlayer = getShowAddPlayer(state);
  return {
    locations,
    showAddPlayer,
    players,
  };
}

PlayerListPage.propTypes = {
  locations: PropTypes.array.isRequired,
  players: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    cpuId: PropTypes.string.isRequired,
    ipAddress: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  })).isRequired,
  showAddPlayer: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

PlayerListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(PlayerListPage);
