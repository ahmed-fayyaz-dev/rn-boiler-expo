import React, { useState, useEffect, useRef, useCallback } from "react";
import { Appearance, I18nManager } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import i18n from "i18n-js";
import { Provider as PaperProvider } from "react-native-paper";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getStorageItem } from "src/helpers";
import RootNavigator from "./rootNavigator";
import { callApi } from "src/helpers/apiCall";
import {
    ONBOARD,
    ID,
    PASSWORD,
    LANGUAGE,
    RTL_LANGS,
} from "src/helpers/constants";
import { setLanguage } from "src/redux/common/actions/actions";
import { submitLoginAccount } from "src/screens/login/actions/actions";
import {
    paperLightTheme,
    paperDarkTheme,
    navDarkTheme,
    navLightTheme,
} from "src/styles/theme";

//App nav
function AppNavigator(props) {
    const { submitLoginAccount, setLanguage } = props;

    const [ready, setReady] = useState(false);
    const [theme, setTheme] = useState(paperLightTheme);
    const [navTheme, setNavTheme] = useState(navLightTheme);
    const loggedIn = useRef(false);
    const board = useRef(false);

    useEffect(() => {
        async function effect() {
            changeTheme(Appearance.getColorScheme() || "light");
            setRedux();

            board.current = await getStorageItem(ONBOARD);

            if (board.current) {
                await getData();
            } else {
                setReady(true);
            }
        }
        effect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const unsubscribe = Appearance.addChangeListener(themeListener);
        return () => {
            unsubscribe.remove();
        };
    }, [themeListener]);

    const changeTheme = (c) => {
        if (c == "dark") {
            setTheme(paperDarkTheme);
            setNavTheme(navDarkTheme);
        } else {
            setTheme(paperLightTheme);
            setNavTheme(navLightTheme);
        }
    };

    const themeListener = useCallback(({ colorScheme }) => {
        changeTheme(colorScheme || "light");
    }, []);

    const setRedux = async () => {
        const language = await getStorageItem(LANGUAGE);

        if (language) {
            setLanguage(language);
            i18n.locale = language;

            if (RTL_LANGS.includes(language)) {
                try {
                    I18nManager.forceRTL(true);
                } catch (e) {
                    console.error(e);
                }
            } else {
                try {
                    I18nManager.forceRTL(false);
                } catch (e) {
                    console.error(e);
                }
            }
        }
    };

    async function getData() {
        const id = await getStorageItem(ID);
        const password = await getStorageItem(PASSWORD);

        if (id && password) {
            let data = {
                email: id.toLocaleLowerCase(),
                password: password,
            };

            await callApi({
                data: data,
                submitCallApi: submitLoginAccount,
                successFunc: async () => {
                    loggedIn.current = true;
                    setReady(true);
                },
                errFunc: () => {
                    setReady(true);
                },
                catchFunc: () => {
                    setReady(true);
                },
                setLoading: () => {},
            });
        } else {
            setReady(true);
        }
    }

    if (ready) {
        return (
            <PaperProvider
                theme={theme}
                settings={{
                    icon: (props) => <Ionicons {...props} />,
                }}
            >
                <NavigationContainer theme={navTheme}>
                    <RootNavigator loggedIn={loggedIn} />
                </NavigationContainer>
            </PaperProvider>
        );
    } else return null;
}

function mapStateToProps({ loginUserReducer }) {
    return { loginUserReducer };
}

function mapDispatchToProps(dispatch, getState) {
    return bindActionCreators(
        { setLanguage, submitLoginAccount },
        dispatch,
        getState
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);
