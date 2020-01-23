import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UniqueKey from 'uuid/v1';

const Column = ({
  row, col, handleMove,
}) => {
  const [content, setMove] = useState(' ');

  function move() {
    const game = handleMove({ row, col });
    setMove(game.getPreviousPlayer());
  }

  return (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      onClick={() => move()}
      key={UniqueKey()}
      role="button"
      tabIndex={row}
      className="col marking"
    >
      {content}
    </div>
  );
};


Column.propTypes = {
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  handleMove: PropTypes.func.isRequired,
};

export default Column;
