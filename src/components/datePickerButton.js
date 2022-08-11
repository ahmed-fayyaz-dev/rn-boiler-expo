import React, { useState } from "react";
import { format as changeFormat } from "date-fns";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { HelperText } from "react-native-paper";

import { CustomInputButton } from "./buttons";

export const DatePickerButton = ({
    stateDate = new Date(),
    onChange,
    format = "dd/MMM/yyyy",
    helper,
    title,
    disabled,
}) => {
    const [show, setShow] = useState(false);
    let date = new Date(Date.parse(stateDate));
    const [localDate, setLocalDate] = useState(date);

    const showDatepicker = () => {
        setShow(true);
    };

    const hideDatePicker = () => {
        setShow(false);
    };

    const onChangeDate = (v) => {
        const currentDate = v;
        try {
            setLocalDate(v);
            hideDatePicker();
            onChange(v);
        } catch (e) {
            console.error("Date picker event", currentDate, e);
        }
    };

    return (
        <>
            <CustomInputButton
                editable={false}
                label={title}
                value={changeFormat(localDate, format)}
                icon={"calendar-outline"}
                onPress={showDatepicker}
                disabled={disabled}
            />

            <DateTimePickerModal
                isVisible={show}
                value={localDate}
                mode={"date"}
                display="calendar"
                onConfirm={onChangeDate}
                onCancel={hideDatePicker}
            />

            {helper && <HelperText type="error">{helper}</HelperText>}
        </>
    );
};
