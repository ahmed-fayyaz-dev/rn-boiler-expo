import React from "react";
import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import { useTheme } from "react-native-paper";

import { loginValidationSchema } from "../helpers";
import { CustomCheckbox } from "src/components/CustomCheckbox";
import CustomInput from "src/components/CustomInput";
import { CustomRoundButton } from "src/components/buttons";
import { CustomText } from "src/components/customText";
import { GapV } from "src/components/gap";

export const Form = ({ onSubmit }) => {
    const { colors } = useTheme();
    const style = styles(colors);

    return (
        <Formik
            // validationSchema={}
            initialValues={{ email: "", password: "", remember: false }}
            onSubmit={(values) => {
                onSubmit(values);
            }}
            validationSchema={loginValidationSchema}
        >
            {({
                handleChange,
                handleBlur,
                handleSubmit,
                setFieldValue,
                values,
                errors,
                touched,
            }) => {
                const handleChangeRemember = () =>
                    setFieldValue("remember", !values.remember);

                return (
                    <>
                        <CustomInput
                            fieldName="email"
                            onChange={handleChange("email")}
                            label="UserId / Email"
                            state={values.email}
                            onBlur={handleBlur("email")}
                            helper={touched.email ? errors.email : null}
                        />
                        <GapV small />

                        <CustomInput
                            secure
                            fieldName="password"
                            onChange={handleChange("password")}
                            label="Password"
                            state={values.password}
                            onBlur={handleBlur("password")}
                            helper={touched.password ? errors.password : null}
                        />
                        <GapV small />

                        <View style={style.fdr}>
                            <CustomCheckbox
                                status={values.remember}
                                onPress={handleChangeRemember}
                            />

                            <CustomText>Remember Me</CustomText>
                        </View>
                        <GapV large />

                        <View style={style.revBottomContainer}>
                            <GapV />

                            <CustomRoundButton
                                title="Login"
                                icon="arrow-forward"
                                onPress={handleSubmit}
                            />
                        </View>
                    </>
                );
            }}
        </Formik>
    );
};

// eslint-disable-next-line no-unused-vars
const styles = (colors) =>
    StyleSheet.create({
        fdr: { flexDirection: "row" },

        revBottomContainer: {
            flexDirection: "column-reverse",
            flex: 1,
        },
    });
