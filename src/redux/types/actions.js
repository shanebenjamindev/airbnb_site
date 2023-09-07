import * as actions from './constants'
import api from '../../ApiUtils'

export const actListCity = () => {
    return (dispatch) => {
        dispatch(actlistCityRequest)

        api.get('/vi-tri')
            .then((result) => {
                dispatch(actlistCitySucess(result.data.content))
            })
            .catch((error) => {
                dispatch(actlistCityFail(error))
            })
    }
}

const actlistCityRequest = () => ({ type: actions.LIST_CITY_REQUEST })
const actlistCitySucess = (data) => ({ type: actions.LIST_CITY_SUCCESS, payload: data })
const actlistCityFail = (error) => ({ type: actions.LIST_CITY_FAIL, payload: error })

export const actGetRoomByCity = (id) => {
    return (dispatch) => {
        dispatch(actGetRoomByCityRequest)
        api.get(`/phong-thue/lay-phong-theo-vi-tri?maViTri=${id}`)
            .then((result) => {
                dispatch(actGetRoomByCitySucess(result.data.content))
            })
            .catch((error) => {
                // console.log(error);
                dispatch(actGetRoomByCityFail(error))
            })
    }
}

const actGetRoomByCityRequest = () => ({ type: actions.GET_ROOM_BY_CITY_REQUEST })
const actGetRoomByCitySucess = (data) => ({ type: actions.GET_ROOM_BY_CITY_SUCCESS, payload: data })
const actGetRoomByCityFail = (error) => ({ type: actions.GET_ROOM_BY_CITY_FAIL, payload: error })

export const actRoomDetail = (id) => {
    return (dispatch) => {
        dispatch(actRoomDetailRequest)
        api.get(`/phong-thue/${id}`)
            .then((result) => {
                dispatch(actRoomDetialSucess(result.data.content))
            })
            .catch((error) => {
                // console.log(error);
                dispatch(actRoomDetialFail(error))
            })
    }
}

const actRoomDetailRequest = () => ({ type: actions.ROOM_DETAIL_REQUEST })
const actRoomDetialSucess = (data) => ({ type: actions.ROOM_DETAIL_SUCCESS, payload: data })
const actRoomDetialFail = (error) => ({ type: actions.ROOM_DETAIL_FAIL, payload: error })
