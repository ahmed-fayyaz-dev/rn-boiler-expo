import NetInfo from "@react-native-community/netinfo";
import Toast from "react-native-root-toast";

export async function callApi({
    data,
    setLoading,
    submitCallApi,
    successFunc,
    catchFunc,
    errFunc,
}) {
    NetInfo.fetch().then(async (state) => {
        if (state.isConnected != false) {
            setLoading(true);

            submitCallApi(data)
                .then((res) => {
                    if (res?.status == "success") {
                        successFunc(res);
                    } else if (res?.status == "error") {
                        errFunc(res);
                    } else {
                        console.log("callAPI-Else", res);
                        errFunc(res);
                    }
                    setLoading(false);
                })
                .catch((e) => {
                    setLoading(false);
                    console.error("apiCall", e);
                    catchFunc(e);
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            Toast.show("No internet Connectivity !", Toast.durations.SHORT);
            setLoading(false);
        }
    });
}
