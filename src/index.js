import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// setup fake backend

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
