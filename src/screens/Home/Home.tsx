import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react"
import { useTranslation } from "react-i18next";

import CurrentSession from "./tabs/CurrentSession/CurrentSession";
import MySessions from "./tabs/MySessions/MySessions";

import HeaderNavigationButton from "@/components/HeaderNavigationButton/HeaderNavigationButton";
import useBoundedStore from "@/store/store";
import { globalStyle } from "@/styles/styles.variables.global";
import type { TabNavParamList } from "@/types";

const Tab = createBottomTabNavigator<TabNavParamList>();

function Home() {
  const { t } = useTranslation()
  const currentSessionName = useBoundedStore(({ currentSession }) => currentSession?.name)
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        headerRight: () => (
          <HeaderNavigationButton
            buttonProps={{ style: { marginRight: 15 } }}
            iconProps={{ name: "settings" }}
            navigation={navigation}
            screenDestination="Settings"
          />
        ),
        animation: "slide_from_right",
        headerTintColor: globalStyle.headerColor,
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: globalStyle.headerColor,
      })}
    >
      <Tab.Screen
        component={CurrentSession}
        name="Séance en cours"
        options={{
          title: currentSessionName || t("Home.currentSession"),
          tabBarLabel: t("Home.currentSession"),
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              color={focused ? "red" : globalStyle.headerColor}
              name="directions-run"
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        component={MySessions}
        name="Mes séances"
        options={{
          title: t("Home.mySessions"),
          tabBarLabel: t("Home.mySessions"),
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              color={focused ? "red" : globalStyle.headerColor}
              name="format-list-bulleted"
              size={24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default Home
