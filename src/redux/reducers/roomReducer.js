import * as actions from '../types/constants'

const initialState = {
    loading: false,
    data: null,
    error: null
}

const roomReducer = (state = initialState, action) => {
    switch (action.type) {
        // Get room detail by Id
        case actions.ROOM_DETAIL_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }

        case actions.ROOM_DETAIL_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }

        case actions.ROOM_DETAIL_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }

        // get room data
        case actions.ROOM_DATA_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }

        case actions.ROOM_DATA_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }

        case actions.ROOM_DATA_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }

        // Get list room by Id        
        case actions.GET_ROOM_BY_ID_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }

        case actions.GET_ROOM_BY_ID_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }

        case actions.GET_ROOM_BY_ID_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }

        // get home list room         
        case actions.HOMELIST_ROOM_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }

        case actions.HOMELIST_ROOM_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }

        case actions.HOMELIST_ROOM_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }

        default:
            return { ...state }
    }
}

export default roomReducer