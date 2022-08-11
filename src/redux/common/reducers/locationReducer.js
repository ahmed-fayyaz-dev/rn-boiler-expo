import * as types from 'src/redux/common/constants/constants';

const initial = {
    loading: false,
    data: null,
    error: null,
};
export default function (state = initial, action) {
    switch (action.type) {
    case types.LOCATION:
        return {
            ...state, loading: false, data: action.payload, error: null,
        };
    default:
        return state;
    }
}
