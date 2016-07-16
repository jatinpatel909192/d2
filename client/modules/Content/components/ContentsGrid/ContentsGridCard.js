import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Card, CardActions, CardMedia, CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

function ContentsGridCard(props) {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Card style={{ marginBottom: '10px' }}>
        <CardMedia mediaStyle={{ width: '100%', maxHeight: '200px', overflow: 'hidden' }}>
          <div>
            {
              (props.content.media_content_type === 'image/jpeg') &&
                <img src={props.content.thumbnail} alt="content" styles={{ width: '100%', maxHeight: '200px' }} />
            }
            {
              (props.content.media_content_type === 'video/mp4') &&
                <div>
                  <table className="ta">
                    <tr className="tar">
                      <td className="tar">
                        <object className="tar">
                          <embed
                            src={props.content.thumbnail}
                            type="video/mp4"
                            autostart="false"
                            play="false"
                            flashvars="autoplay=false&play=false"
                            menu="false"
                            width="100%">
                          </embed>
                        </object>
                      </td>
                    </tr>
                  </table>
                </div>
            }
            {
              (props.content.media_content_type === 'application/pdf') &&
                <div>
                  <table className="ta">
                    <tbody>
                      <tr className="tar">
                        <td className="tar">
                          <object className="tar">
                            <embed src={props.content.thumbnail} type="application/pdf" width="100%"></embed>
                          </object>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
            }
          </div>
        </CardMedia>
        <CardTitle
          style={{ paddingBottom: '0px' }}
          titleStyle={{ fontSize: '14px', lineHeight: '20px' }}
          title={props.content.title}
          subtitle={props.content.mediaFileName} />
        <CardActions>
          <RaisedButton onTouchTap={props.openDialog} label="Edit title" primary={true} />
          <FlatButton label="Delete" onTouchTap={props.removeContent} secondary={true} />
        </CardActions>
      </Card>
    </MuiThemeProvider>
  );
}

ContentsGridCard.propTypes = {
  content: PropTypes.object.isRequired,
  removeContent: PropTypes.func.isRequired,
  openDialog: PropTypes.func.isRequired,
};

export default ContentsGridCard;
