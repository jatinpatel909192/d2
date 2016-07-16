// Import Actions
import { TOGGLE_DRAWER, LOGOUT } from './AppActions';

// Initial State
const initialState = {
  login: false,
  appDrawerOpen: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return {
        login: !state.login,
      };
    case TOGGLE_DRAWER:
      return {
        ...state,
        appDrawerOpen: !state.appDrawerOpen,
      };
    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getlogin = state => state.app.login;
export const getAppDrawerOpen = state => state.app.appDrawerOpen;

// Export Reducer
export default AppReducer;
