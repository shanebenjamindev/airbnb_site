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



export const actCheckout = (room) => {
    return (dispatch) => {
        console.log(room);
    }
}

export const actRegister = (userRegister) => {
    return (dispatch) => {

        dispatch(actRegisterRequest())

        api.post(`/auth/signup`, userRegister)
            .then((result) => {
                dispatch(actRegisterSuccess(result.data.content))
            })
            .catch((error) => {
                dispatch(actRegisterFail(error.response.data))
            })

    }
}

const actRegisterRequest = () => ({ type: actions.SIGNUP_REQUEST })
const actRegisterSuccess = (data) => ({ type: actions.SIGNUP_SUCCESS, payload: data })
const actRegisterFail = (error) => ({ type: actions.SIGNUP_FAIL, payload: error })

export const actLogin = (userLogin, navigate) => {
    return (dispatch) => {

        dispatch(actLoginRequest)

        api.post('/auth/signin', userLogin)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    const { user } = result.data.content;
                    dispatch(actLoginSuccess(user))
                    if (window.confirm("Đăng nhập thành công, về trang chủ?")) {
                        navigate("/", { replace: true })
                    }
                }
            })
            .catch((error) => {
                const { content } = error.response.data
                dispatch(actLoginFail(content))
            })
    }
}


const actLoginRequest = () => ({ type: actions.LOGIN_REQUEST })
const actLoginSuccess = (data) => ({ type: actions.LOGIN_SUCCESS, payload: data })
const actLoginFail = (error) => ({ type: actions.LOGIN_FAIL, payload: error })



export const actHomeListRoom = () => {
    return (dispatch) => {
      dispatch(actHomeListRoomRequest());
      api
        .get(`/phong-thue/phan-trang-tim-kiem?pageIndex=1&pageSize=16`)
        .then((result) => {
          dispatch(actHomeListRoomSuccess(result.data.content));
        })
        .catch((error) => {
          dispatch(actHomeListRoomFail(error));
        });
    };
  }
  

const actHomeListRoomRequest = () => ({ type: actions.HOMELIST_ROOM_REQUEST })
const actHomeListRoomSuccess = (data) => ({ type: actions.HOMELIST_ROOM_SUCCESS, payload: data })
const actHomeListRoomFail = (error) => ({ type: actions.HOMELIST_ROOM_FAIL, payload: error })


