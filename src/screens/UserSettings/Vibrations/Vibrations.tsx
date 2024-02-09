import { Vibration, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { CustomFontsList } from "@/types";
import * as React from "react"
import { UserSettingsContext } from "@/context/UserSettingsContext";
import { GlobalContext } from "@/context/GlobalContext";

function Vibrations() {
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
    <View>
      <BouncyCheckbox
        size={35}
        fillColor="black"
        unfillColor="#FFFFFF"
        text="Activer"
        innerIconStyle={{ borderWidth: 2 }}
        textStyle={{
          fontFamily: CustomFontsList.OSWALD_REGULAR,
          fontSize: 20,
          textDecorationLine: "none",
          lineHeight: 27,
          color: "black"
        }}
        isChecked={userSettings.vibrationsEnabled}
        onPress={onPress}
      />
    </View>
  );
}

export default Vibrations;