import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabNavParamList, RootStackParamList } from "@/types";
import CurrentSession from "./tabs/CurrentSession/CurrentSession";
import OpenUserSettingsButton from "@/components/OpenUserSettingsButton/OpenUserSettingsButton";
import MySessions from "./tabs/MySessions/MySessions";
import { MaterialIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as React from "react"

const Tab = createBottomTabNavigator<TabNavParamList>();

type Props = NativeStackScreenProps<RootStackParamList, "Home">

function Home({ navigation }: Props) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={"Session en cours"}
        component={CurrentSession}
        options={{
          headerRight: () => <OpenUserSettingsButton navigation={navigation} />,
          tabBarLabel: "Session en cours",
          tabBarIcon: () => <MaterialIcons name="directions-run" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Mes sessions"
        component={MySessions}
        options={{
          headerRight: () => <OpenUserSettingsButton navigation={navigation} />,
          tabBarLabel: "Mes sessions",
          tabBarIcon: () => <MaterialIcons name="format-list-bulleted" size={24} color="black" />
        }}
      />
    </Tab.Navigator>
  )
}

export default Home
