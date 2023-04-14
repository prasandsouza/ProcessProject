import { combineReducers } from "redux";
import { processReducer } from './processReducer'
const reducer = combineReducers({
    allProcess:processReducer
})

export default reducer