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
      icon={{ name: "pause" }}
      onPress={handlePause}
      theme="control"
    />
  );
}

export default Pause;