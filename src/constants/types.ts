import { LIGHT_THEME, DARK_THEME } from "./theme"

type AppThemes = {
  light: typeof LIGHT_THEME,
  dark: typeof DARK_THEME
}

declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes { }
}