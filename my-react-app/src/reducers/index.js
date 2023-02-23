import { combineReducers } from "redux";
import username from './userReducer';

export default combineReducers({
    user: username
});