import React, { PropTypes } from 'react';
import { Row, Column } from 'react-foundation';

// Import components
import ContentsGridCard from './ContentsGridCard';

function ContentsGrid(props) {
  return (
    <Row upOnSmall={1} upOnMedium={2} upOnLarge={4}>
        {props.contents.map(content =>
          <Column isColumn key={content.id}>
            <ContentsGridCard
              key={content.id}
              removeContent={props.removeContent}
              openContentTitleDialog={props.openContentTitleDialog}
              content={content} />
          </Column>
        )}
    </Row>
  );
}

ContentsGrid.propTypes = {
  contents: PropTypes.object.isRequired,
  removeContent: PropTypes.func.isRequired,
  openContentTitleDialog: PropTypes.func.isRequired,
};

export default ContentsGrid;
