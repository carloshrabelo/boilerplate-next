/* eslint-disable func-style */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import users from './users';

export const initializeStore = (initialState = {}) =>
	createStore(
		combineReducers({
			users
		}),
		initialState,
		composeWithDevTools(applyMiddleware(thunk))
	);
