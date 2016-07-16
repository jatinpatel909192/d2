import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import { Row, Column } from 'react-foundation';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Import Components
import PlaylistCreateWidgetForm from './PlaylistCreateWidgetForm';

const styles = {
  main:
  { width: '100%',
  paddingLeft: '15px' },
  input: {
    boxShadow: 'none',
  },
  paper: { padding: '10px' },
  button: {
    width: '100%',
    height: '48px',
    verticalAlign: 'middle',
  },
};

function PlaylistCreateWidget(props) {
  return (
    <Row>
      <Column large={8} offsetOnLarge={2}>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <Paper styles={styles.paper} zDepth={1}>
            <Row>
              <PlaylistCreateWidgetForm onSave={props.onSave} />
            </Row>
          </Paper>
        </MuiThemeProvider>
      </Column>
    </Row>
  );
}

PlaylistCreateWidget.propTypes = {
  onSave: PropTypes.func.isRequired,
};

export default PlaylistCreateWidget;
