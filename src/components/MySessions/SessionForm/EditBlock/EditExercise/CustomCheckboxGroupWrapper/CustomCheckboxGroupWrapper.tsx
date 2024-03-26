import { t } from "i18next";
import { Controller, type Control, type FieldError, type UseControllerProps } from "react-hook-form";
import { TextInput, View, Text } from "react-native";
import BouncyCheckboxGroup from "react-native-bouncy-checkbox-group";
import { useStyles } from "react-native-unistyles";

import { customCheckboxGroupWrapperStyles } from "./styles"

import type { SessionType } from "@/types";

type CustomCheckboxGroupWrapperProps = React.ComponentProps<typeof TextInput> & {
  label: string
  name: UseControllerProps<SessionType>["name"]
  error?: FieldError
  control: Control<SessionType>
  placeholder?: string
}

function CustomCheckboxGroupWrapper({ error, control, placeholder, label, name, ...inputProps }: CustomCheckboxGroupWrapperProps) {
  const { styles, theme } = useStyles(customCheckboxGroupWrapperStyles)

  return (
    <View style={styles.customCheckboxGroupWrapper}>
      <Text style={styles.label}>{label}</Text>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
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
                id: "LOW",
                text: t("low"),
              },
              {
                id: "MEDIUM",
                text: t("medium"),
              },
              {
                id: "HIGH",
                text: t("high"),
              },
            ]}
            //@ts-expect-error
            initial={inputProps.defaultValue}
            onChange={({ id }) => onChange(id)}
            style={styles.checkboxes}
          />
        )}
      />
      {error && <Text style={styles.error}>{error.message}</Text>}
    </View>
  );
}

export default CustomCheckboxGroupWrapper;