import * as actions from './constants'
import api from '../../ApiUtils'

// Post Auth
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
                    alert("Đăng nhập thành công, về trang chủ?")
                    navigate("/", { replace: true })
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



// Get Locations
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

// Get Room
export const actGetRoomByCity = (id) => {
    return (dispatch) => {
        dispatch(actGetRoomByCityRequest)
        api.get(`/phong-thue/lay-phong-theo-vi-tri?maViTri=${id}`)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actGetRoomByCitySucess(result.data.content))
                }
            })
            .catch((error) => {
                // console.log(error);
                dispatch(actGetRoomByCityFail(error.response.data))
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
                if (result.data.statusCode === 200) {
                    dispatch(actRoomDetialSucess(result.data.content))
                }
            })
            .catch((error) => {
                // console.log(error);
                dispatch(actRoomDetialFail(error.response.data))
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

// Home Get :
export const actHomeListRoom = () => {
    return (dispatch) => {
        dispatch(actHomeListRoomRequest);
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





// Get Comments
export const actGetRoomComment = (roomId) => {
    return (dispatch) => {
        dispatch(actCommentsRequest)

        api.get(`/binh-luan/lay-binh-luan-theo-phong/${roomId}`)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    // console.log(result.data);
                    dispatch(actCommentsSuccess(result.data.content))
                }
            })
            .catch((error) => {
                const { content } = error.response.data
                dispatch(actCommentsFail(content))
            })
    }
}

export const actListComment = () => {
    return (dispatch) => {
        dispatch(actCommentsRequest)

        api.get('/binh-luan')
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actCommentsSuccess(result.data.content))
                }
            })
            .catch((error) => {
                const { content } = error.response.data
                dispatch(actCommentsFail(content))
            })
    }
}

const actCommentsRequest = () => ({ type: actions.COMMENTS_REQUEST })
const actCommentsSuccess = (data) => ({ type: actions.COMMENTS_SUCCESS, payload: data })
const actCommentsFail = (error) => ({ type: actions.COMMENTS_FAIL, payload: error })


// Post Comment
export const actRoomComment = (newComment, navigate) => {
    return (dispatch) => {
        dispatch(actCommentPostRequest)

        api.post(`/binh-luan/`, newComment)
            .then((result) => {
                dispatch(actCommentPostSuccess(result.data.content));
                if (window.confirm("comment đã được gửi, tiếp tục tìm phòng khác?")) {
                    navigate("/", { replace: true })
                } else {
                    window.location.reload()
                }

            })
            .catch((error) => {
                dispatch(actCommentPostFail(error));
            });
    }
}

const actCommentPostRequest = () => ({ type: actions.COMMENTS_POST_REQUEST })
const actCommentPostSuccess = (data) => ({ type: actions.COMMENTS_POST_SUCCESS, payload: data })
const actCommentPostFail = (error) => ({ type: actions.COMMENTS_POST_FAIL, payload: error })
