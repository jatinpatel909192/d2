import React, { PropTypes } from 'react';

function DisplayContent(props) {
  return (
    <div>
    {
      (props.content.media_content_type === 'image/jpeg') &&
        <img src={props.content.thumbnail} alt="Content" styles={{ width: '100%', maxHeight: '200px' }} />
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
  );
}

DisplayContent.propTypes = {
  onDropFiles: PropTypes.func.isRequired,
  content: PropTypes.object.isrequired,
};

export default DisplayContent;
