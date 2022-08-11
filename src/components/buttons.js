import React from "react";
import { StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import {
    Button,
    FAB,
    IconButton,
    useTheme,
    TextInput,
    HelperText,
} from "react-native-paper";

import {
    bRss,
    buttonHeight,
    hitSlopS,
    mgS,
    pdHs,
    pdVs,
    pdVss,
    zIndexL,
    iconSize,
    primaryColor,
    pdVm,
    pdHm,
} from "src/styles";

export function CustomRoundButton({
    title,
    onPress,
    loading,
    icon,
    compact,
    disabled,
    mode,
    uppercase,
    children,
    color,
    ...props
}) {
    const { colors } = useTheme();
    const style = styles(colors);

    return (
        <Button
            mode={mode || "contained"}
            onPress={onPress}
            loading={loading}
            disabled={disabled || loading}
            uppercase={uppercase}
            compact={compact}
            color={color}
            icon={icon}
            contentStyle={[style.fdrr, style.roundButton]}
            {...props}
        >
            {title}
            <>{children}</>
        </Button>
    );
}

export function CustomSquareButton({
    color,
    title,
    onPress,
    loading,
    icon,
    mode,
    children,
    ...props
}) {
    const { colors } = useTheme();
    const style = styles(colors);

    return (
        <Button
            mode={mode || "contained"}
            onPress={onPress}
            loading={loading}
            disabled={loading}
            color={color}
            icon={icon}
            // compact
            contentStyle={[style.squareButton]}
            {...props}
        >
            {title}
            {children}
        </Button>
    );
}

export function CustomSquareButtonRNGH({
    color,
    title,
    onPress,
    loading,
    icon,
    mode,
    children,
    disabled,
    ...props
}) {
    const { colors } = useTheme();
    const style = styles(colors);

    return (
        <TouchableWithoutFeedback onPress={onPress} disabled={disabled}>
            <Button
                mode={mode || "contained"}
                onPress={onPress}
                loading={loading}
                disabled={loading}
                color={color}
                icon={icon}
                // compact
                contentStyle={[style.squareButton]}
                {...props}
            >
                {title}
                {children}
            </Button>
        </TouchableWithoutFeedback>
    );
}

export function CustomDrawerButton({
    color,
    title,
    onPress,
    loading,
    icon,
    mode,
    children,
    ...props
}) {
    const { colors } = useTheme();
    const style = styles(colors);

    return (
        <Button
            mode={mode || "contained"}
            onPress={onPress}
            loading={loading}
            disabled={loading}
            color={color}
            icon={icon}
            // compact
            contentStyle={[style.drawerButton]}
            {...props}
        >
            {title}
            {children}
        </Button>
    );
}

export function CutomRoundButtonRNGH({
    title,
    onPress,
    children,
    icon,
    mode,
    loading,
    disabled,
    ...props
}) {
    const { colors } = useTheme();
    const style = styles(colors);

    return (
        <TouchableWithoutFeedback onPress={onPress} disabled={disabled}>
            <Button
                mode={mode || "contained"}
                loading={loading}
                disabled={disabled}
                icon={icon}
                contentStyle={[style.fdrr, style.roundButton]}
                // compact
                // style={[style.roundButton]}
                {...props}
            >
                {title}
                {children}
            </Button>
        </TouchableWithoutFeedback>
    );
}

export function CustomIconButton({
    onPress,
    size = iconSize,
    color = primaryColor,
    name,
    styleP,
}) {
    const { colors } = useTheme();
    const style = styles(colors);

    return (
        <IconButton
            hitSlop={hitSlopS}
            icon={name}
            color={color}
            style={[style.iconButton, styleP]}
            size={size}
            onPress={onPress}
        />
    );
}

export function CustomFab({
    onPress,
    color,
    icon,
    small,
    visible,
    bottomRight,
}) {
    const { colors } = useTheme();
    const style = styles(colors);

    return (
        <FAB
            visible={visible}
            hitSlop={hitSlopS}
            style={[style.fab, bottomRight && style.fabBottomRight]}
            small={small}
            icon={icon}
            color={color}
            onPress={onPress}
        />
    );
}

export const CustomInputButton = ({
    label,
    value,
    helper,
    icon,
    editable,
    multiline,
    onPress,
    helperVisible,
    children,
    disabled,
    ...props
}) => {
    // const style = styles(theme.colors);
    const theme = useTheme();

    const CustomIcon = () => (
        <TextInput.Icon
            forceTextInputFocus={false}
            name={icon}
            onPress={onPress}
            disabled={disabled}
        />
    );

    const Input = () => (
        <TextInput
            mode="outlined"
            label={label}
            value={value} // Uncontrolled
            multiline={multiline}
            editable={editable}
            theme={theme}
            right={icon && CustomIcon()}
            {...props}
        >
            {/* {children} */}
        </TextInput>
    );

    return (
        <>
            {/* <TouchableOpacity style={style.container} onPress={onPress}> */}
            {Input()}
            {/* </TouchableOpacity> */}

            {helper && (
                <HelperText type="error" visible={helperVisible}>
                    {helper}
                </HelperText>
            )}
        </>
    );
};

const styles = (colors) =>
    StyleSheet.create({
        inputContainer: { flex: 1 },

        roundButton: {
            minHeight: buttonHeight + 10,
            justifyContent: "center",
            borderColor: colors.primary,
            width: "100%",
            alignSelf: "center",
        },

        roundButtonS: {
            minHeight: buttonHeight,
            justifyContent: "center",
            width: "45%",
            alignSelf: "center",
        },

        squareButton: {
            justifyContent: "center",
            minHeight: buttonHeight,
            minWidth: 30,
        },

        drawerButton: {
            justifyContent: "center",
            flexDirection: "row-reverse",
            minHeight: buttonHeight,
            minWidth: 30,
        },

        iconButton: {
            justifyContent: "center",
        },

        compactButton: {
            minHeight: 0,
            flexDirection: "row",
            justifyContent: "center",
        },

        fab: { margin: mgS },

        fabBottomRight: {
            position: "absolute",
            bottom: pdVm,
            right: pdHm,
        },

        titledButtonTitle: {
            textAlign: "left",
            position: "absolute",
            zIndex: zIndexL,
            fontWeight: "bold",
            borderRadius: bRss,
            top: -pdVs,
            left: pdHs,
            paddingHorizontal: pdVss,
            backgroundColor: colors.text,
        },

        titledButtonView: {
            borderWidth: 1,
            borderRadius: bRss,
            backgroundColor: colors.surface,
            // backgroundColor: colorDictionary.colorSet[appearance].background,
        },

        titledButton: {
            minHeight: buttonHeight,
            justifyContent: "flex-start",
        },

        fdrr: {
            flexDirection: "row-reverse",
        },
    });
