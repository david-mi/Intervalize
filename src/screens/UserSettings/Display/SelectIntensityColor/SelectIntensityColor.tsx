import * as React from "react"
import { useTranslation } from "react-i18next";
import { Modal, View } from "react-native";
import ColorPicker, { Preview, Panel1, HueSlider, OpacitySlider, type returnedResults } from "reanimated-color-picker";

import { styles } from "./selectIntensityColor.styles";

import CustomButton from "@/components/CustomButton/CustomButton";
import useBoundedStore from "@/store/store";
import type { IntensityLevel } from "@/types";

interface Props {
  intensityLevel: IntensityLevel
}

function SelectIntensityColor({ intensityLevel }: Props) {
  const userSettings = useBoundedStore((state) => state.userSettings)
  const updateUserSettings = useBoundedStore((state) => state.updateUserSettings)
  const [showModal, setShowModal] = React.useState(false);
  const colorPickerValueRef = React.useRef<string>("")
  const [colorPickerValue, setColorPickerValue] = React.useState(userSettings.intensityColors[intensityLevel])
  const throttleTimeoutRef = React.useRef<NodeJS.Timeout | null>(null)
  const { t } = useTranslation()

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
    LOW: t("SelectIntensityColor.low"),
    MEDIUM: t("SelectIntensityColor.medium"),
    HARD: t("SelectIntensityColor.hard"),
  }

  return (
    <>
      <CustomButton
        icon={{ name: "color-lens" }}
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