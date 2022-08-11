import { LogBox, StatusBar } from "react-native";
import { useKeepAwake } from "expo-keep-awake";
import i18n from "i18n-js";
// import { connectToDevTools } from "react-devtools-core";
import { enableFreeze } from "react-native-screens";
import * as Sentry from "sentry-expo";

import { SENTRY_DSN } from "src/appConstants";
import { languageDictionary } from "assets/locale/index";
import { CombinedLightTheme } from "src/styles/theme";

// Sentry Setup
export const settings =
    ((i18n.translations = languageDictionary.languageSet),
    (i18n.fallbacks = true),
    Sentry.init({
        dsn: SENTRY_DSN,
        debug: true,
        enableInExpoDevelopment: true,
        enableNative: false,
    }),
    StatusBar.setBackgroundColor(CombinedLightTheme.colors.notification, true),
    StatusBar.setBarStyle("light-content"),
    LogBox.ignoreLogs([
        "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
        "Non-serializable values were found in the navigation state",
    ]),
    enableFreeze(true),
    () => {
        try {
            useKeepAwake();
        } catch (e) {
            console.error(e);
        }

        // eslint-disable-next-line no-undef
        // if (__DEV__) {
        //     connectToDevTools({
        //         host: "localhost",
        //         port: 8097,
        //     });
        // }
    });
