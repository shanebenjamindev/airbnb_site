import * as actions from '../types/constants'

const initialState = {
    loading: false,
    data: null,
    error: null
}

const cityReducer = (state = initialState, action) => {
    switch (action.type) {
        // Get city
        case actions.LIST_CITY_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }

        case actions.LIST_CITY_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }

        case actions.LIST_CITY_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }

        // Add city
        case actions.ADD_CITY_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }

        case actions.ADD_CITY_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }

        case actions.ADD_CITY_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }

        // Edit city
        case actions.EDIT_CITY_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }

        case actions.EDIT_CITY_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }

        case actions.EDIT_CITY_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }


        // Delete city
        case actions.DELETE_CITY_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }

        case actions.DELETE_CITY_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }

        case actions.DELETE_CITY_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }

        default:
            return { ...state }
    }
}

export default cityReducer