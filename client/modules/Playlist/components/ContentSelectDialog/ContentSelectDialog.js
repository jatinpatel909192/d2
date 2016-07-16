import React, { PropTypes } from 'react';
import { Row, Column } from 'react-foundation';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

// Import Components
import ContentsGridCard from './ContentsGridCard';

function ContentSelectDialog(props) {
  return (
    <Dialog
        title="Select files to add"
        style={{}}
        actions={[<FlatButton
          label="Done"
          key="done"
          secondary={true}
          onTouchTap={props.addContentToPlaylist}
          />, <FlatButton
            label="Cancel"
            key="cancel"
            primary={false}
            onTouchTap={props.contentToggle}
            />]}
        modal={true}
        autoScrollBodyContent={true}
        open={props.contentDialogOpen}
      >
      {
        props.contents.filter(content => content.media_content_type === props.mediaType) &&
          <Row upOnSmall={1} upOnMedium={2} upOnLarge={4}>
        {
          props.contents
            .filter(content => content.media_content_type === props.mediaType)
            .map(content =>
              <Column isColumn key={content.id}>
                <ContentsGridCard
                  key={content.id}
                  addedContent={this.addedContent}
                  content={content} />
              </Column>
            )}
          </Row>
      }
    </Dialog>
  );
}

ContentSelectDialog.propTypes = {
  addContentToPlaylist: PropTypes.func.isRequired,
  contentToggle: PropTypes.func.isRequired,
  contentDialogOpen: PropTypes.func.isRequired,
  mediaType: PropTypes.string.isRequired,
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
};

export default ContentSelectDialog;
