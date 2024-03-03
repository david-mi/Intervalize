import * as React from "react"
import { Modal, View } from "react-native";
import ColorPicker, { Preview, Panel1, HueSlider, OpacitySlider, type returnedResults } from "reanimated-color-picker";

import { styles } from "./selectIntensityColor.styles";

import CustomButton from "@/components/CustomButton/CustomButton";
import type { IntensityLevel, UserSettings } from "@/types";

interface Props {
  userSettings: UserSettings,
  updateUserSettings: <K extends keyof UserSettings>(settingName: K, settingValue: UserSettings[K]) => Promise<void>
  intensityLevel: IntensityLevel
}

function SelectIntensityColor({ userSettings, updateUserSettings, intensityLevel }: Props) {
  const [showModal, setShowModal] = React.useState(false);
  const colorPickerValueRef = React.useRef<string>("")
  const [colorPickerValue, setColorPickerValue] = React.useState(userSettings.intensityColors[intensityLevel])
  const throttleTimeoutRef = React.useRef<NodeJS.Timeout | null>(null)

  function toggleModal() {
    setShowModal((showModal) => !showModal)
  }

  const onSelectColor = ({ hex }: returnedResults) => {
    colorPickerValueRef.current = hex

    if (throttleTimeoutRef.current !== null) return

    throttleTimeoutRef.current = setTimeout(() => {
      setColorPickerValue(hex)
      throttleTimeoutRef.current = null
    }, 100)
  };

  function changeColor(intensityLevel: IntensityLevel) {
    updateUserSettings("intensityColors", {
      ...userSettings.intensityColors,
      [intensityLevel]: colorPickerValueRef.current,
    })
    toggleModal()
  }

  const intensityTitles: { [intensityLevel in IntensityLevel]: string } = {
    LOW: "Faible",
    MEDIUM: "Moyenne",
    HARD: "Elevée",
  }

  return (
    <>
      <CustomButton
        onPress={toggleModal}
        style={{ backgroundColor: userSettings.intensityColors[intensityLevel] }}
        theme="rectangle"
        title={intensityTitles[intensityLevel]}
      />
      <Modal animationType="slide" visible={showModal}>
        <View style={{ ...styles.colorPickerContainer, backgroundColor: colorPickerValue }}>
          <ColorPicker
            onChange={onSelectColor}
            style={styles.colorPicker}
            value={userSettings.intensityColors[intensityLevel]}
          >
            <Preview style={styles.preview} />
            <Panel1 boundedThumb />
            <HueSlider boundedThumb />
            <OpacitySlider boundedThumb />
            <View style={styles.buttonsContainer}>
              <CustomButton
                icon={{ name: "check" }}
                onPress={() => changeColor(intensityLevel)}
                theme="control"
              />
              <CustomButton
                icon={{ name: "close" }}
                onPress={toggleModal}
                theme="control"
              />
            </View>
          </ColorPicker>
        </View>
      </Modal>
    </>
  );
}

export default SelectIntensityColor;