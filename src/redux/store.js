import {applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import InnovanceApp from './reducers/index'
import { configureStore } from '@reduxjs/toolkit';

const store =  configureStore(InnovanceApp,applyMiddleware(thunkMiddleware));
export default store;