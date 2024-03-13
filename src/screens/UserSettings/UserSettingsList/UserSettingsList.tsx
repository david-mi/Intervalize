import { MaterialIcons } from "@expo/vector-icons";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useTranslation } from "react-i18next";
import { FlatList } from "react-native";

import { styles } from "./userSettingsList.styles";

import CustomButton from "@/components/CustomButton/CustomButton";
import type { UserSettingsParamList } from "@/types";

type Props = NativeStackScreenProps<UserSettingsParamList, "List">

function UserSettingsList({ navigation }: Props) {
  const { t } = useTranslation()

  const settingsRoutesList: {
    routeName: keyof Omit<UserSettingsParamList, "List">,
    displayName: string,
    iconName: keyof typeof MaterialIcons.glyphMap
  }[] = [
      { routeName: "Vibrations", displayName: t("vibrations"), iconName: "vibration" },
      { routeName: "Display", displayName: t("display"), iconName: "display-settings" },
    ]

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={settingsRoutesList}
      keyExtractor={({ routeName }, index) => routeName + index}
      renderItem={({ item: { displayName, routeName, iconName } }) => (
        <CustomButton
          icon={{ name: iconName }}
          onPress={() => navigation.navigate(routeName)}
          theme="navigation"
          title={displayName}
        />
      )}
    />
  );
}

export default UserSettingsList;