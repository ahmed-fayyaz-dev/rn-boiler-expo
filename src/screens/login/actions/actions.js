import { Alert } from "react-native";
import axios from "axios";
import { SERVER_URL } from "src/appConstants";
import { deviceInfo, versionCode } from "src/helpers";
import * as types from "src/screens/login/constants/constants";

export function submitLoginAccount(data) {
    return async (dispatch) => {
        dispatch({ type: types.LOGIN_ACCOUNT_ATTEMPT });

        var config = {
            method: "post",
            url: `${SERVER_URL}Login/Login`,
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                userName: data.email,
                password: data.password,
                ipAddress: "0",
                deviceInfo: deviceInfo,
                versionCode: versionCode,
            },
        };

        return axios(config)
            .then(async function (response) {
                dispatch({
                    type: types.LOGIN_ACCOUNT_SUCCESS,
                    payload: response.data,
                });
                // console.log(response.data);
                return response.data;
            })
            .catch(function (error) {
                console.error("error///", error); // Console Log
                Alert.alert("Error! Logging in was unsucessfull", `${error}`);
                dispatch({ type: types.LOGIN_ACCOUNT_FAIL, payload: error });
                throw new Error(error);
            });
    };
}
