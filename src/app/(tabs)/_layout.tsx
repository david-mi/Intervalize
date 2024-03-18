import { MaterialIcons } from "@expo/vector-icons";
import HeaderNavigationButton from "@shared/HeaderNavigationButton/HeaderNavigationButton";
import useBoundedStore from "@store/store";
import { Tabs } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import { useStyles } from "react-native-unistyles";

export default function TabLayout() {
  const { t } = useTranslation()
  const currentSessionName = useBoundedStore(({ currentSession }) => currentSession?.name)
  const { theme } = useStyles()

  return (
    <Tabs
      screenOptions={() => ({
        headerRight: () => (
          <HeaderNavigationButton
            iconProps={{ name: "settings" }}
            screenDestination="settings"
          />
        ),
        animation: "slide_from_right",
        headerTintColor: theme.COLORS.HEADER_TEXT,
        tabBarActiveTintColor: theme.COLORS.TERTIARY,
        tabBarInactiveTintColor: theme.COLORS.TEXT,
        tabBarActiveBackgroundColor: theme.COLORS.TAB_BAR,
        tabBarInactiveBackgroundColor: theme.COLORS.TAB_BAR,
        tabBarStyle: { borderTopWidth: 0 },
        headerStyle: {
          backgroundColor: theme.COLORS.HEADER,
        },
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: currentSessionName || t("currentSession"),
          tabBarLabel: t("currentSession"),
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              color={focused ? theme.COLORS.TERTIARY : theme.COLORS.TEXT}
              name="directions-run"
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="mySessions"
        options={{
          title: t("mySessions"),
          tabBarLabel: t("mySessions"),
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              color={focused ? theme.COLORS.TERTIARY : theme.COLORS.TAB_BAR_TEXT}
              name="format-list-bulleted"
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}