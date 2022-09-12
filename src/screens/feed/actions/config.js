import { SERVER_URL } from "src/appConstants";
import { deviceInfo, versionCode } from "src/helpers";

export const getFeedDataConfig = (data, type, getState) => {
    const companyId = getState().companyIdReducer.data;
    const quarter = getState().quarterReducer.data;
    const fyear = getState().fYearReducer.data;

    return {
        method: "post",
        url: `${SERVER_URL}Home/GetPosDashBoardData`,
        headers: {
            "Content-Type": "application/json",
        },
        data: {
            vtype: type,
            fyear: fyear,
            quarter: quarter,
            companyID: companyId,
            userID: data?.userID,
            deviceInfo: deviceInfo,
            versionCode: versionCode,
        },
    };
};
