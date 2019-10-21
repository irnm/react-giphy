import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';
import App from "./components/app.jsx";

const root = document.getElementById('root'); // get the root id from index.html file
if (root) {
  ReactDOM.render(<App />, root);
}