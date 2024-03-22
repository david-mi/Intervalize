import CustomButton from "@shared/CustomButton/CustomButton";
import TitleWithCustomFont from "@shared/TitleWithCustomFont/TitleWithCustomFont";
import React from "react";
import { View, ScrollView } from "react-native";
import { useStyles } from "react-native-unistyles";

import { sectionWrapperStyles as styleSheet } from "./styles"

type Props = React.PropsWithChildren & {
  title: string
  appendElementHandler: () => void
  buttonsDisabled: boolean
}

function SectionWrapper({ title, appendElementHandler, buttonsDisabled, children }: Props) {
  const { styles } = useStyles(styleSheet)

  return (
    <View style={styles.sectionWrapper}>
      <View style={styles.heading}>
        <TitleWithCustomFont style={styles.title}>{title}</TitleWithCustomFont>
        <CustomButton
          disabled={buttonsDisabled}
          icon={{ name: "add", style: styles.appendElementButtonIcon }}
          onPress={appendElementHandler}
          style={styles.appendElementButton}
          theme="control"
        />
      </View>
      <ScrollView contentContainerStyle={styles.elementButtons}>
        {children}
      </ScrollView>
    </View>
  );
}

export default SectionWrapper;