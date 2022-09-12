// import React, { lazy, Suspense } from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { icons } from "../../assets/images";
// import gloabalStyle from "../styles/index";
// import { useTheme } from "react-native-paper";
// import { BottomBarIcons } from "../constants";
// import TabBar from "../components/customBottomTab";

// const BottomTab = createBottomTabNavigator();

// const TabNavigator = () => {
//   const { colors } = useTheme();
//   return (
//     <BottomTab.Navigator
//       // initialRouteName="storesStack"
//       tabBar={({ state, descriptors, navigation }) =>
//         TabBar({
//           colors: colors,
//           state: state,
//           descriptors: descriptors,
//           navigation: navigation,
//         })
//       }
//       screenOptions={{
//         tabBarInactiveTintColor: colors.disabled,
//         tabBarActiveTintColor: colors.primary,
//         headerShown: false,
//       }}
//     >
//       {/* <BottomTab.Screen
//         options={{
//           tabBarLabel: "Stores",
//         }}
//         name="storesStack"
//         component={StoresStack}
//       />
//        */}
//     </BottomTab.Navigator>
//   );
// };

// export default TabNavigator;
