import * as actions from './constants'
import api from '../../ApiUtils'

export const listCityAct = () => {
    return (dispatch) => {
        dispatch(actlistCityRequest)

        api.get('/vi-tri')
            .then((result) => {
                dispatch(actlistCitySucess(result.data.content))
            })
            .catch((error) => {
                dispatch(actlistCityError(error))
            })
    }
}

const actlistCityRequest = () => ({ type: actions.LIST_CITY_REQUEST })
const actlistCitySucess = (data) => ({ type: actions.LIST_CITY_SUCCESS, payload: data })
const actlistCityError = (error) => ({ type: actions.LIST_CITY_FAIL, payload: error })