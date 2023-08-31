import { combineReducers } from "redux"
import cityReducer from "../redux/reducers/cityReducer"
import getRoomByCityReducer from "../redux/reducers/getRoomByCityReducer"

const rootReducer = combineReducers({
    cityReducer,
    getRoomByCityReducer,
})

export default rootReducer