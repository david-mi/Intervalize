import { MaterialIcons } from "@expo/vector-icons";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList } from "react-native";

import { styles } from "./userSettingsList.styles";

import CustomButton from "@/components/CustomButton/CustomButton";
import type { UserSettingsParamList } from "@/types";

type Props = NativeStackScreenProps<UserSettingsParamList, "List">

function UserSettingsList({ navigation }: Props) {

  const settingsRoutesList: {
    routeName: keyof Omit<UserSettingsParamList, "List">,
    displayName: string,
    iconName: keyof typeof MaterialIcons.glyphMap
  }[] = [
      { routeName: "Vibrations", displayName: "Vibrations", iconName: "vibration" },
    ]

  return (
    <FlatList
      data={settingsRoutesList}
      contentContainerStyle={styles.container}
      keyExtractor={({ routeName }, index) => routeName + index}
      renderItem={({ item: { displayName, routeName, iconName } }) => (
        <CustomButton
          onPress={() => navigation.navigate(routeName)}
          theme="navigation"
          title={displayName}
          icon={{ name: iconName }}
        />
      )}
    />
  );
}

export default UserSettingsList;