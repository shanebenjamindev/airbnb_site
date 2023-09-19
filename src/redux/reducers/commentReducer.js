import * as actions from '../types/constants'

const initialState = {
    loading: false,
    data: null,
    error: null
}

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.COMMENTS_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }

        case actions.COMMENTS_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }

        case actions.COMMENTS_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }

        default:
            return { ...state }
    }
}

export default commentReducer