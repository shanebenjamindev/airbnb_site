import * as actions from '../types/constants'
import api from 'ApiUtils'
/**
 *  Auth Reducer  
*/
//  Post
export const actAuth = (userLogin, navigate) => {
    return (dispatch) => {
        dispatch(actAuthRequest)

        api.post('/auth/signin', userLogin)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    const { user, token } = result.data.content;
                    const userData = { user, token }

                    dispatch(actAuthSuccess(userData))
                    navigate("/auth", { replace: true })
                }
            })
            .catch((error) => {
                const { content } = error.response.data
                dispatch(actAuthFail(content))
            })
    }
}

const actAuthRequest = () => ({ type: actions.AUTH_REQUEST })
const actAuthSuccess = (data) => ({ type: actions.AUTH_SUCCESS, payload: data })
const actAuthFail = (error) => ({ type: actions.AUTH_FAIL, payload: error })

export const actRegister = (userRegister, navigate) => {
    return (dispatch) => {
        dispatch(actRegisterRequest)
        api.post(`/auth/signup`, userRegister)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actRegisterSuccess(result.data.content))
                    alert("Đăng ký thành công, trở về trang chủ!")
                    navigate("/", { replace: true })
                }
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
                    const { user, token } = result.data.content;
                    const userData = { user, token }
                    dispatch(actLoginSuccess(userData))
                    navigate('/')
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
