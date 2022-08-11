import React from "react";
import { Snackbar } from "react-native-paper";
import { CustomCaption } from "./customText";

export const CustomSnackbar = ({
    style,
    visible,
    onDismiss,
    textStyle,
    onPress,
    msg,
    duration,
}) => {
    return (
        <Snackbar
            visible={visible}
            onDismiss={onDismiss}
            duration={duration ? duration : 2000}
            style={style}
            action={{
                onPress: onPress,
            }}
        >
            <CustomCaption style={textStyle}>{msg}</CustomCaption>
        </Snackbar>
    );
};
