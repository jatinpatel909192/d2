import { ADD_PLAYLIST, ADD_PLAYLISTS, DELETE_PLAYLIST } from './PlaylistAction';

// Initial State
const initialState = { data: [] };

const PlaylistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLAYLIST :
      return {
        data: [action.playlist, ...state.data],
      };

    case ADD_PLAYLISTS:
      return {
        data: action.playlists,
      };

    case DELETE_PLAYLIST:
      return {
        data: state.data.filter(playlist => playlist.id !== action.id),
      };

    default:
      return state;
  }
};
// Selectors

// Get all playlists
export const getPlaylists = state => state.playlists.data;

// get playlist by id
export const getPlaylist = (state, id) => state.playlists.data.filter(playlist => playlist.id === id)[0];

// Export Reducer
export default PlaylistReducer;
