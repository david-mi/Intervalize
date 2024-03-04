import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import HeaderNavigationButton from "@/components/HeaderNavigationButton/HeaderNavigationButton";
import UserSettingsContextProvider from "@/context/UserSettingsContext";
import Display from "@/screens/UserSettings/Display/Display";
import UserSettingsList from "@/screens/UserSettings/UserSettingsList/UserSettingsList";
import Vibrations from "@/screens/UserSettings/Vibrations/Vibrations";
import type { UserSettingsParamList } from "@/types";

const Stack = createNativeStackNavigator<UserSettingsParamList>();

function UserSettingsRoutes() {
  return (
    <UserSettingsContextProvider>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          headerRight: () => (
            <HeaderNavigationButton
              iconProps={{ name: "home" }}
              navigation={navigation}
              screenDestination="Home"
            />
          ),
          animation: "slide_from_right",
        })}
      >
        <Stack.Screen
          component={UserSettingsList}
          name="List"
          options={{ headerTitle: "Liste" }}
        />
        <Stack.Screen
          component={Vibrations}
          name="Vibrations"
          options={{ headerTitle: "Vibrations" }}
        />
        <Stack.Screen
          component={Display}
          name="Display"
          options={{ headerTitle: "Affichage" }}
        />
      </Stack.Navigator>
    </UserSettingsContextProvider>
  );
}

export default UserSettingsRoutes;