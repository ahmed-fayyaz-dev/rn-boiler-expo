import * as types from 'src/redux/common/constants/constants';

export function logout() {
    return async (dispatch) => {
        dispatch({ type: types.RESET_ACTION });
    };
}

export function setAppAppearance(value) {
    return async (dispatch) => {
        dispatch({ type: types.APP_APPEARANCE, payload: value });
    };
}

export function setLocation(value) {
    return async (dispatch) => {
        dispatch({ type: types.LOCATION, payload: value });
    };
}

export function setAddress(value) {
    return async (dispatch) => {
        dispatch({ type: types.ADDRESS, payload: value });
    };
}

export function setLanguage(value) {
    return async (dispatch) => {
        dispatch({ type: types.LANGUAGE, payload: value });
    };
}

export function setGDate(value) {
    return async (dispatch) => {
        dispatch({ type: types.G_DATE, payload: value });
    };
}
