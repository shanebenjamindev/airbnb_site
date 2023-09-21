import * as actions from '../types/constants'

const initialState = {
    loading: false,
    data: null,
    error: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        // Login 
        case actions.LOGIN_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }

        case actions.LOGIN_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            localStorage.setItem("USER_LOGIN", JSON.stringify(action.payload))
            state.error = null;
            return { ...state }

        case actions.LOGIN_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }

        // Signup
        case actions.SIGNUP_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }

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

        // Authentication
        case actions.AUTH_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }

        case actions.AUTH_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            localStorage.setItem("USER_LOGIN", JSON.stringify(action.payload))
            state.error = null;
            return { ...state }

        case actions.AUTH_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }

        default:
            return { ...state }
    }
}

export default authReducer