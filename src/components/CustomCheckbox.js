import * as React from "react";
import { Checkbox } from "react-native-paper";

export const CustomCheckbox = ({ status, onPress, children }) => {
    // const [checked, setChecked] = React.useState(false);

    return (
        <Checkbox status={status ? "checked" : "unchecked"} onPress={onPress}>
            {children}
        </Checkbox>
    );
};
