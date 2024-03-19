import useBoundedStore from "@store/store";
import * as React from "react"
import { useTranslation } from "react-i18next";
import BouncyCheckboxGroup, {
  type ICheckboxButton
} from "react-native-bouncy-checkbox-group";
import { UnistylesRuntime, useStyles } from "react-native-unistyles";

import { styles as styleSheet } from "./selectTheme.styles"

import type { Theme } from "@/types";

function SelectTheme() {
  const userTheme = useBoundedStore(({ userSettings }) => userSettings.theme)
  const updateUserSettings = useBoundedStore((state) => state.updateUserSettings)
  const { t } = useTranslation()
  const { styles, theme } = useStyles(styleSheet)

  function updateTheme({ id }: ICheckboxButton) {
    const selectedTheme = id as Theme

    if (selectedTheme === "adaptative") {
      UnistylesRuntime.setAdaptiveThemes(true)
    } else {
      UnistylesRuntime.setAdaptiveThemes(false)
      UnistylesRuntime.setTheme(selectedTheme)
    }

    updateUserSettings("theme", selectedTheme)
  }

  return (
    <BouncyCheckboxGroup
      checkboxProps={{
        fillColor: theme.COLORS.CHECKBOX,
        iconImageStyle: { tintColor: theme.COLORS.CHECKBOX_ICON },
        innerIconStyle: styles.innerIcon,
        size: 25,
        textStyle: styles.text,
        unfillColor: "#FFFFFF",
      }}
      data={[
        {
          id: "adaptative",
          text: t("adaptative"),
        },
        {
          id: "light",
          text: t("light"),
        },
        {
          id: "dark",
          text: t("dark"),
        },
      ]}
      //@ts-expect-error
      initial={userTheme}
      onChange={updateTheme}
      style={styles.checkboxes}
    />
  );
}

export default SelectTheme;