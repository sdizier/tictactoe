import React from 'react';
import PropTypes from 'prop-types';
import UniqueKey from 'uuid/v1';

import Column from './Column';

const Row = (props) => {
  const {
    cols, row, handleMove,
  } = props;

  const columns = cols.map((current, i) => (
    <Column
      key={UniqueKey()}
      handleMove={handleMove}
      row={row}
      col={i}
    >
      {current}
    </Column>
  ));
  return (
    <div className="row">
      {columns}
    </div>
  );
};


Row.propTypes = {
  cols: PropTypes.node.isRequired,
  row: PropTypes.number.isRequired,
  handleMove: PropTypes.func.isRequired,
};

export default Row;
