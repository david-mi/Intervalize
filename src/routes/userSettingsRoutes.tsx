import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Vibrations from "@/screens/UserSettings/Vibrations/Vibrations";
import UserSettingsList from "@/screens/UserSettings/UserSettingsList/UserSettingsList";
import UserSettingsContextProvider from "@/context/UserSettingsContext";
import type { UserSettingsParamList } from "@/types";

const Stack = createNativeStackNavigator<UserSettingsParamList>();

function UserSettingsRoutes() {
  return (
    <UserSettingsContextProvider>
      <Stack.Navigator screenOptions={{ animation: "slide_from_right" }}>
        <Stack.Screen name="List" component={UserSettingsList} />
        <Stack.Screen name="Vibrations" component={Vibrations} />
      </Stack.Navigator>
    </UserSettingsContextProvider>
  );
}

export default UserSettingsRoutes;