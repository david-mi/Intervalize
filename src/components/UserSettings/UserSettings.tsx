import { MaterialIcons } from "@expo/vector-icons";
import CustomButton from "@shared/CustomButton/CustomButton";
import { Link } from "expo-router";
import { useTranslation } from "react-i18next";
import { FlatList } from "react-native";

import { styles } from "./userSettings.styles";

function UserSettingsList() {
  const { t } = useTranslation()

  const settingsRoutesList: {
    routeName: string,
    displayName: string,
    iconName: keyof typeof MaterialIcons.glyphMap
  }[] = [
      { routeName: "settings/vibrations", displayName: t("vibrations"), iconName: "vibration" },
      { routeName: "settings/display", displayName: t("display"), iconName: "display-settings" },
    ]

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={settingsRoutesList}
      keyExtractor={({ routeName }, index) => routeName + index}
      renderItem={({ item: { displayName, routeName, iconName } }) => (
        <Link asChild href={routeName}>
          <CustomButton
            icon={{ name: iconName }}
            theme="navigation"
            title={displayName}
          />
        </Link>
      )}
    />
  );
}

export default UserSettingsList;