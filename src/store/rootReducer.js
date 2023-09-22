import { combineReducers } from "redux"
import cityReducer from "../redux/reducers/cityReducer"
import authReducer from "../redux/reducers/authReducer"
import commentReducer from "../redux/reducers/commentReducer"
import checkoutReducer from "../redux/reducers/checkoutReducer"
import userReducer from "../redux/reducers/userReducer"
import roomReducer from "../redux/reducers/roomReducer"

const rootReducer = combineReducers({
    cityReducer,
    authReducer,
    commentReducer,
    checkoutReducer,
    roomReducer,
    userReducer
})

export default rootReducer