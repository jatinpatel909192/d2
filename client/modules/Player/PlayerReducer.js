import { ADD_PLAYER, ADD_PLAYERS, DELETE_PLAYER, TOGGLE_ADD_PLAYER } from './PlayerActions';

// Initial State
const initialState = {
  showAddPlayer: false,
  data: ['a'],
};

const PlayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLAYER :
      return {
        data: [action.player, ...state.data],
      };

    case ADD_PLAYERS:
      return {
        ...state,
        data: action.players,
      };

    case DELETE_PLAYER:
      return {
        data: state.data.filter(player => player.id !== action.id),
      };

    case TOGGLE_ADD_PLAYER:
      return {
        ...state,
        showAddPlayer: !state.showAddPlayer,
      };

    default:
      return state;
  }
};
// Selectors

// Get all players
export const getPlayers = state => state.players.data;

// get player by id
export const getPlayer = (state, id) => state.players.data.filter(player => player.id === id)[0];

// Get player
export const getShowAddPlayer = state => state.players.showAddPlayer;

// Export Reducer
export default PlayerReducer;
