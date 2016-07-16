import React, { PropTypes } from 'react';
import { Row, Column } from 'react-foundation';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import { RaisedButton, FlatButton } from 'material-ui';

// Import components
import EditContentDialogForm from './EditContentDialogForm';
import DisplayContent from './DisplayContent';

function EditContentDialog(props) {
  return (
    <Row>
      <Column large={8} offsetOnLarge={2}>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <Dialog
            title="Enter Content Title"
            actions={[<RaisedButton
              key="save"
              label="Save"
              secondary={true}
              onTouchTap={this.saveContentDetails}
              />, <FlatButton
                label="Cancel"
                key="cancel"
                primary={true}
                onTouchTap={this.props.closeContentTitleDialog}
                />]}
            modal={true}
            open={this.props.openContentTitleDialogOpen}
          >
            <Row>
              <Column large={6}>
                <DisplayContent content={props.content} />
              </Column>
              <Column large={6}>
                <EditContentDialogForm updatePlayer={this.updatePlayer} />
              </Column>
            </Row>
          </Dialog>
        </MuiThemeProvider>
      </Column>
    </Row>
  );
}

EditContentDialog.propTypes = {
  content: PropTypes.object.isRequired,
};

export default EditContentDialog;
