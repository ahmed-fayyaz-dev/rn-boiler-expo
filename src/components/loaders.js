import * as React from "react";
import { StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";

export const Loader = ({
    small,
    // center,
    ...props
}) => {
    return (
        <ActivityIndicator
            size={small ? "small" : "large"}
            style={style.loader}
            {...props}
        />
    );
};

const style = StyleSheet.create({
    loader: {
        alignSelf: "center",
        flex: 1,
    },
});
