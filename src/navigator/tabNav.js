// import React, { lazy, Suspense } from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { icons } from "../../assets/images";
// import gloabalStyle from "../styles/index";
// import { useTheme } from "react-native-paper";
// import { BottomBarIcons } from "../constants";
// import TabBar from "../components/customBottomTab";

// // import StoresStack from "./navSlices/storesStack";
// // import RestaurantsStack from "./navSlices/restaurantsStack";
// // import FavouritesStack from "./navSlices/favouritesStack";
// // import CouponsStack from "./navSlices/couponsStack";

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
//       <BottomTab.Screen
//         options={{
//           tabBarLabel: "Favourites",
//         }}
//         name="favouritesStack"
//         component={FavouritesStack}
//       />
//       <BottomTab.Screen
//         options={{
//           tabBarLabel: "Restaurants",
//         }}
//         name="RestaurantsStack"
//         component={RestaurantsStack}
//       />
//       <BottomTab.Screen
//         options={{
//           tabBarLabel: "Coupons",
//         }}
//         name="couponsStack"
//         component={CouponsStack}
//       /> */}
//     </BottomTab.Navigator>
//   );
// };

// export default TabNavigator;
