import * as types from "src/screens/login/constants/constants";

let initial = {
    loading: false,
    data: {},
    error: null,
};
export default function (state = initial, action) {
    switch (action.type) {
        case types.LOGIN_ACCOUNT_ATTEMPT:
            return { ...state, loading: true };
        case types.LOGIN_ACCOUNT_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null,
            };
        case types.LOGIN_ACCOUNT_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}
