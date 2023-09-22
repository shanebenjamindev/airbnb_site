import * as actions from '../types/constants'

const initialState = {
    loading: false,
    data: null,
    error: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        // Get user
        case actions.USER_GET_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }

        case actions.USER_GET_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }

        case actions.USER_GET_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }

        default:
            return { ...state }
    }
}

export default userReducer