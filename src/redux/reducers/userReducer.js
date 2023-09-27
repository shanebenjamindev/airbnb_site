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

        // Edit user 

        case actions.USER_EDIT_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }

        case actions.USER_EDIT_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            const updatedUser = action.payload;
            const existingToken = JSON.parse(localStorage.getItem('USER_LOGIN')).token;
            localStorage.setItem('USER_LOGIN', JSON.stringify({ user: updatedUser, token: existingToken }));
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

            // Get the current user data from local storage
            const userDataFromLocalStorage = JSON.parse(localStorage.getItem('USER_LOGIN'));

            // Update the avatar in the user data
            userDataFromLocalStorage.user.avatar = updatedUserAvatar;

            // Store the updated user data back in local storage
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