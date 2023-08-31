import { combineReducers } from "redux"
import cityReducer from "../redux/reducers/cityReducer"
import getRoomByCityReducer from "../redux/reducers/getRoomByCityReducer"
import RoomDetailReducer from "../redux/reducers/roomDetailReducer"

const rootReducer = combineReducers({
    cityReducer,
    getRoomByCityReducer,
    RoomDetailReducer,
})

export default rootReducer