import * as types from "src/screens/dashboard/constants/constants";

let initial = {
    loading: false,
    data: null,
    error: null,
};
export default function (state = initial, action) {
    switch (action.type) {
        case types.GET_DASHBOARD_DATA_ALL_SUCCESS:
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
