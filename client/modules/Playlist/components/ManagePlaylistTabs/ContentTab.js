import React, { PropTypes } from 'react';
import { Row, Column } from 'react-foundation';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';

import ContentTabCardSections from './ContentTabCardSections';

const styles = {
  textBox: {
    width: '100%',
    paddingLeft: '15px',
  },
  input: {
    boxShadow: 'none',
  },
};

function contentTab(props) {
  return (
    <Row>
      <Column>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <Paper style={{ width: '100%' }}>
            {
              (props.playlist.layout_type === 'a' ||
                props.playlist.layout_type === 'b' ||
                props.playlist.layout_type === 'c') &&
                <ContentTabCardSections
                  playlist={props.playlist}
                  mediaType="video/mp4"
                  mediaText="Add Video From Contents"
                  mediaTextHeader="Videos Section"
                  playlistContentListRow={props.playlistContentListRow}
                  openContentDialog={props.openVideoContentDialog} />
            }

            {
              (props.playlist.layout_type === 'a' ||
                props.playlist.layout_type === 'b' ||
                props.playlist.layout_type === 'c' ||
                props.playlist.layout_type === 'd' ||
                props.playlist.layout_type === 'f') &&
                <ContentTabCardSections
                  playlist={props.playlist}
                  mediaType="image/jpeg"
                  mediaText="Add Images From Contents"
                  mediaTextHeader="Images Section"
                  playlistContentListRow={props.playlistContentListRow}
                  openContentDialog={props.openImageContentDialog} />
            }

            {
              (props.playlist.layout_type === 'e' ||
                props.playlist.layout_type === 'f') &&
                <ContentTabCardSections
                  playlist={props.playlist}
                  mediaType="application/pdf"
                  mediaText="Add Pdfs From Contents"
                  mediaTextHeader="Pdf Section"
                  playlistContentListRow={props.playlistContentListRow}
                  openContentDialog={props.openPdfContentDialog} />
            }

            <Card style={styles.card}>
              <CardHeader
                title="Ticker Section"
                actAsExpander={true}
                showExpandableButton={true}
                />
              <CardText expandable={true}>
                <TextField
                  hintText="Enter Ticker Text"
                  type="text"
                  value={props.playlist.ticker_text}
                  onChange={props.changeTickerTexter}
                  name="ticker_text"
                  style={styles.textBox}
                  inputStyle={styles.input}
                  />
              </CardText>
            </Card>
          </Paper>
        </MuiThemeProvider>
      </Column>
    </Row>
  );
}

contentTab.propTypes = {
  playlist: PropTypes.object.isRequired,
  setLayout: PropTypes.object.isRequired,
  playlistContentListRow: PropTypes.object.isRequired,
  openVideoContentDialog: PropTypes.object.isRequired,
  openImageContentDialog: PropTypes.object.isRequired,
  openPdfContentDialog: PropTypes.object.isRequired,
  changeTickerTexter: PropTypes.object.isRequired,
};

export default contentTab;
