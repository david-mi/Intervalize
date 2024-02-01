import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, Ionicons } from '@expo/vector-icons';

function CreatedIntervals() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function CurrentInterval() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Current Interval"
          component={CurrentInterval}
          options={{
            tabBarLabel: "Current Interval",
            tabBarIcon: () => <Ionicons name="timer-outline" size={24} color="black" />
          }}
        />
        <Tab.Screen
          name="Created Intervals"
          component={CreatedIntervals}
          options={{
            tabBarLabel: "Created Intervals",
            tabBarIcon: () => <Feather name="list" size={24} color="black" />
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}