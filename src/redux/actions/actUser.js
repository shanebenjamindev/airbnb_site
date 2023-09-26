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
                    dispatch(actEditUserInfoSuccess(result.data.content))
                    alert("done")
                }
            })
            .catch((error) => {
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

// User Upload Avatar:
export const actUploadAvatar = (avatar) => {
    return (dispatch) => {
        dispatch(actUploadAvatarInfoRequest);
        api.put(`/users/upload-avatar`, avatar)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actUploadAvatarInfoSuccess(result.data.content))
                    alert("done")
                }
            })
            .catch((error) => {
                const { content } = error.response.data;
                dispatch(actUploadAvatarInfoFail(content));
            });
    };
}
export const actUploadAvatarInfoRequest = () => ({ type: actions.USER_UPLOAD_AVATAR_REQUEST });
export const actUploadAvatarInfoSuccess = (data) => ({ type: actions.USER_UPLOAD_AVATAR_SUCCESS, payload: data });
export const actUploadAvatarInfoFail = (error) => ({ type: actions.USER_UPLOAD_AVATAR_FAIL, payload: error });
