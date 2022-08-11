import "react-native-gesture-handler";
import "expo-dev-client";
import React from "react";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
    SafeAreaProvider,
    initialWindowMetrics,
} from "react-native-safe-area-context";
import { Provider as StoreProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { settings } from "src/settings";
import ErrorBoundary from "src/components/errorBoundary";
import AppNavigator from "src/navigator/navigation";
import { store, persistor } from "src/redux/store";

settings;

export default function App() {
    return (
        <ErrorBoundary>
            <GestureHandlerRootView style={styles.container}>
                <SafeAreaProvider initialMetrics={initialWindowMetrics}>
                    <StoreProvider store={store}>
                        <PersistGate loading={null} persistor={persistor}>
                            <AppNavigator />
                        </PersistGate>
                    </StoreProvider>
                </SafeAreaProvider>
            </GestureHandlerRootView>
        </ErrorBoundary>
    );
}

// export default Sentry.Native.wrap(App)     ;
const styles = StyleSheet.create({
    container: { flex: 1 },
});
