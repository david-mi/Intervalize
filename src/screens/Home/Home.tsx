import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react"

import CurrentSession from "./tabs/CurrentSession/CurrentSession";
import MySessions from "./tabs/MySessions/MySessions";

import HeaderNavigationButton from "@/components/HeaderNavigationButton/HeaderNavigationButton";
import { globalStyle } from "@/styles/styles.variables.global";
import type { TabNavParamList } from "@/types";

const Tab = createBottomTabNavigator<TabNavParamList>();

function Home() {
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
          tabBarLabel: "Séance en cours",
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
          tabBarLabel: "Mes séances",
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
