import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
import { Row } from 'react-foundation';

// Import Components
import ContentSelectDialog from '../../components/ContentSelectDialog/ContentSelectDialog';
import ManagePlaylistTopNav from '../../components/ManagePlaylistTopNav/ManagePlaylistTopNav';
import ManagePlaylistTabs from '../../components/ManagePlaylistTabs/ManagePlaylistTabs';

// Import Actions
import { addPlaylistRequest, fetchPlaylists, deletePlaylistRequest } from '../../PlaylistAction';

class PlaylistManagePage extends Component {
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
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <Paper>
            <ManagePlaylistTopNav />
            <Row>
              <Paper>
                <ManagePlaylistTabs />
              </Paper>
              <ContentSelectDialog
                contentsGridCard={this.contentsGridCard}
                addContentToPlaylist={this.addContentToPlaylist}
                contents={this.props.contents}
                mediaType="video/mp4"
                contentToggle={this.toggleVideo}
                contentDialogOpen={this.state.videoContentDialogOpen} />
              <ContentSelectDialog
                contentsGridCard={this.contentsGridCard}
                contents={this.props.contents}
                mediaType="image/jpeg"
                addContentToPlaylist={this.addContentToPlaylist}
                contentToggle={this.toggleImage}
                contentDialogOpen={this.state.imageContentDialogOpen} />
              <ContentSelectDialog
                contentsGridCard={this.contentsGridCard}
                contents={this.props.contents}
                addContentToPlaylist={this.addContentToPlaylist}
                mediaType="application/pdf"
                contentToggle={this.togglePdf}
                contentDialogOpen={this.state.pdfContentDialogOpen} />
            </Row>
          </Paper>
        </MuiThemeProvider>
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
PlaylistManagePage.need = [() => { return fetchPlaylists(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    playlists: fetchPlaylists(state),
  };
}

PlaylistManagePage.propTypes = {
  playlists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    cpuId: PropTypes.string.isRequired,
    ipAddress: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  })).isRequired,
  contents: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    cpuId: PropTypes.string.isRequired,
    ipAddress: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

PlaylistManagePage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(PlaylistManagePage);
