import useBoundedStore from "@store/store";
import React from "react"
import { UnistylesRegistry, UnistylesRuntime, useStyles } from "react-native-unistyles";

import { LIGHT_THEME, DARK_THEME } from "@/constants/theme";

UnistylesRegistry
  .addThemes({
    light: LIGHT_THEME,
    dark: DARK_THEME,
  })
  .addConfig({
    initialTheme: "light",
  })

export function useInitTheme() {
  const [themeInitialized, setThemeInitialized] = React.useState(true)
  const userTheme = useBoundedStore(({ userSettings }) => userSettings.theme)
  const { theme } = useStyles()

  React.useEffect(() => {
    if (userTheme === "adaptative") {
      UnistylesRuntime.setAdaptiveThemes(true)
    } else {
      UnistylesRuntime.setTheme(userTheme)
    }

    setThemeInitialized(true)
  }, [])

  return { themeInitialized, theme }
}