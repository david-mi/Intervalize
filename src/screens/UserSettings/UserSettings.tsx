import Vibrations from "./Vibrations/Vibrations";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserSettingsList from "./UserSettingsList/UserSettingsList";
import UserSettingsContextProvider from "@/context/UserSettingsContext";
import type { UserSettingsParamList } from "@/types";

const Stack = createNativeStackNavigator<UserSettingsParamList>();

function UserSettingsRoute() {
  return (
    <UserSettingsContextProvider>
      <Stack.Navigator>
        <Stack.Screen name="List" component={UserSettingsList} />
        <Stack.Screen name="Vibrations" component={Vibrations} />
      </Stack.Navigator>
    </UserSettingsContextProvider>
  );
}

export default UserSettingsRoute;