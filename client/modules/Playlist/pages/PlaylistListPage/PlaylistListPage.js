import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import PlaylistList from '../../components/PlaylistList/PlaylistList';
import PlaylistCreateWidget from '../../components/PlaylistCreateWidget/PlaylistCreateWidget';

// Import Actions
import { addPlaylistRequest, fetchPlaylists, deletePlaylistRequest } from '../../PlaylistAction';

// Import Selectors
import { getPlaylists } from '../../PlaylistReducer';

class PlaylistListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPlaylists());
  }

  handleDeletePlaylist = playlist => {
    if (confirm('Do you want to delete this playlist')) { // eslint-disable-line
      this.props.dispatch(deletePlaylistRequest(playlist));
    }
  };

  handleAddPlaylist = (name) => {
    this.props.dispatch(addPlaylistRequest({ name }));
  };

  render() {
    return (
      <div>
        <h2 className="text-center">Playlists</h2>
        <PlaylistCreateWidget
          onSave={this.handleAddPlaylist} />
        <PlaylistList playlists={this.props.playlists} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
PlaylistListPage.need = [() => { return fetchPlaylists(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    playlists: getPlaylists(state),
  };
}

PlaylistListPage.propTypes = {
  playlists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    cpuId: PropTypes.string.isRequired,
    ipAddress: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

PlaylistListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(PlaylistListPage);
