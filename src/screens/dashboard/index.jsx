import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";
import { connect } from "react-redux";

import { submitGetDashboardData } from "./actions/actions";
import { CustomSnackbar } from "src/components/customSnackbar";
import { GapV } from "src/components/gap";
import VirtualizedView from "src/components/virtualizedBackedContainer";
import { callApi } from "src/helpers/apiCall";
import gloabalStyle, { mgMs, mgVm, zIndexM } from "src/styles/index";

function Dashboard({
    // loginUserReducer,
    submitGetDashboardData,
    //
    dashboardDataReducer,
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
            callApiReducer: dashboardDataReducer,
            submitCallApi: submitGetDashboardData,
            successFunc: () => {},
            errFunc: () => {},
            catchFunc: () => {},
        });
    }

    return (
        <View style={[gStyle.container]}>
            <View style={style.dashboardHeader}></View>

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

function mapStateToProps({ loginUserReducer, dashboardDataReducer }) {
    return {
        loginUserReducer,
        dashboardDataReducer,
    };
}

export default connect(mapStateToProps, { submitGetDashboardData })(Dashboard);

const styles = (colors) =>
    StyleSheet.create({
        dashboardHeader: {
            minHeight: 80,
            backgroundColor: colors.notification,
            paddingHorizontal: mgMs,
            zIndex: zIndexM,
        },

        content: {
            flex: 1,
            marginTop: mgVm,
            paddingHorizontal: mgMs,
        },
    });
