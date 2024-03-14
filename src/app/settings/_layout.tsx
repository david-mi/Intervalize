import { Stack } from "expo-router";
import { t } from "i18next";
import React from "react";

import HeaderNavigationButton from "@/components/HeaderNavigationButton/HeaderNavigationButton";
import { globalStyle } from "@/styles/styles.variables.global";

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
        contentStyle: { backgroundColor: "white" },
        headerTintColor: globalStyle.headerColor,
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerTitle: t("optionsList") }}
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