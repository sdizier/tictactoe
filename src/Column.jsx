import React from 'react';
import PropTypes from 'prop-types';

const Column = ({ id, children, row, col }) => {
  const colValue = children.length > 0 ? children : ' ';
  const msg = `${row}-${col}`;
  return (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      onClick={() => alert(msg)}
      key={id}
      role="button"
      tabIndex={id}
      className="col marking"
    >
      {colValue}
    </div>
);
};


Column.propTypes = {
  id: PropTypes.number.isRequired,
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default Column;
