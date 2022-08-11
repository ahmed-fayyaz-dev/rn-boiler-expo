import React from "react";
import { View } from "react-native";
import { mgS, mgM, mgL } from "src/styles";

export function GapV({ small, md, large, xL }) {
    return (
        <View
            style={
                small
                    ? { marginTop: mgS }
                    : large
                    ? { marginTop: mgL }
                    : xL
                    ? { marginTop: mgL * 2 }
                    : md
                    ? { marginTop: mgM }
                    : { marginTop: mgM }
            }
        />
    );
}

export function GapH({ small, md, large, xL }) {
    return (
        <View
            style={
                small
                    ? { marginLeft: mgS }
                    : large
                    ? { marginLeft: mgL }
                    : xL
                    ? { marginLeft: mgL * 2 }
                    : md
                    ? { marginTop: mgM }
                    : { marginTop: mgM }
            }
        />
    );
}
