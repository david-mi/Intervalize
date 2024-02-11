import { MaterialIcons } from "@expo/vector-icons";
import { useContext } from "react";
import { Pressable } from "react-native";

import { styles } from "../controls.styles"

import { GlobalContext } from "@/context/GlobalContext";

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