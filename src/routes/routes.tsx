import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import UserSettingsRoutes from "./userSettingsRoutes";

import Home from "@/screens/Home/Home";
import type { RootStackParamList } from "@/types";

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: "slide_from_right",
          contentStyle: { backgroundColor: "white" },
        }}
      >
        <Stack.Screen
          component={Home}
          name="Home"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          component={UserSettingsRoutes}
          name="Settings"
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}