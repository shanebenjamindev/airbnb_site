import * as actions from '../types/constants'
import api from '../../ApiUtils'
/**
 * City Reducer
  */
//  get city
export const actListCity = () => {
    return (dispatch) => {
        dispatch(actlistCityRequest)

        api.get('/vi-tri')
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actlistCitySucess(result.data.content))
                }
            })
            .catch((error) => {
                dispatch(actlistCityFail(error.response.data))
            })
    }
}

const actlistCityRequest = () => ({ type: actions.LIST_CITY_REQUEST })
const actlistCitySucess = (data) => ({ type: actions.LIST_CITY_SUCCESS, payload: data })
const actlistCityFail = (error) => ({ type: actions.LIST_CITY_FAIL, payload: error })

// add city
export const actAddCity = (roomData) => {
    return (dispatch) => {
        dispatch(actAddCityRequest)
        api.post(`/vi-tri/`, roomData)
            .then((result) => {
                dispatch(actAddCitySuccess(result.data.content))
                alert("Đã thêm vào vị trí")
                dispatch(actListCity())
            })
            .catch((error) => {
                dispatch(actAddCityFail(error.response.data))
            })
    }
}

const actAddCityRequest = () => ({ type: actions.ADD_CITY_REQUEST })
const actAddCitySuccess = (data) => ({ type: actions.ADD_CITY_SUCCESS, payload: data })
const actAddCityFail = (error) => ({ type: actions.ADD_CITY_SUCCESS, payload: error })

// edit city

// add city
export const actEditCity = (roomData) => {
    return (dispatch) => {
        dispatch(actEditCityRequest)
        api.put(`/vi-tri/`, roomData)
            .then((result) => {
                console.log(result.data.content);
                dispatch(actEditCitySuccess(result.data.content))
                // alert("Đã thêm vào hồ sơ")
            })
            .catch((error) => {
                dispatch(actEditCityFail(error.response.data))
            })
    }
}

const actEditCityRequest = () => ({ type: actions.EDIT_CITY_REQUEST })
const actEditCitySuccess = (data) => ({ type: actions.EDIT_CITY_SUCCESS, payload: data })
const actEditCityFail = (error) => ({ type: actions.EDIT_CITY_SUCCESS, payload: error })


// delete city
export const actDeleteCity = (cityId) => {
    return (dispatch) => {
        dispatch(actDeleteCityRequest)

        api.delete(`/vi-tri/${cityId}`)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actDeleteCitySucess(result.data.content))
                }
            })
            .catch((error) => {
                dispatch(actDeleteCityFail(error.response.data))
            })
    }
}

const actDeleteCityRequest = () => ({ type: actions.DELETE_CITY_REQUEST })
const actDeleteCitySucess = (data) => ({ type: actions.DELETE_CITY_SUCCESS, payload: data })
const actDeleteCityFail = (error) => ({ type: actions.DELETE_CITY_FAIL, payload: error })
