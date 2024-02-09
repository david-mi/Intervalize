import { View, Text } from "react-native";
import { styles } from "./userSettings.styles";
import { SectionList } from "react-native";
import Vibrations from "./Vibrations/Vibrations";
import { useUserSettings } from "@/hooks/useUserSettings";

function UserSettings() {
  const {
    updateUserSettings,
    updateError,
    vibrationsEnabled
  } = useUserSettings()

  const sections = [
    {
      title: "Vibrations",
      data: ["vibrations"]
    }
  ]

  const userSettingsComponents = {
    "vibrations": (
      <Vibrations
        updateUserSettings={updateUserSettings}
        vibrationsEnabled={vibrationsEnabled}
      />
    )
  }

  if (updateError) {
    console.log(updateError)
  }

  return (
    <View>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item + index}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => userSettingsComponents[item as keyof typeof userSettingsComponents]}
        renderSectionHeader={({ section: { title } }) => <Text style={styles.header}>{title}</Text>}
      />
    </View>
  );
};

export default UserSettings;