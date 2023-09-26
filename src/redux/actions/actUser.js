import * as actions from '../types/constants'
import api from '../../ApiUtils'
import { actGetRoomByUser } from './actRoom'
// Post Checkout
export const actCheckout = (roomData) => {
    return (dispatch) => {
        dispatch(actCheckoutRequest)
        api.post(`/dat-phong/`, roomData)
            .then((result) => {
                alert(result.data.message)
            })
            .catch((error) => {
                dispatch(actCheckoutFail(error.response.data))
            })
    }
}

const actCheckoutRequest = () => ({ type: actions.CHECKOUT_REQUEST })
const actCheckoutFail = (error) => ({ type: actions.CHECKOUT_SUCCESS, payload: error })

// Get list user
export const actGetListUser = () => {
    return (dispatch) => {
        dispatch(actGetListUserRequest());

        api.get(`/users/`)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actGetListUserSuccess(result.data.content));
                }
            })
            .catch((error) => {
                const { content } = error.response.data;
                dispatch(actGetListUserFail(content));
            });
    };
};

export const actGetListUserRequest = () => ({ type: actions.USER_GET_REQUEST });
export const actGetListUserSuccess = (data) => ({ type: actions.USER_GET_SUCCESS, payload: data });
export const actGetListUserFail = (error) => ({ type: actions.USER_GET_FAIL, payload: error });


// Get user
export const actGetUserInfo = (id) => {
    return (dispatch) => {
        dispatch(actGetUserInfoRequest());

        api.get(`/users/${id}`)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actGetUserInfoSuccess(result.data.content));
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

// User Edit: 
export const actEditUserInfo = (id, newProfile) => {
    return (dispatch) => {
        console.log(newProfile);
        dispatch(actEditUserInfoRequest);
        api.put(`/users/${id}`, newProfile)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    console.log(result.data);
                    alert("done")
                }
            })
            .catch((error) => {
                // console.log(error.response.data);
                const { content } = error.response.data;
                dispatch(actEditUserInfoFail(content));
            });
    };
};

export const actEditUserInfoRequest = () => ({ type: actions.USER_EDIT_REQUEST });
export const actEditUserInfoSuccess = (data) => ({ type: actions.USER_EDIT_SUCCESS, payload: data });
export const actEditUserInfoFail = (error) => ({ type: actions.USER_EDIT_FAIL, payload: error });


// User Delete Room:
export const actDeleteUserRoom = (id) => {
    return (dispatch) => {
        dispatch(actDeleteUserRoomRequest)
        api.delete(`/dat-phong/${id}`)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    alert(result.data.message);
                }
            })
            .catch((error) => {
                dispatch(actDeleteUserRoomFail(error.response.data))
            })
    }
}

const actDeleteUserRoomRequest = () => ({ type: actions.DELETE_ROOM_USER_REQUEST })
const actDeleteUserRoomFail = (error) => ({ type: actions.DELETE_ROOM_USER_FAIL, payload: error })