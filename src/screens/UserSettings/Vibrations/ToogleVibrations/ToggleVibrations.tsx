import { Vibration } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import * as React from "react"
import { UserSettingsContext } from "@/context/UserSettingsContext";
import { GlobalContext } from "@/context/GlobalContext";

function ToogleVibrations() {
  const { updateUserSettings } = React.useContext(UserSettingsContext)
  const { userSettings } = React.useContext(GlobalContext)

  function onPress(checked: boolean) {
    const vibrationPattern = [0, 400, 80, 400]

    if (checked) {
      Vibration.vibrate(vibrationPattern)
    }

    updateUserSettings("vibrationsEnabled", checked)
  }

  return (
    <BouncyCheckbox
      size={25}
      fillColor="#5c5855"
      unfillColor="#FFFFFF"
      text="Activer"
      style={{ width: "100%", paddingVertical: 25 }}
      innerIconStyle={{ borderWidth: 2 }}
      textStyle={{
        fontSize: 20,
        textDecorationLine: "none",
        lineHeight: 23,
        color: "#5c5855"
      }}
      isChecked={userSettings.vibrationsEnabled}
      onPress={onPress}
    />
  );
}

export default ToogleVibrations;