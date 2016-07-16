import React, { PropTypes } from 'react';
import { Card, CardActions, CardMedia, CardTitle } from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

function ManagePlaylistTabs(props) {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Card style={{ marginBottom: '10px' }}>
        <CardMedia>
          <div>
            {
              (props.content.media_content_type === 'image/jpeg') &&
                <img src={props.content.thumbnail} alt="content" styles={{ width: '100%', maxHeight: '150px' }} />
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
                            menu="false" width="100%">
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
                    <tr className="tar">
                      <td className="tar">
                        <object className="tar">
                          <embed src={props.content.thumbnail} type="application/pdf" width="100%"></embed>
                        </object>
                      </td>
                    </tr>
                  </table>
                </div>
            }
          </div>
        </CardMedia>
        <CardTitle
          style={{ paddingBottom: '0px' }}
          titleStyle={{ fontSize: '14px', lineHeight: '20px' }}
          title={props.content.title}
          subtitle={props.content.media_file_name} />
        <CardActions>
          <Checkbox
            label="Select"
            onCheck={() => props.addedContent(props.content.id)}
          />
        </CardActions>
      </Card>
    </MuiThemeProvider>
  );
}

ManagePlaylistTabs.propTypes = {
  playlist: PropTypes.object.isRequired,
  players: PropTypes.object.isRequired,
  playlistContentListRow: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired,
  toggleImage: PropTypes.object.isRequired,
  togglePdf: PropTypes.object.isRequired,
  changeTickerText: PropTypes.object.isRequired,
  updateLayoutPlaylistState: PropTypes.object.isRequired,
};

export default ManagePlaylistTabs;
