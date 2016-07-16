/**
 * Root Reducer
 */
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// Import Reducers
import app from './modules/App/AppReducer';
import players from './modules/Player/PlayerReducer';
import playlists from './modules/Playlist/PlaylistReducer';
import contents from './modules/Content/ContentReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  players,
  playlists,
  contents,
  form: formReducer,     // <---- Mounted at 'form'
});
