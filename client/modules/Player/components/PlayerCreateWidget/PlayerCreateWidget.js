import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import PlayerCreateWidgetForm from './PlayerCreateWidgetForm';

function PlayerCreateWidget(props) {
  return (
    <Dialog
        title="Enter details of player"
        actions={[<FlatButton
          label="Submit"
          key="sub"
          primary={true}
          onTouchTap={props.addPlayer}
          />,
          <FlatButton
            label="Cancel"
            key="can"
            secondary={true}
            onTouchTap={props.showAddPlayer}
            />]
        }
        modal={false}
        open={props.showAddPlayer}
      >
      <PlayerCreateWidgetForm addPlayer={props.addPlayer} />
    </Dialog>
  );
}

PlayerCreateWidget.propTypes = {
  showAddPlayer: PropTypes.bool.isRequired,
  addPlayer: PropTypes.func.isRequired,
};

export default PlayerCreateWidget;
