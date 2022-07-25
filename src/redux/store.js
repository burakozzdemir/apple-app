import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import appleApp from './reducers'

const store = configureStore(appleApp, applyMiddleware(thunkMiddleware));
export default store;