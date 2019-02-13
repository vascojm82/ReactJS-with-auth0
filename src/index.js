import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Auth from './Auth';

let auth = new Auth();

let state = {};

window.setState = (changes) => {
  state = Object.assign({}, state, changes);
  ReactDOM.render(<App {...state} />, document.getElementById('root'));
}

/* eslint no-restricted-globals: 0 */
console.log("auth.getProfile(): ", auth.getProfile());
let username = auth.getProfile().given_name || "User";

let initialState = {
  name: username,
  location: window.location.pathname.replace(/^\/?|\/$/g, ""),
  auth: auth
};

window.setState(initialState);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
