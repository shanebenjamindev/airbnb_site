import { combineReducers } from "redux"
import cityReducer from "../redux/reducers/cityReducer"
import listRoomByIdReducer from "../redux/reducers/listRoomByIdReducer"
import RoomDetailReducer from "../redux/reducers/roomDetailReducer"
import homeListRoomReducer from "../redux/reducers/homeListRoomReducer"
import authReducer from "../redux/reducers/authReducer"
import commentReducer from "../redux/reducers/commentReducer"

const rootReducer = combineReducers({
    cityReducer,
    listRoomByIdReducer,
    RoomDetailReducer,
    homeListRoomReducer,
    authReducer,
    commentReducer,
})

export default rootReducer