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
            buttonProps={{ style: { marginRight: 15 } }}
            iconProps={{ name: "settings" }}
            screenDestination="settings"
          />
        ),
        animation: "slide_from_right",
        headerTintColor: THEME.COLORS.HEADER,
        tabBarActiveTintColor: THEME.COLORS.TERTIARY,
        tabBarInactiveTintColor: THEME.COLORS.HEADER,
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: currentSessionName || t("currentSession"),
          tabBarLabel: t("currentSession"),
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              color={focused ? THEME.COLORS.TERTIARY : THEME.COLORS.HEADER}
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
              color={focused ? THEME.COLORS.TERTIARY : THEME.COLORS.HEADER}
              name="format-list-bulleted"
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}