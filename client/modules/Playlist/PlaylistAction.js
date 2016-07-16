import callApi from '../../util/apiCaller';

// Export Constants

export const ADD_PLAYLIST = 'ADD_PLAYLIST';
export const ADD_PLAYLISTS = 'ADD_PLAYLISTS';
export const DELETE_PLAYLIST = 'DELETE_PLAYLIST';

// Export Actions

export function addPlaylist(playlist) {
  return {
    type: ADD_PLAYLIST,
    playlist,
  };
}

export function addPlaylistRequest(playlist) {
  return (dispatch) => {
    return callApi('playlists', 'playlist', {
      playlist: {
        name: playlist.name,
      },
    }).then(res => dispatch(addPlaylist(res.playlist)));
  };
}

export function addPlaylists(playlists) {
  return {
    type: ADD_PLAYLISTS,
    playlists,
  };
}

export function fetchPlaylists() {
  return (dispatch) => {
    return callApi('playlists').then(res => {
      dispatch(addPlaylists(res.playlists));
    });
  };
}

export function fetchPlaylist(id) {
  return (dispatch) => {
    return callApi(`playlists/${id}`).then(res => dispatch(addPlaylist(res.playlist)));
  };
}

export function deletePlaylist(id) {
  return {
    type: DELETE_PLAYLIST,
    id,
  };
}

export function deletePlaylistRequest(id) {
  return (dispatch) => {
    return callApi(`playlists/${id}`, 'delete').then(() => dispatch(deletePlaylist(id)));
  };
}
