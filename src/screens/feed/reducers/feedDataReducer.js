import * as types from "src/screens/feed/constants/constants";

let initial = {
    loading: false,
    data: null,
    error: null,
};
export default function (state = initial, action) {
    switch (action.type) {
        case types.GET_FEED_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null,
            };
        default:
            return state;
    }
}
