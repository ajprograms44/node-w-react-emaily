//Redux side of our app
import 'materialize-css/dist/css/materialize.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reduxLogger from 'redux-logger'
import App from './components/App'
import reducers from './reducers' 
//Because the index.js of every folder is the one to be automatically imported

const store = createStore(reducers, {}, applyMiddleware(reduxThunk, reduxLogger));
//Create a new instance of our redux store
//First Argument: Our reducers in our app
//Second Argument: The initial state of the app, most relevant with server side rendering
//Third Argument: applyMiddleware function to use middleware with redux (like Redux Thunk)


ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  
  document.querySelector('#root')
);
//Passing in store as the store prop
//Placing the Provider tag around the App component allows the App to have access to the global redux store

