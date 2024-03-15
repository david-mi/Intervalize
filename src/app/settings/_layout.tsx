import HeaderNavigationButton from "@shared/HeaderNavigationButton/HeaderNavigationButton";
import { Stack } from "expo-router";
import { t } from "i18next";
import React from "react";

import { THEME } from "@/constants/theme";

export default function TabLayout() {
  return (
    <Stack
      screenOptions={{
        headerRight: () => (
          <HeaderNavigationButton
            iconProps={{ name: "home" }}
            screenDestination="/"
          />
        ),
        animation: "slide_from_right",
        headerTintColor: THEME.COLORS.HEADER,
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerTitle: t("settings") }}
      />
      <Stack.Screen
        name="vibrations"
        options={{ headerTitle: t("vibrations") }}
      />
      <Stack.Screen
        name="display"
        options={{ headerTitle: t("display") }}
      />
    </Stack>
  );
}

