import callApi from '../../util/apiCaller';

// Export Constants

export const ADD_PLAYER = 'ADD_PLAYER';
export const ADD_PLAYERS = 'ADD_PLAYERS';
export const DELETE_PLAYER = 'DELETE_PLAYER';
export const TOGGLE_ADD_PLAYER = 'TOGGLE_ADD_PLAYER';

// Export Actions

export function addPlayer(player) {
  return {
    type: ADD_PLAYER,
    player,
  };
}

export function addPlayerRequest(player) {
  return (dispatch) => {
    return callApi('players', 'player', {
      player: {
        name: player.name,
        location: player.location,
      },
    }).then(res => dispatch(addPlayer(res.player)));
  };
}

export function addPlayers(players) {
  return {
    type: ADD_PLAYERS,
    players,
  };
}

export function fetchPlayers() {
  return (dispatch) => {
    return callApi('players').then(res => {
      dispatch(addPlayers(res.players));
    });
  };
}

export function fetchPlayer(id) {
  return (dispatch) => {
    return callApi(`players/${id}`).then(res => dispatch(addPlayer(res.player)));
  };
}

export function deletePlayer(id) {
  return {
    type: DELETE_PLAYER,
    id,
  };
}

export function deletePlayerRequest(id) {
  return (dispatch) => {
    return callApi(`players/${id}`, 'delete').then(() => dispatch(deletePlayer(id)));
  };
}

export function toggleAddPlayer() {
  return {
    type: TOGGLE_ADD_PLAYER,
  };
}
