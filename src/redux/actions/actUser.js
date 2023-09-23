import * as actions from '../types/constants'
import api from '../../ApiUtils'
import { actGetRoomByUser } from './actRoom'
// Post Checkout
export const actCheckout = (roomData) => {
    return (dispatch) => {
        dispatch(actCheckoutRequest)
        api.post(`/dat-phong/`, roomData)
            .then((result) => {
                console.log(result.data.content);
                dispatch(actCheckoutSuccess(result.data.content))
                alert("Đã thêm vào hồ sơ")
            })
            .catch((error) => {
                dispatch(actCheckoutFail(error.response.data))
            })
    }
}

const actCheckoutRequest = () => ({ type: actions.CHECKOUT_REQUEST })
const actCheckoutSuccess = (data) => ({ type: actions.CHECKOUT_SUCCESS, payload: data })
const actCheckoutFail = (error) => ({ type: actions.CHECKOUT_SUCCESS, payload: error })


export const actGetUserInfo = (id) => {
    return (dispatch) => {
        dispatch(actGetUserInfoRequest());

        api.get(`/users/${id}`)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    console.log(result.data.content);
                    dispatch(actGetUserInfoSuccess(result.data.content));
                    // After fetching user info, you can dispatch an action to get user's rooms here
                    dispatch(actGetRoomByUser(id));
                }
            })
            .catch((error) => {
                const { content } = error.response.data;
                dispatch(actGetUserInfoFail(content));
            });
    };
};

export const actGetUserInfoRequest = () => ({ type: actions.USER_GET_REQUEST });
export const actGetUserInfoSuccess = (data) => ({ type: actions.USER_GET_SUCCESS, payload: data });
export const actGetUserInfoFail = (error) => ({ type: actions.USER_GET_FAIL, payload: error });


// User Delete Room:
export const actDeleteUserRoom = (id) => {
    return (dispatch) => {
        dispatch(actDeleteUserRoomRequest)
        api.delete(`/dat-phong/${id}`)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actDeleteUserRoomSucess(result.data.content))
                }
            })
            .catch((error) => {
                // console.log(error);
                dispatch(actDeleteUserRoomFail(error.response.data))
            })
    }
}

const actDeleteUserRoomRequest = () => ({ type: actions.DELETE_ROOM_USER_REQUEST })
const actDeleteUserRoomSucess = (data) => ({ type: actions.DELETE_ROOM_USER_SUCCESS, payload: data })
const actDeleteUserRoomFail = (error) => ({ type: actions.DELETE_ROOM_USER_FAIL, payload: error })