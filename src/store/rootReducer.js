import { combineReducers } from "redux"
import cityReducer from "../redux/reducers/cityReducer"
import getRoomByCityReducer from "../redux/reducers/getRoomByCityReducer"
import RoomDetailReducer from "../redux/reducers/roomDetailReducer"
import signupReducer from "../redux/reducers/signupReducer"
import loginReducer from "../redux/reducers/loginReducer"
import homeListRoomReducer from "../redux/reducers/homeListRoomReducer"
import authReducer from "../redux/reducers/authReducer"
import commentReducer from "../redux/reducers/commentReducer"
import commentPostReducer from "../redux/reducers/commentPostReducer"

const rootReducer = combineReducers({
    cityReducer,
    getRoomByCityReducer,
    RoomDetailReducer,
    signupReducer,
    loginReducer,
    homeListRoomReducer,
    authReducer,
    commentReducer,
    commentPostReducer
})

export default rootReducer