import { combineReducers } from 'redux';
// --------------------------------------------------
import ValueOne from './reducer_one';
// ==================================================
var rootReducer = combineReducers({
    value1: ValueOne,
    value2: 2000,
    value3: 3000
});
// ==================================================
export default rootReducer;



