import { MaterialIcons } from "@expo/vector-icons";
import HeaderNavigationButton from "@shared/HeaderNavigationButton/HeaderNavigationButton";
import useBoundedStore from "@store/store";
import { Tabs } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";

import { THEME } from "@/constants/theme";

export default function TabLayout() {
  const { t } = useTranslation()
  const currentSessionName = useBoundedStore(({ currentSession }) => currentSession?.name)

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
        headerTintColor: THEME.COLORS.HEADER_TEXT,
        tabBarActiveTintColor: THEME.COLORS.TERTIARY,
        tabBarInactiveTintColor: THEME.COLORS.TEXT,
        tabBarActiveBackgroundColor: THEME.COLORS.TAB_BAR,
        tabBarInactiveBackgroundColor: THEME.COLORS.TAB_BAR,
        tabBarStyle: { borderTopWidth: 0 },
        headerStyle: {
          backgroundColor: THEME.COLORS.HEADER,
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
              color={focused ? THEME.COLORS.TERTIARY : THEME.COLORS.TEXT_LIGHT}
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
              color={focused ? THEME.COLORS.TERTIARY : THEME.COLORS.TAB_BAR_TEXT}
              name="format-list-bulleted"
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}