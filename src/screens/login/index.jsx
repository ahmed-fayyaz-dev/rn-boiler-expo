import React from "react";
import { ScrollView, View, StyleSheet, Image, StatusBar } from "react-native";
import { useTheme, Divider } from "react-native-paper";
import Animated from "react-native-reanimated";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import { icons } from "assets/images";
import { submitLoginAccount } from "./actions/actions";
import { Form } from "./components/form";
import { CustomCaption, CustomSubheading } from "src/components/customText";
import { GapV } from "src/components/gap";
import { IonIcons, setStorageItem } from "src/helpers";
import { entering, exiting } from "src/helpers/animation";
import { callApi } from "src/helpers/apiCall";
import { ONBOARD, ID, PASSWORD } from "src/helpers/constants";
import { iconSizeL, mgM, mgMs, mgS, onBackgroundDark } from "src/styles/index";

function Login({ navigation, submitLoginAccount }) {
    const { colors } = useTheme();
    const style = styles(colors);

    // Navigate
    function navigate() {
        navigation.reset({
            index: 0,
            routes: [{ name: "drawerNav" }],
        });
    }

    // OnLoginPress
    async function handleSubmitLogin(data) {
        if (data.remember) {
            setStorageItem(ID, data.email);
            setStorageItem(PASSWORD, data.password);
            setStorageItem(ONBOARD, true);
        }

        await callApi({
            data,
            setLoading: () => {},
            submitCallApi: submitLoginAccount,
            successFunc: navigate,
            errFunc: () => {},
            catchFunc: () => {},
        });
    }

    const TopView = () => (
        <View>
            <Image
                resizeMode="contain"
                source={icons.app.logoLargeW}
                style={style.image}
            />
            <GapV small />

            <Divider style={[style.divider]} />
            <GapV small />

            <CustomCaption style={style.subText}>
                Please Login to your Account
            </CustomCaption>

            <GapV />
        </View>
    );

    const LoginView = () => (
        <Animated.View
            entering={entering}
            exiting={exiting}
            style={style.loginView}
        >
            <IonIcons
                style={style.icon}
                name="person-outline"
                size={iconSizeL}
            />

            <CustomSubheading style={style.title}>LOGIN</CustomSubheading>
            <GapV small />

            <Form onSubmit={handleSubmitLogin} />
        </Animated.View>
    );

    return (
        <View style={style.container}>
            <ScrollView contentContainerStyle={[style.content]}>
                {LoginView()}
                {TopView()}
            </ScrollView>
        </View>
    );
}

function mapStateToProps() {
    return {};
}

function mapDipatchToProps(dispatch) {
    return bindActionCreators(
        {
            submitLoginAccount,
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDipatchToProps)(Login);

const styles = (colors) =>
    StyleSheet.create({
        container: {
            backgroundColor: colors.notification,
            flex: 1,
            paddingTop: StatusBar.currentHeight,
        },

        content: {
            flexDirection: "column-reverse",
            flexGrow: 1,
        },

        image: {
            alignSelf: "center",
            height: 66,
        },

        fdr: { flexDirection: "row" },

        divider: {
            alignSelf: "center",
            backgroundColor: onBackgroundDark,
            height: 1,
            width: "80%",
        },

        subText: {
            color: onBackgroundDark,
        },

        title: {
            fontWeight: "bold",
        },

        icon: { alignSelf: "center" },

        loginView: {
            backgroundColor: colors.surface,
            borderTopStartRadius: 40,
            borderTopEndRadius: 40,
            paddingHorizontal: mgMs,
            paddingTop: mgM,
            marginHorizontal: mgS,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 8,
            },
            shadowOpacity: 0.46,
            shadowRadius: 11.14,
            elevation: 17,
            zIndex: 17,
        },

        revBottomContainer: {
            flexDirection: "column-reverse",
            flex: 1,
        },
    });
