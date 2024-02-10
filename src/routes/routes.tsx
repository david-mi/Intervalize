import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { RootStackParamList } from "@/types";
import Home from "@/screens/Home/Home";
import UserSettingsRoutes from "./userSettingsRoutes";

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ animation: "slide_from_right" }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Settings"
          component={UserSettingsRoutes}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}