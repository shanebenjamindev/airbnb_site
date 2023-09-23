import * as actions from '../types/constants'
import api from '../../ApiUtils'

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
