import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

// Import Components
import EditContentDialog from '../../components/EditContentDialog/EditContentDialog';
import ContentCreateWidget from '../../components/ContentCreateWidget/ContentCreateWidget';
import ContentsGrid from '../../components/ContentsGrid/ContentsGrid';

// Import Actions
import { fetchContents, fetchContentForEdit, deleteContentRequest, addContentRequest } from '../../ContentActions';

const styles = {
  paper: { padding: '10px' },
  button: {
    position: 'fixed',
    right: '20px',
    bottom: '10px',
  },
};

class ContentListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchContents());
    this.props.dispatch(fetchContentForEdit());
  }

  onDropFiles = files => {
    this.props.dispatch.addContentRequest(files[0]);
  }

  handleDeletePlayer = content => {
    if (confirm('Do you want to delete this content')) { // eslint-disable-line
      this.props.dispatch(deleteContentRequest(content));
    }
  };

  handleAddContent = content => {
    this.props.dispatch(addContentRequest(content));
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Contents</h2>
        <ContentCreateWidget
          onDropFiles={this.onDropFiles} />
        <EditContentDialog
          saveContentDetails={this.saveContentDetails}
          closeContentTitleDialog={this.closeContentTitleDialog}
          openContentTitleDialogOpen={this.state.openContentTitleDialogOpen}
          content={this.props.content} />
        <ContentsGrid
          removeContent={this.removeContent}
          openContentTitleDialog={this.openContentTitleDialog}
          contents={this.props.contents} />
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <FloatingActionButton secondary={true} onTouchTap={this.handleToggle} style={styles.button}>
            <ContentAdd />
          </FloatingActionButton>
        </MuiThemeProvider>
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
ContentListPage.need = [() => { return fetchContents(); }];
ContentListPage.need = [() => { return fetchContentForEdit(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    content: fetchContentForEdit(state),
    contents: fetchContents(state),
  };
}

ContentListPage.propTypes = {
  contents: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    cpuId: PropTypes.string.isRequired,
    ipAddress: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  })).isRequired,
  content: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    cpuId: PropTypes.string.isRequired,
    ipAddress: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

ContentListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(ContentListPage);
