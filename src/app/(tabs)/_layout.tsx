import { MaterialIcons } from "@expo/vector-icons";
import HeaderNavigationButton from "@shared/HeaderNavigationButton/HeaderNavigationButton";
import { Tabs } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";

import useBoundedStore from "@/store/store";
import { globalStyle } from "@/styles/styles.variables.global";

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
        headerTintColor: globalStyle.headerColor,
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: globalStyle.headerColor,
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: currentSessionName || t("currentSession"),
          tabBarLabel: t("currentSession"),
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              color={focused ? "red" : globalStyle.headerColor}
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
              color={focused ? "red" : globalStyle.headerColor}
              name="format-list-bulleted"
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}