import { combineReducers } from 'redux';
import authReducer from './auth-reducer';
import errorReducer from './error-reducer';
import profileReducer from './profileReducer';


export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    profile: profileReducer
})