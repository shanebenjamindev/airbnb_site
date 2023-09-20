import * as actions from '../types/constants'

const initialState = {
    loading: false,
    data: null,
    error: null
}

const commentPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.COMMENTS_POST_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }

        case actions.COMMENTS_POST_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            // console.log(action.payload);
            state.error = null;
            return { ...state }

        case actions.COMMENTS_POST_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }

        default:
            return { ...state }
    }
}

export default commentPostReducer