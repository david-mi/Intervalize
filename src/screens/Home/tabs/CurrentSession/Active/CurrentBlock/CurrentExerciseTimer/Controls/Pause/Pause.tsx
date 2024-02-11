import { MaterialIcons } from "@expo/vector-icons";
import { useContext } from "react";
import { Pressable } from "react-native";

import { styles } from "../controls.styles"

import { GlobalContext } from "@/context/GlobalContext";

function Pause() {
  const { setSessionStatus } = useContext(GlobalContext)

  function handlePause() {
    setSessionStatus("PAUSED")
  }

  return (
    <Pressable onPress={handlePause} style={styles.button}>
      <MaterialIcons
        style={styles.icon}
        name="pause"
        size={80}
        color="black"
      />
    </Pressable>
  );
}

export default Pause;