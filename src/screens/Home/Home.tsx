import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as React from "react"

import CurrentSession from "./tabs/CurrentSession/CurrentSession";
import MySessions from "./tabs/MySessions/MySessions";

import OpenUserSettingsButton from "@/components/OpenUserSettingsButton/OpenUserSettingsButton";
import type { TabNavParamList, RootStackParamList } from "@/types";

const Tab = createBottomTabNavigator<TabNavParamList>();

type Props = NativeStackScreenProps<RootStackParamList, "Home">

function Home({ navigation }: Props) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Séance en cours"
        component={CurrentSession}
        options={{
          headerRight: () => <OpenUserSettingsButton navigation={navigation} />,
          tabBarLabel: "Séance en cours",
          tabBarIcon: () => <MaterialIcons name="directions-run" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Mes séances"
        component={MySessions}
        options={{
          headerRight: () => <OpenUserSettingsButton navigation={navigation} />,
          tabBarLabel: "Mes séances",
          tabBarIcon: () => <MaterialIcons name="format-list-bulleted" size={24} color="black" />,
        }}
      />
    </Tab.Navigator>
  )
}

export default Home
