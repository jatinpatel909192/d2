import React, { PropTypes } from 'react';
import Dropzone from 'react-dropzone';
import { Row, Column } from 'react-foundation';
import LinearProgress from 'material-ui/LinearProgress';
import Paper from 'material-ui/Paper';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function ContentCreateWidget(props) {
  return (
    <Row>
      <Column large={6} offsetOnLarge={3}>
        <Dropzone
          style={{ width: '100%',
            height: '200px',
            border: '2px dashed rgb(102, 102, 102)',
            borderRadius: '5px' }}
          onDrop={props.onDropFiles} >
          <div className="filedrop">Drop Files Here, or click here to upload</div>
          {
            this.state.uploading &&
              <MuiThemeProvider muiTheme={getMuiTheme()}>
                <Paper>
                  <h5 className="text-center">Uploading. Please wait</h5>
                  <LinearProgress mode="indeterminate" />
                </Paper>
              </MuiThemeProvider>
          }
        </Dropzone>
      </Column>
    </Row>
  );
}

ContentCreateWidget.propTypes = {
  onDropFiles: PropTypes.func.isRequired,
};

export default ContentCreateWidget;
