import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react"

import CurrentSession from "./tabs/CurrentSession/CurrentSession";
import MySessions from "./tabs/MySessions/MySessions";

import HeaderNavigationButton from "@/components/HeaderNavigationButton/HeaderNavigationButton";
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
      })}
    >
      <Tab.Screen
        component={CurrentSession}
        name="Séance en cours"
        options={{
          tabBarLabel: "Séance en cours",
          tabBarIcon: () => (
            <MaterialIcons
              color="black"
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
          tabBarIcon: () => (
            <MaterialIcons
              color="black"
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
