import Vibrations from "@/screens/UserSettings/Vibrations/Vibrations";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserSettingsList from "@/screens/UserSettings/UserSettingsList/UserSettingsList";
import { UserSettingsParamList } from "@/types";

const Stack = createNativeStackNavigator<UserSettingsParamList>();

function UserSettingsRoute() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="UserSettingsList" component={UserSettingsList} />
      <Stack.Screen name="Vibrations" component={Vibrations} />
    </Stack.Navigator>
  );
}

export default UserSettingsRoute;