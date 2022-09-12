import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";
import { connect } from "react-redux";

import { submitGetFeedData } from "./actions/actions";
import { CustomSnackbar } from "src/components/customSnackbar";
import { GapV } from "src/components/gap";
import VirtualizedView from "src/components/virtualizedBackedContainer";
import { callApi } from "src/helpers/apiCall";
import gloabalStyle, { mgMs, mgVm, zIndexM } from "src/styles/index";

function Feed({
    // loginUserReducer,
    submitGetFeedData,
    //
    feedDataReducer,
}) {
    const { colors } = useTheme();
    const gStyle = gloabalStyle();
    const style = styles(colors);

    const [visibleSnack, setVisibleSnack] = useState(false);
    const [snackMsg] = useState("");
    const [refreshing] = useState(false);
    const [loading, setLoading] = useState(false);

    function onDismissSnackBar() {
        setVisibleSnack(false);
    }

    function handleSubmitGetDashboardData() {
        callApi({
            data: {},
            setLoading: setLoading,
            callApiReducer: feedDataReducer,
            submitCallApi: submitGetFeedData,
            successFunc: () => {},
            errFunc: () => {},
            catchFunc: () => {},
        });
    }

    return (
        <View style={[gStyle.container]}>
            <VirtualizedView
                refresh={true}
                refreshing={refreshing}
                onRefresh={async () => {
                    try {
                        handleSubmitGetDashboardData();
                    } catch (e) {
                        console.error(e);
                    }
                }}
            >
                {loading ? null : (
                    <View style={[style.content]}>{/* CONTENT */}</View>
                )}
                <GapV />
            </VirtualizedView>

            <CustomSnackbar
                visible={visibleSnack}
                onDismiss={onDismissSnackBar}
                style={gStyle.snackBar}
                textStyle={gStyle.snackText}
                msg={`${snackMsg}`}
            />
        </View>
    );
}

function mapStateToProps({ loginUserReducer, feedDataReducer }) {
    return {
        loginUserReducer,
        feedDataReducer,
    };
}

export default connect(mapStateToProps, { submitGetFeedData })(Feed);

const styles = (colors) =>
    StyleSheet.create({
        content: {
            flex: 1,
            marginTop: mgVm,
            paddingHorizontal: mgMs,
        },
    });
