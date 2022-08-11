import * as types from 'src/redux/common/constants/constants';

const initial = {
    loading: false,
    data: new Date(),
    error: null,
};
export default function (state = initial, action) {
    switch (action.type) {
    case types.G_DATE:
        return {
            ...state, loading: false, data: action.payload, error: null,
        };
    default:
        return state;
    }
}
