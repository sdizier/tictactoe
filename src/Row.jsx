import React from 'react';
import PropTypes from 'prop-types';

import Column from './Column';

const Row = (props) => {
  const { key, cols, row } = props;
  const columns = cols.map((current, i) => {
    const columnKey = `${key}-${i}`;
    return (<Column row={row} col={i} id={columnKey}>{current}</Column>);
  });
  return (
    <div key={key} className="row">
      {columns}
    </div>
  );
};


Row.propTypes = {
  key: PropTypes.number.isRequired,
  cols: PropTypes.node.isRequired,
  row: PropTypes.number.isRequired,
};

export default Row;
