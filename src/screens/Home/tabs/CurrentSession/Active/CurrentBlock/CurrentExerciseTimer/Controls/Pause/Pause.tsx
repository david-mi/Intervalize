import { useContext } from "react";

import CustomButton from "@/components/CustomButton/CustomButton";
import { GlobalContext } from "@/context/GlobalContext";

function Pause() {
  const { setSessionStatus } = useContext(GlobalContext)

  function handlePause() {
    setSessionStatus("PAUSED")
  }

  return (
    <CustomButton
      onPress={handlePause}
      icon={{ name: "pause" }}
      theme="control"
    />
  );
}

export default Pause;