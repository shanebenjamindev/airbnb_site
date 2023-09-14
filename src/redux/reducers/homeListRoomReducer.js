import * as actions from '../types/constants'

const initialState = {
    loading: false,
    data: null,
    error: null
}

const homeListRoomReducer = (state = initialState, action) => {
    switch (action.type) {
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

export default homeListRoomReducer