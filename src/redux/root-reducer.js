// Single source of truth?
// The state of the entire application

import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

export default combineReducers({
    user: userReducer,
});