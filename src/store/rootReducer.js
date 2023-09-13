import { combineReducers } from "redux"
import cityReducer from "../redux/reducers/cityReducer"
import getRoomByCityReducer from "../redux/reducers/getRoomByCityReducer"
import RoomDetailReducer from "../redux/reducers/roomDetailReducer"
import signupReducer from "../redux/reducers/signupReducer"
import loginReducer from "../redux/reducers/loginReducer"

const rootReducer = combineReducers({
    cityReducer,
    getRoomByCityReducer,
    RoomDetailReducer,
    signupReducer,
    loginReducer
})

export default rootReducer