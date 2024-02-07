import { Pressable } from "react-native";
import { useContext } from "react";
import { GlobalContext } from "../../../../../../../context/GlobalContext";
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from "../controls.styles"

function Pause() {
  const { setSessionStatus, setCurrentSession } = useContext(GlobalContext)

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