import { Pressable } from "react-native";
import { useContext } from "react";
import { GlobalContext } from "../../../../../../../context/GlobalContext";
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from "../controls.styles"

function Stop() {
  const { setSessionStatus, setCurrentSession } = useContext(GlobalContext)

  function handleStop() {
    setCurrentSession(null)
    setSessionStatus("NOT_SELECTED")
  }

  return (
    <Pressable onPress={handleStop} style={styles.button}>
      <MaterialIcons
        style={styles.icon}
        name="stop"
        size={80}
        color="black"
      />
    </Pressable>
  );
}

export default Stop;