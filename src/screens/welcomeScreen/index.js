import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { useTheme } from "react-native-paper";

import { icons } from "assets/images";
import { CustomText, CustomCaption } from "src/components/customText";
import { GapV } from "src/components/gap";
import { NOT_FIRST_TIME } from "src/helpers/constants";
import { setStorageItem } from "src/helpers/index";
import { hitSlopS } from "src/styles/index";

export default function WelcomeScreen({ navigation }) {
    const { colors } = useTheme();
    const style = styles(colors);

    function navigate() {
        setStorageItem(NOT_FIRST_TIME, true);
        navigation.navigate("login");
    }

    return (
        <View style={[style.container]}>
            <View style={style.imageView}>
                <Image
                    style={style.imageLogo}
                    resizeMode="contain"
                    source={icons.app.logoLargeW}
                />
            </View>

            <View style={[style.container, style.revCol, style.itemCentre]}>
                <TouchableOpacity hitSlop={hitSlopS} onPress={navigate}>
                    <CustomText style={style.textNext}>Next{">>"}</CustomText>
                </TouchableOpacity>

                <CustomCaption style={style.textComment}>
                    {`"Subtitle.”`}
                </CustomCaption>

                <GapV small={true} />

                <CustomText style={[style.text]}>{`Welcome.`}</CustomText>
            </View>
        </View>
    );
}

const styles = (colors) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.notification,
        },

        revCol: { flexDirection: "column-reverse" },

        imageLogo: {
            height: 66,
        },

        imageView: { marginTop: "60%", alignItems: "center" },

        text: {
            marginTop: "3%",
            fontWeight: "bold",
            color: "white",
        },

        textComment: {
            marginBottom: "30%",
            textAlignVertical: "center",
            color: "white",
        },

        textNext: {
            fontWeight: "bold",
            marginBottom: "8%",
            color: "white",
        },

        itemCentre: {
            alignItems: "center",
        },
    });
