import axios from "axios";
import { batch } from "react-redux";
import { setSentryConfig } from "./sentry";

// setAuthToken
function setToken(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

// eslint-disable-next-line no-unused-vars
export const saveOnLogin = (store) => (next) => async (action) => {
    if (action.type === "LOGIN_ACCOUNT_SUCCESS") {
    // const {dispatch, getState} = store;

        batch(() => {
            setToken(action.payload.access_token);
            setSentryConfig(action.payload);
        });
    }
    return next(action);
};
