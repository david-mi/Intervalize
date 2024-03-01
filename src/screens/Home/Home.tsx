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
        component={CurrentSession}
        name="Séance en cours"
        options={{
          headerRight: () => <OpenUserSettingsButton navigation={navigation} />,
          tabBarLabel: "Séance en cours",
          tabBarIcon: () => <MaterialIcons
            color="black"
            name="directions-run"
            size={24}
          />,
        }}
      />
      <Tab.Screen
        component={MySessions}
        name="Mes séances"
        options={{
          headerRight: () => <OpenUserSettingsButton navigation={navigation} />,
          tabBarLabel: "Mes séances",
          tabBarIcon: () => <MaterialIcons
            color="black"
            name="format-list-bulleted"
            size={24}
          />,
        }}
      />
    </Tab.Navigator>
  )
}

export default Home
