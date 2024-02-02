import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, Ionicons } from '@expo/vector-icons';
import CurrentSession from "../components/CurrentSession/CurrentSession";
import MySessions from "../components/MySessions/MySessions";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name={"Session en cours"}
          component={CurrentSession}
          options={{
            tabBarLabel: "Session en cours",
            tabBarIcon: () => <Ionicons name="timer-outline" size={24} color="black" />
          }}
        />
        <Tab.Screen
          name="Mes sessions"
          component={MySessions}
          options={{
            tabBarLabel: "Mes sessions",
            tabBarIcon: () => <Feather name="list" size={24} color="black" />
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}