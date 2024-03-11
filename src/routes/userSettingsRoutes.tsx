import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useTranslation } from "react-i18next";

import HeaderNavigationButton from "@/components/HeaderNavigationButton/HeaderNavigationButton";
import Display from "@/screens/UserSettings/Display/Display";
import UserSettingsList from "@/screens/UserSettings/UserSettingsList/UserSettingsList";
import Vibrations from "@/screens/UserSettings/Vibrations/Vibrations";
import { globalStyle } from "@/styles/styles.variables.global";
import type { UserSettingsParamList } from "@/types";

const Stack = createNativeStackNavigator<UserSettingsParamList>();

function UserSettingsRoutes() {
  const { t } = useTranslation()

  return (
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
        contentStyle: { backgroundColor: "white" },
        headerTintColor: globalStyle.headerColor,
      })}
    >
      <Stack.Screen
        component={UserSettingsList}
        name="List"
        options={{ headerTitle: t("UserSettingsRoutes.list") }}
      />
      <Stack.Screen
        component={Vibrations}
        name="Vibrations"
        options={{ headerTitle: t("UserSettingsRoutes.vibrations") }}
      />
      <Stack.Screen
        component={Display}
        name="Display"
        options={{ headerTitle: t("UserSettingsRoutes.display") }}
      />
    </Stack.Navigator>
  );
}

export default UserSettingsRoutes;