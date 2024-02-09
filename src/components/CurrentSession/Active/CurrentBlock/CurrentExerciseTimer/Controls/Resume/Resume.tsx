import { Pressable } from "react-native";
import { useContext } from "react";
import { GlobalContext } from "@/context/GlobalContext";
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from "../controls.styles"

function Resume() {
  const { setSessionStatus } = useContext(GlobalContext)

  function handleResume() {
    setSessionStatus("ACTIVE")
  }

  return (
    <Pressable onPress={handleResume} style={styles.button}>
      <MaterialIcons
        style={styles.icon}
        name="play-arrow"
        size={80}
        color="black"
      />
    </Pressable>
  );
}

export default Resume;