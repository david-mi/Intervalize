import HeaderNavigationButton from "@shared/HeaderNavigationButton/HeaderNavigationButton";
import { Stack } from "expo-router";
import { t } from "i18next";
import React from "react";
import { useStyles } from "react-native-unistyles";

export default function TabLayout() {
  const { theme } = useStyles()

  return (
    <Stack
      screenOptions={{
        headerRight: () => (
          <HeaderNavigationButton
            iconProps={{ name: "home" }}
            screenDestination="/"
            style={{ marginRight: 5 }}
          />
        ),
        animation: "slide_from_right",
        headerTintColor: theme.COLORS.HEADER_TEXT,
        headerStyle: {
          backgroundColor: theme.COLORS.HEADER,
        },
        contentStyle: {
          backgroundColor: theme.COLORS.PRIMARY,
        },
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
