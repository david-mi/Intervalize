import { createStyleSheet } from "react-native-unistyles";

import { CustomFontsList } from "../../../types";

export const styles = createStyleSheet({
  title: {
    fontFamily: CustomFontsList.OSWALD_BOLD,
    fontSize: 30,
  },
})