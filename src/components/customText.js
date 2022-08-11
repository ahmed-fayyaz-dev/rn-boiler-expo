import React from "react";
import { StyleSheet } from "react-native";
import {
    Title,
    Text,
    Subheading,
    Headline,
    Caption,
    Paragraph,
    withTheme,
} from "react-native-paper";

import { title, caption, text, buttonText } from "src/styles";

function CText(props) {
    return (
        <Text
            style={[styles.defaultStyle, styles.text, props.style]}
            onPress={props.onPress}
            numberOfLines={props.numberOfLines}
        >
            {props.children}
        </Text>
    );
}
export const CustomText = withTheme(CText);

function CTitle(props) {
    return (
        <Title
            style={[styles.defaultStyle, styles.title, props.style]}
            onPress={props.onPress}
            numberOfLines={props.numberOfLines}
        >
            {props.children}
        </Title>
    );
}
export const CustomTitle = withTheme(CTitle);

function CHeadline(props) {
    return (
        <Headline
            style={[styles.defaultStyle, props.style]}
            onPress={props.onPress}
            numberOfLines={props.numberOfLines}
        >
            {props.children}
        </Headline>
    );
}
export const CustomHeadline = withTheme(CHeadline);

function CSubheading(props) {
    return (
        <Subheading
            style={[styles.defaultStyle, styles.subHeading, props.style]}
            onPress={props.onPress}
            numberOfLines={props.numberOfLines}
        >
            {props.children}
        </Subheading>
    );
}
export const CustomSubheading = withTheme(CSubheading);

function CParagraph(props) {
    return (
        <Paragraph
            style={[styles.defaultStyle, props.style]}
            onPress={props.onPress}
            numberOfLines={props.numberOfLines}
        >
            {props.children}
        </Paragraph>
    );
}
export const CustomParagraph = withTheme(CParagraph);

function CCaption(props) {
    return (
        <Caption
            style={[styles.defaultStyle, styles.caption, props.style]}
            onPress={props.onPress}
            numberOfLines={props.numberOfLines}
        >
            {props.children}
        </Caption>
    );
}
export const CustomCaption = withTheme(CCaption);

const styles = StyleSheet.create({
    defaultStyle: {
    // fontFamily: `Poppins_400Regular`,
        textAlign: "center",
        textAlignVertical: "center",
    },

    text: {
        fontSize: text,
    // lineHeight: RFValue(17.1)
    },

    caption: {
        fontSize: caption,
    // lineHeight: RFValue(14)
    },

    title: {
        fontSize: title,
        fontWeight: "800",
    // lineHeight: RFValue(20),
    },

    subHeading: {
        fontSize: buttonText,
    // lineHeight: RFValue(22)
    },
});
