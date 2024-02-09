import { View, Text } from "react-native";
import { styles } from "./userSettings.styles";
import { SectionList, Alert } from "react-native";
import Vibrations from "./Vibrations/Vibrations";
import { useUserSettings } from "@/hooks/useUserSettings";

function UserSettings() {
  const {
    updateUserSettings,
    updateError,
    setUpdateError,
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
    Alert.alert(
      "Erreur",
      updateError.message,
      [{
        text: "Ok",
        onPress: () => setUpdateError(null),
      },],
      {
        cancelable: true,
        onDismiss: () => setUpdateError(null)
      }
    );
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