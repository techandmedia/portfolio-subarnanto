import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// <!-- Nucleo Icons -->
// <link href="../src/assets/css/nucleo-icons.css" rel="stylesheet" />
// <!-- CSS Files -->
// <link href="../src/assets/css/blk-design-system.css?v=1.0.0" rel="stylesheet" />
// <!-- CSS Just for demo purpose, don't include it in your project -->
// import './assets/css/nucleo-icons.css'
// import './assets/css/blk-design-system.css'

// import './assets/js/core/jquery.min'

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
