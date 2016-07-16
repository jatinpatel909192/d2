// Export Constants
export const LOGOUT = 'LOGOUT';
export const TOGGLE_DRAWER = 'TOGGLE_DRAWER';

// Export Actions
export function logout() {
  return {
    type: LOGOUT,
  };
}

export function toggleDrawer() {
  return {
    type: TOGGLE_DRAWER,
  };
}
