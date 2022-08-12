import React, { useState } from "react";
import { Image, View, StyleSheet } from "react-native";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import { useTheme } from "@react-navigation/native";
import { nativeApplicationVersion } from "expo-application";
import { useTheme as paperTheme, TouchableRipple } from "react-native-paper";
import Animated, { FadeInLeft } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

import { IonIcons, removeStorageItem } from "src/helpers";
import {
    bRss,
    mgM,
    mgS,
    onBackgroundDark,
    pdHm,
    iconSize as iconSizeContent,
    pdHs,
    pdVss,
} from "src/styles";
import {
    CustomCaption,
    CustomParagraph,
    CustomSubheading,
    CustomText,
} from "./customText";
import { GapH } from "./gap";
import { icons } from "assets/images/index";
import { CustomIconButton } from "src/components/buttons";
import { ID, PASSWORD, ONBOARD } from "src/helpers/constants";
import { iconSize } from "src/styles/navCss";

const MenuLabels = [
    {
        label: "Dashboard",
        level: 0,
        icon: icons.drawer.report,
    },
    {
        label: "Accounts",
        level: 1,
        icon: icons.drawer.topSale,
    },
    {
        label: "Inventory",
        level: 2,
        icon: icons.drawer.topSale,
    },
];

const DrawerIcons = ({ icon }) => (
    <Image
        source={icon}
        style={[{ height: iconSizeContent, width: iconSizeContent }]}
    />
);

const navigateTo = ({ navigation, name }) => {
    navigation.closeDrawer();
    setTimeout(() => navigation.navigate(name), 800);
};

const signOutFunc = ({ logout, navigation }) => {
    removeStorageItem(ID);
    removeStorageItem(ONBOARD);
    removeStorageItem(PASSWORD);
    logout();
    navigation.reset({
        index: 0,
        routes: [{ name: "authStack" }],
    });
};

const BackIcon = ({ colors, navigation }) => (
    <CustomIconButton
        size={iconSize}
        color={colors.primary}
        name={"chevron-back-outline"}
        onPress={() => navigation.toggleDrawer()}
    />
);

const DrawerAccountInfo = ({ colors, loginUserReducer }) => {
    const { user_pp, users } = loginUserReducer;

    const style = styles(colors);
    return (
        <View style={[style.accountInfo]}>
            <Image
                source={{
                    // uri: user_pp,
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwKS__3aeYLOiN8j1Le-GtHt2zI33vYTNQysiewAEC_w&s",
                }}
                resizeMode="cover"
                style={[style.roundImage]}
            />
            <GapH small={true} />

            <View>
                <CustomText style={style.textLeft}>
                    {users?.employeeName}
                </CustomText>
                <CustomCaption style={style.textLeft}>
                    {users?.empCode}
                </CustomCaption>
            </View>
        </View>
    );
};

const CustomDrawerList = ({ state, descriptors, navigation, levelToShow }) => {
    return state.routes.map((route) => {
        const {
            level,
            title,
            // drawerIcon,
            drawerItemStyle,
            drawerActiveTintColor,
            drawerActiveBackgroundColor,
        } = descriptors[route.key].options;

        if (levelToShow === level)
            return (
                <DrawerItem
                    key={route.key}
                    // icon={drawerIcon}
                    style={drawerItemStyle}
                    label={title || route.name}
                    activeTintColor={drawerActiveTintColor}
                    activeBackgroundColor={drawerActiveBackgroundColor}
                    onPress={() => navigateTo({ navigation, name: route.name })}
                    focused={
                        state.routes.findIndex((e) => e.name === route.name) ===
                        state.index
                    }
                />
            );
    });
};

