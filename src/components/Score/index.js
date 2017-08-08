import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

export default function Score({score}) {
  const substantive = score === 0 || score > 1 ? 'apples' : 'apple';

  return <div className="Score">Score: {score} {substantive}</div>
};

Score.propTypes = {
  score: PropTypes.number
};