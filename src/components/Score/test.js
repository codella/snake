import React from 'react';
import ReactDOM from 'react-dom';

import Score from './';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Score score={42} />, div);
});
