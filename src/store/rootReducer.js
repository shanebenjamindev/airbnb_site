import { combineReducers } from "redux"
import cityReducer from "../redux/reducers/cityReducer"

const rootReducer = combineReducers({
    cityReducer,
})

export default rootReducer