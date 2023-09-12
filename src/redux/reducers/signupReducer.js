import * as actions from '../types/constants'

const initialState = {
    loading: false,
    data: null,
    error: null
}

const signupReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SIGNUP_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }

        case actions.SIGNUP_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }

        default:
            return { ...state }
    }
}

export default signupReducer