const MenuItem = ({ menuItem, state, descriptors, navigation }) => {
    const { label, level, icon } = menuItem;
    const { colors: paperColors } = paperTheme();
    const style = styles(paperColors);

    const [show, setShow] = useState(false);
    const toggleMenu = () => setShow(!show);

    return (
        <>
            <TouchableRipple onPress={toggleMenu} style={style.menuItem}>
                <>
                    <DrawerIcons icon={icon} />
                    <CustomParagraph>{label}</CustomParagraph>
                    <CustomIconButton
                        styleP={style.menuItemIcon}
                        name={show ? "chevron-up" : "chevron-down"}
                    />
                </>
            </TouchableRipple>

            {show && (
                <Animated.View style={style.menuItemList} entering={FadeInLeft}>
                    {CustomDrawerList({
                        state,
                        descriptors,
                        navigation,
                        levelToShow: level,
                    })}
                </Animated.View>
            )}
        </>
    );
};

function DrawerContent(props) {
    const { colors } = useTheme();
    const { colors: paperColors } = paperTheme();
    const style = styles(paperColors);
    const { state, descriptors, navigation } = props;
    const { loginUserReducer, logout, drawerItemStyle } = props;

    const Header = () => (
        <View style={[style.drawerTopView]}>
            {BackIcon({ colors, navigation })}
            {DrawerAccountInfo({ colors, loginUserReducer })}
        </View>
    );

    const Footer = () => (
        <View style={[style.drawerBottomView]}>
            <CustomCaption>
                App version {nativeApplicationVersion}
            </CustomCaption>
            <Image
                resizeMode="contain"
                source={icons.app.logoSmallB}
                style={[style.logoImage]}
            />
        </View>
    );

    const DrawerContent = () => (
        <DrawerContentScrollView {...props}>
            <CustomSubheading style={[style.menuText]}>MENU</CustomSubheading>

            {/* Drawer Screens List */}
            {MenuLabels.map((menuItem, i) => (
                <MenuItem
                    key={i}
                    state={state}
                    menuItem={menuItem}
                    descriptors={descriptors}
                    navigation={navigation}
                />
            ))}

            {/* Drawer Signout item */}
            <DrawerItem
                onPress={() => signOutFunc({ logout, navigation })}
                icon={({ size, color }) =>
                    IonIcons({ size, name: "exit-outline", color })
                }
                label="Sign Out"
                style={drawerItemStyle}
            />
        </DrawerContentScrollView>
    );

    return (
        <SafeAreaView style={style.container}>
            {Header()}
            {DrawerContent()}
            {Footer()}
        </SafeAreaView>
    );
}

export default DrawerContent;

const styles = (colors) =>
    StyleSheet.create({
        container: { flex: 1 },

        menuText: {
            margin: mgS,
            marginBottom: mgM,
            padding: mgS,
            textAlign: "left",
            fontWeight: "bold",
            borderRadius: bRss,
            color: onBackgroundDark,
            backgroundColor: colors.notification,
        },

        textLeft: { textAlign: "left" },

        drawerBottomView: {
            marginBottom: mgS,
            paddingHorizontal: pdHm,
            flexDirection: "row-reverse",
            justifyContent: "space-between",
        },

        drawerTopView: {
            flexDirection: "row-reverse",
        },

        roundImage: {
            width: 65,
            height: 65,
            overflow: "hidden",
            borderRadius: 65 / 2,
        },

        accountInfo: {
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            marginTop: mgS,
            marginHorizontal: mgS,
        },

        menuItem: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: pdHm,
            paddingHorizontal: pdHs,
            alignItems: "center",
            // borderWidth: StyleSheet.hairlineWidth,
            borderRadius: bRss,
            borderColor: colors.primary,
            // marginBottom: pdVs,
        },

        menuItemIcon: {
            alignSelf: "flex-end",
        },

        menuItemList: {
            // borderLeftWidth: StyleSheet.hairlineWidth,
            // borderLeftColor: colors.primary,
            marginLeft: pdHm,
            marginVertical: pdVss,
        },

        logoImage: { maxWidth: 80, maxHeight: 80 },
    });
