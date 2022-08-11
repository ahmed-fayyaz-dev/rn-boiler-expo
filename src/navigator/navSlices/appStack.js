// import React, { useEffect, useState, useRef } from "react";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import Dashboard from "../../screens/dashboard";
// const Stack = createNativeStackNavigator();

// const AppStack = (props) => {
//   const [ready, setready] = useState(false);

//   useEffect(async () => {
//     //async Function
//     setready(true);
//   }, []);

//   if (!ready) return null;
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//         headerMode: "float",
//       }}
//     >
//       <Stack.Screen name="dashboard" component={Dashboard} />
//     </Stack.Navigator>
//   );
// };

// export default AppStack;
