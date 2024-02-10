import { Pressable, FlatList, Text } from "react-native";
import { styles } from "./userSettingsList.styles";
import { UserSettingsParamList } from "@/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MaterialIcons } from '@expo/vector-icons';

type Props = NativeStackScreenProps<UserSettingsParamList, "List">

function UserSettingsList({ navigation }: Props) {
  return (
    <FlatList
      data={["Vibrations"]}
      contentContainerStyle={styles.container}
      keyExtractor={(item, index) => item + index}
      renderItem={() => (
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Vibrations")}
        >
          <MaterialIcons name="vibration" style={styles.themeIcon} />
          <Text style={styles.text}>Vibrations</Text>
          <MaterialIcons name="chevron-right" style={styles.arrowIcon} />
        </Pressable>
      )}
    />
  );
}

export default UserSettingsList;