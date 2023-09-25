import * as actions from '../types/constants'
import api from '../../ApiUtils'
/**
 * Room Reducer 
 */
// Home Get List Room:
export const actHomeListRoom = () => {
    return (dispatch) => {
        dispatch(actHomeListRoomRequest());
        api
            .get(`/phong-thue/phan-trang-tim-kiem?pageIndex=1&pageSize=16`)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actHomeListRoomSuccess(result.data.content));
                }
            })
            .catch((error) => {
                const { content } = error.response.data
                dispatch(actHomeListRoomFail(content))
            });
    };
}

const actHomeListRoomRequest = () => ({ type: actions.HOMELIST_ROOM_REQUEST })
const actHomeListRoomSuccess = (data) => ({ type: actions.HOMELIST_ROOM_SUCCESS, payload: data })
const actHomeListRoomFail = (error) => ({ type: actions.HOMELIST_ROOM_FAIL, payload: error })

export const actGetRoomByCity = (id) => {
    return (dispatch) => {
        dispatch(actGetListRoomByIdRequest)
        api.get(`/phong-thue/lay-phong-theo-vi-tri?maViTri=${id}`)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actGetListRoomByIdSuccess(result.data.content))
                }
            })
            .catch((error) => {
                dispatch(actGetListRoomByIdFail(error.response.data))
            })
    }
}

export const actGetRoomByUser = (id) => {
    return (dispatch) => {
        console.log(id);
        dispatch(actGetListRoomByIdRequest)

        api.get(`/dat-phong/lay-theo-nguoi-dung/${id}`)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actGetListRoomByIdSuccess(result.data.content))
                }
            })
            .catch((error) => {
                dispatch(actGetListRoomByIdFail(error.response.data))
            })
    }
}

const actGetListRoomByIdRequest = () => ({ type: actions.GET_ROOM_BY_ID_REQUEST })
const actGetListRoomByIdSuccess = (data) => ({ type: actions.GET_ROOM_BY_ID_SUCCESS, payload: data })
const actGetListRoomByIdFail = (error) => ({ type: actions.GET_ROOM_BY_ID_FAIL, payload: error })

export const actRoomDetail = (id) => {
    return (dispatch) => {
        dispatch(actRoomDetailRequest)
        api.get(`phong-thue/${id}`)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actRoomDetailSucess(result.data.content))
                }
            })
            .catch((error) => {
                dispatch(actRoomDetailFail(error.response.data))
            })
    }
}

const actRoomDetailRequest = () => ({ type: actions.ROOM_DETAIL_REQUEST })
const actRoomDetailSucess = (data) => ({ type: actions.ROOM_DETAIL_SUCCESS, payload: data })
const actRoomDetailFail = (error) => ({ type: actions.ROOM_DETAIL_FAIL, payload: error })

// Post Room 
export const actAddRoom = (roomData) => {
    return (dispatch) => {
        dispatch(actAddRoomRequest)
        api.post(`/phong-thue/`, roomData)
            .then((result) => {
                console.log(result.data.content);
                dispatch(actAddRoomSuccess(result.data.content))
                // alert("Đã thêm vào hồ sơ")
            })
            .catch((error) => {
                dispatch(actAddRoomFail(error.response.data))
            })
    }
}

const actAddRoomRequest = () => ({ type: actions.ADD_ROOM_REQUEST })
const actAddRoomSuccess = (data) => ({ type: actions.ADD_ROOM_SUCCESS, payload: data })
const actAddRoomFail = (error) => ({ type: actions.ADD_ROOM_SUCCESS, payload: error })

// Delete Room
export const actDeleteRoom = (id) => {
    return (dispatch) => {
        dispatch(actDeleteRoomRequest)
        api.delete(`/phong-thue/${id}`)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actDeleteRoomSuccess(result.data.content))
                }
            })
            .catch((error) => {
                dispatch(actDeleteRoomFail(error.response.data))
            })
    }
}

const actDeleteRoomRequest = () => ({ type: actions.DELETE_ROOM_USER_REQUEST })
const actDeleteRoomSuccess = (data) => ({ type: actions.DELETE_ROOM_USER_SUCCESS, payload: data })
const actDeleteRoomFail = (error) => ({ type: actions.DELETE_ROOM_USER_FAIL, payload: error })