import { types } from "../types/types";

const initialState = {loading:false }

export const uiLoadingReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.iuStartLoading:
            return {
                ...state,
                loading: true
            }
        case types.iuFinishLoading:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }


}