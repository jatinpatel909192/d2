import React, { PropTypes } from 'react';
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const cardStyles = {
  width: '100%',
};

function ContentTabCardSections(props) {
  return (
    <Card style={cardStyles}>
      <CardHeader
        title={props.mediaTextHeader}
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText expandable={true}>
        {props.playlist.contents &&
        props.playlist.contents.filter(
          content => content.media_content_type === props.mediaType)
          .map(props.playlistContentListRow)}
      </CardText>
      <CardActions expandable={true}>
        <FlatButton label={props.mediaText} onTouchTap={props.openContentDialog} primary={true} />
      </CardActions>
    </Card>
  );
}

ContentTabCardSections.propTypes = {
  playlist: PropTypes.object.isRequired,
  playlistContentListRow: PropTypes.func.isRequired,
  mediaType: PropTypes.string.isRequired,
  mediaText: PropTypes.string.isRequired,
  mediaTextHeader: PropTypes.string.isRequired,
  openContentDialog: PropTypes.func.isRequired,
};

export default ContentTabCardSections;
