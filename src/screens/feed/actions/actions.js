import { Alert } from "react-native";
import axios from "axios";
import { getFeedDataConfig } from "./config";
import * as types from "src/screens/feed/constants/constants";

//ACTIONS

export function submitGetFeedData(data) {
    return async (dispatch, getState) => {
        try {
            return await axios(getFeedDataConfig(data, "CM", getState)).then(
                (response) => {
                    dispatch({
                        type: types.GET_FEED_SUCCESS,
                        payload: response.data,
                    });
                    return response.data;
                }
            );
        } catch (error) {
            console.error("error///", error);
            Alert.alert(
                "Error! Get Feed action was unsucessfull. ",
                `${error}\n`
            );
            throw new Error(error);
        }
    };
}
