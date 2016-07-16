import React, { PropTypes } from 'react';
import { Row, Column } from 'react-foundation';
import { GridList, GridTile } from 'material-ui/GridList';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

// Import Components
const radioButtonStyle = { display: 'inline-block', width: '150px', marginLeft: '50px' };
const titleBackground = 'linear-gradient(to bottom, rgba(0,0,0,1) 0%,rgba(0,0,0,0.6) 70%,rgba(0,0,0,0.1) 100%)';

function layoutTab(props) {
  return (
    <Row >
      <Column >
        <h4 className="text-center">Select a Layout</h4>
        <GridList
          cellHeight={200}
          cols={6}
          padding={10} >
          <GridTile
            key="/img/layoutA.jpg"
            title="Layout 'A'"
            titlePosition="top"
            titleBackground={titleBackground} >
            <img src="/img/layoutA.jpg" alt="a" />
          </GridTile>
          <GridTile
            key="//placehold.it/20201"
            title="Layout 'B'"
            titlePosition="top"
            titleBackground={titleBackground} >
            <img src="/img/layoutB.jpg" alt="b" />
          </GridTile>
          <GridTile
            key="//placehold.it/200201"
            title="Layout 'C'"
            titlePosition="top"
            titleBackground={titleBackground}>
            <img src="/img/layoutC.jpg" alt="c" />
          </GridTile>
          <GridTile
            key="//placehold.it/200x1"
            title="Layout 'D'"
            titlePosition="top"
            titleBackground={titleBackground} >
            <img src="/img/layoutD.jpg" alt="d" />
          </GridTile>
          <GridTile
            key="//placehold.it/200x2"
            title="Layout 'E'"
            titlePosition="top"
            titleBackground={titleBackground}>
            <img src="/img/layoutE.jpg" alt="a" />
          </GridTile>
          <GridTile
            key="//placehold.it/200x20"
            title="Layout 'F'"
            titlePosition="top"
            titleBackground={titleBackground}>
            <img src="/img/layoutF.jpg" alt="a" />
          </GridTile>
        </GridList>

        <RadioButtonGroup
          name="layout_type"
          onChange={(event, value) => { props.setLayout(value); }}
          defaultSelected={props.playlist.layout_type}
          valueSelected={props.playlist.layout_type} >
          <RadioButton style={radioButtonStyle} value="a" />
          <RadioButton style={radioButtonStyle} value="b" />
          <RadioButton style={radioButtonStyle} value="c" />
          <RadioButton style={radioButtonStyle} value="d" />
          <RadioButton style={radioButtonStyle} value="e" />
          <RadioButton style={radioButtonStyle} value="f" />
        </RadioButtonGroup>
      </Column>
    </Row>
  );
}

layoutTab.propTypes = {
  playlist: PropTypes.object.isRequired,
  setLayout: PropTypes.object.isRequired,
  playlistContentListRow: PropTypes.object.isRequired,
  toggleVideo: PropTypes.object.isRequired,
  toggleImage: PropTypes.object.isRequired,
  togglePdf: PropTypes.object.isRequired,
  changeTickerText: PropTypes.object.isRequired,
  updateLayoutPlaylistState: PropTypes.object.isRequired,
};

export default layoutTab;
