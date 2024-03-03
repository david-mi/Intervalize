import * as React from "react";
import { Modal, View } from "react-native";
import ColorPicker, { Panel1, Preview, OpacitySlider, type returnedResults, HueSlider, type ColorPickerRef } from "reanimated-color-picker";

import { styles } from "./display.styles"

import CustomButton from "@/components/CustomButton/CustomButton";
import { GlobalContext } from "@/context/GlobalContext";
import { UserSettingsContext } from "@/context/UserSettingsContext";
import type { IntensityLevel } from "@/types";

function Display() {
  const { userSettings } = React.useContext(GlobalContext)
  const { updateUserSettings } = React.useContext(UserSettingsContext)
  const [showModal, setShowModal] = React.useState(false);
  const colorPickerValueRef = React.useRef<string>("")
  const [colorPickerValue, setColorPickerValue] = React.useState(userSettings.intensityColors.LOW)
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

  return (
    <View style={styles.container}>
      <CustomButton
        onPress={toggleModal}
        theme="rectangle"
        title="Easy Color"
      />
      <Modal animationType="slide" visible={showModal}>
        <View style={{ ...styles.colorPickerContainer, backgroundColor: colorPickerValue }}>
          <ColorPicker
            onChange={onSelectColor}
            style={styles.colorPicker}
            value={userSettings.intensityColors.LOW}
          >
            <Preview style={styles.preview} />
            <Panel1 boundedThumb />
            <HueSlider boundedThumb />
            <OpacitySlider boundedThumb />
            <View style={styles.buttonsContainer}>
              <CustomButton
                icon={{ name: "check" }}
                onPress={() => changeColor("LOW")}
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
    </View>
  );
}

export default Display