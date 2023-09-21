import { combineReducers } from "redux"
import cityReducer from "../redux/reducers/cityReducer"
import getRoomByCityReducer from "../redux/reducers/getRoomByCityReducer"
import RoomDetailReducer from "../redux/reducers/roomDetailReducer"
import homeListRoomReducer from "../redux/reducers/homeListRoomReducer"
import authReducer from "../redux/reducers/authReducer"
import commentReducer from "../redux/reducers/commentReducer"

const rootReducer = combineReducers({
    cityReducer,
    getRoomByCityReducer,
    RoomDetailReducer,
    homeListRoomReducer,
    authReducer,
    commentReducer,
})

export default rootReducer