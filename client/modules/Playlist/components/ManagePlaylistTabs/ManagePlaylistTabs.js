import React, { PropTypes } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';

// Import Components
import LayoutTab from './LayoutTab';
import ContentTab from './ContentTab';
import PlayersTab from './PlayersTab';

function ManagePlaylistTabs(props) {
  return (
    <Tabs>
      <Tab label="Layout" >
        <LayoutTab setPlaylistLayout={props.updateLayoutPlaylistState} playlist={props.playlist} />
      </Tab>
      <Tab label="Content" >
        <ContentTab
          playlistContentListRow={props.playlistContentListRow}
          openVideoContentDialog={props.toggleVideo}
          openImageContentDialog={props.toggleImage}
          openPdfContentDialog={props.togglePdf}
          changeTickerTexter={props.changeTickerText}
          playlist={props.playlist} />
      </Tab>
      <Tab label="Players" >
        <PlayersTab players={props.players} />
      </Tab>
    </Tabs>
  );
}

ManagePlaylistTabs.propTypes = {
  playlist: PropTypes.object.isRequired,
  players: PropTypes.object.isRequired,
  playlistContentListRow: PropTypes.object.isRequired,
  toggleVideo: PropTypes.object.isRequired,
  toggleImage: PropTypes.object.isRequired,
  togglePdf: PropTypes.object.isRequired,
  changeTickerText: PropTypes.object.isRequired,
  updateLayoutPlaylistState: PropTypes.object.isRequired,
};

export default ManagePlaylistTabs;
