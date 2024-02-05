import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
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
            tabBarIcon: () => <MaterialIcons name="directions-run" size={24} color="black" />
          }}
        />
        <Tab.Screen
          name="Mes sessions"
          component={MySessions}
          options={{
            tabBarLabel: "Mes sessions",
            tabBarIcon: () => <MaterialIcons name="format-list-bulleted" size={24} color="black" />
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}