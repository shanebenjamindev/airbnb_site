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

        // get list user
        case actions.LIST_USER_GET_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }

        case actions.LIST_USER_GET_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }

        case actions.LIST_USER_GET_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }

        // Add user
        case actions.USER_ADD_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }

        case actions.USER_ADD_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }

        case actions.USER_ADD_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }


        // Edit user 
        case actions.USER_EDIT_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }

        case actions.USER_EDIT_SUCCESS:
            state.loading = false;
            const { id, newProfile } = action.payload;
            const existingToken = JSON.parse(localStorage.getItem('USER_LOGIN')).token;
            localStorage.setItem('USER_LOGIN', JSON.stringify({ user: { id, ...newProfile }, token: existingToken }));
            state.error = null;
            return { ...state }

        case actions.USER_EDIT_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }

        // Upload avatar
        case actions.USER_UPLOAD_AVATAR_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }

        case actions.USER_UPLOAD_AVATAR_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            const updatedUserAvatar = action.payload;
            const userDataFromLocalStorage = JSON.parse(localStorage.getItem('USER_LOGIN'));
            userDataFromLocalStorage.user.avatar = updatedUserAvatar;
            localStorage.setItem('USER_LOGIN', JSON.stringify(userDataFromLocalStorage));
            state.error = null;
            return { ...state }

        case actions.USER_UPLOAD_AVATAR_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }


        // delete user:
        case actions.USER_DELETE_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }

        case actions.USER_DELETE_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }

        case actions.USER_DELETE_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }

        default:
            return { ...state }
    }
}

export default userReducer