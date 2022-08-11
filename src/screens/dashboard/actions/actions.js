import { Alert } from "react-native";
import axios from "axios";
import { getDashboardDataConfig } from "./config";
import * as types from "src/screens/dashboard/constants/constants";

//ACTIONS

export function submitGetDashboardData(data) {
    return async (dispatch, getState) => {
        try {
            return await axios(
                getDashboardDataConfig(data, "CM", getState)
            ).then((response) => {
                dispatch({
                    type: types.GET_DASHBOARD_DATA_ALL_SUCCESS,
                    payload: response.data,
                });
                return response.data;
            });
        } catch (error) {
            console.error("error///", error);
            Alert.alert(
                "Error! Get Dashboard action was unsucessfull. ",
                `${error}\n`
            );
            throw new Error(error);
        }
    };
}
