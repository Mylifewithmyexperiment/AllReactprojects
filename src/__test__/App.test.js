
// react-testing-library renders your components to document.body,
// this will ensure they're removed after each test.
// import 'react-testing-library/cleanup-after-each';
// this adds jest-dom's custom assertions
// import 'jest-dom/extend-expect';

import React from 'react';
// import ReactDOM from 'react-dom';
import App from '../../src/App';
import {render, fireEvent ,cleanup} from 'react-testing-library'


// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });

// it('renders welcome message', () => {
//   const { getByText } = render(<App />);
//   expect(getByText('Welcome to React')).toBeInTheDocument();
// });

import {shallow} from 'enzyme'

it('renders without crashing', () => {
  shallow(<App />)
})