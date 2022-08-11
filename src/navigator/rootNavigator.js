import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { connect } from "react-redux";

import DrawerNav from "./drawerNav";
import AuthStack from "./navSlices/authStack";
// import MasterFormStack from "./navSlices/masterFormStack";

const Stack = createNativeStackNavigator();

const RootNavigator = ({
    loggedIn,
    // ...props
}) => {
    return (
        <Stack.Navigator
            initialRouteName={loggedIn.current ? "drawerNav" : "authStack"}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="authStack" component={AuthStack} />
            <Stack.Screen name="drawerNav" component={DrawerNav} />
            {/* <Stack.Screen name="masterFormStack" component={MasterFormStack} /> */}
        </Stack.Navigator>
    );
};

function mapStateToProps({ loginUserReducer }) {
    return { loginUserReducer };
}
export default connect(mapStateToProps, {})(RootNavigator);
