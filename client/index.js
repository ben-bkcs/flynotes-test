import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill'; // allows us to use modern Js features such as async/await
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));
