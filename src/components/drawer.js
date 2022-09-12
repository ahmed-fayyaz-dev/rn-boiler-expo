import React from "react";
import { Image, View, StyleSheet } from "react-native";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import { useTheme } from "@react-navigation/native";
import { nativeApplicationVersion } from "expo-application";
import { useTheme as paperTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import { IonIcons, signOutFunc } from "src/helpers";
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
import { iconSize } from "src/styles/navCss";

// const MenuLabels = [];

const navigateTo = ({ navigation, name }) => {
    navigation.closeDrawer();
    setTimeout(() => navigation.navigate(name), 800);
};

const BackIcon = ({ navigation }) => (
    <CustomIconButton
        size={iconSize}
        color={onBackgroundDark}
        name={"close-circle-outline"}
        onPress={() => navigation.toggleDrawer()}
    />
);

const CustomDrawerList = ({
    state,
    descriptors,
    navigation,
    // levelToShow
}) => {
    return state.routes.map((route) => {
        const {
            // level,
            title,
            drawerIcon,
            drawerItemStyle,
            drawerActiveTintColor,
            drawerActiveBackgroundColor,
        } = descriptors[route.key].options;

        // if (levelToShow === level)
        return (
            <DrawerItem
                key={route.key}
                icon={drawerIcon}
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

function DrawerContent(props) {
    const { colors } = useTheme();
    const { colors: paperColors } = paperTheme();
    const style = styles(paperColors);
    const { state, descriptors, navigation } = props;
    const { logout, drawerItemStyle } = props;

    const Header = () => (
        <View style={[style.drawerTopView]}>{BackIcon({ navigation })}</View>
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

    const DrawerScroll = () => (
        <DrawerContentScrollView
            contentContainerStyle={style.drawerContentScroll}
            {...props}
        >
            <CustomSubheading style={[style.menuText]}>MENU</CustomSubheading>

            {/* Drawer with Sub Levels */}
            {/* {MenuLabels.map((menuItem, i) => (
                <MenuItem
                    key={i}
                    state={state}
                    menuItem={menuItem}
                    descriptors={descriptors}
                    navigation={navigation}
                />
            ))} */}

            {/* Drawer Without having levels */}
            <CustomDrawerList
                state={state}
                descriptors={descriptors}
                navigation={navigation}
            />
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
            {DrawerScroll()}
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
            padding: mgS,
            textAlign: "left",
            fontWeight: "bold",
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
            backgroundColor: colors.notification,
        },

        drawerContentScroll: { paddingTop: 0 },

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

// const DrawerIcons = ({ icon }) => (
//     <Image
//         source={icon}
//         style={[{ height: iconSizeContent, width: iconSizeContent }]}
//     />
// );

// const DrawerAccountInfo = ({ colors, loginUserReducer }) => {
//     const { user_pp, users } = loginUserReducer;

//     const style = styles(colors);
//     return (
//         <View style={[style.accountInfo]}>
//             <Image
//                 source={{
//                     // uri: user_pp,
//                     uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwKS__3aeYLOiN8j1Le-GtHt2zI33vYTNQysiewAEC_w&s",
//                 }}
//                 resizeMode="cover"
//                 style={[style.roundImage]}
//             />
//             <GapH small={true} />

//             <View>
//                 <CustomText style={style.textLeft}>
//                     {users?.employeeName}
//                 </CustomText>
//                 <CustomCaption style={style.textLeft}>
//                     {users?.empCode}
//                 </CustomCaption>
//             </View>
//         </View>
//     );
// };

// const MenuItem = ({ menuItem, state, descriptors, navigation }) => {
//     const { label, level, icon } = menuItem;
//     const { colors: paperColors } = paperTheme();
//     const style = styles(paperColors);

//     const [show, setShow] = useState(false);
//     const toggleMenu = () => setShow(!show);

//     return (
//         <>
//             <TouchableRipple onPress={toggleMenu} style={style.menuItem}>
//                 <>
//                     <DrawerIcons icon={icon} />
//                     <CustomParagraph>{label}</CustomParagraph>
//                     <CustomIconButton
//                         styleP={style.menuItemIcon}
//                         name={show ? "chevron-up" : "chevron-down"}
//                     />
//                 </>
//             </TouchableRipple>

//             {show && (
//                 <Animated.View style={style.menuItemList} entering={FadeInLeft}>
//                     {CustomDrawerList({
//                         state,
//                         descriptors,
//                         navigation,
//                         levelToShow: level,
//                     })}
//                 </Animated.View>
//             )}
//         </>
//     );
// };
