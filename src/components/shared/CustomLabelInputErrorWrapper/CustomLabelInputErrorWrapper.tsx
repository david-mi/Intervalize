import { Controller, type Control, type FieldError, type UseControllerProps } from "react-hook-form";
import { TextInput, View, Text } from "react-native";
import { useStyles } from "react-native-unistyles";

import { customLabelInputErrorWrapperStyles } from "./styles"

import type { SessionType } from "@/types";

type CustomLabelInputErrorWrapperProps = React.ComponentProps<typeof TextInput> & {
  label: string
  name: UseControllerProps<SessionType>["name"]
  error?: FieldError
  control: Control<SessionType>
  placeholder?: string
}

function CustomLabelInputErrorWrapper({ error, control, placeholder, label, name, ...inputProps }: CustomLabelInputErrorWrapperProps) {
  const { styles } = useStyles(customLabelInputErrorWrapperStyles)

  return (
    <View style={styles.customLabelInputErrorWrapper}>
      <Text style={styles.label}>{label}</Text>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            {...inputProps}
            onBlur={onBlur}
            onChangeText={onChange}
            placeholder={placeholder}
            style={styles.input}
            value={value}
          />
        )}
        rules={{
          required: true,
        }}
      />
      {error && <Text style={styles.error}>{error.message}</Text>}
    </View>
  );
}

export default CustomLabelInputErrorWrapper;