import { useContext } from "react";

import CustomButton from "@/components/CustomButton/CustomButton";
import { GlobalContext } from "@/context/GlobalContext";

function Stop() {
  const { setSessionStatus, setCurrentSession } = useContext(GlobalContext)

  function handleStop() {
    setCurrentSession(null)
    setSessionStatus("NOT_SELECTED")
  }

  return (
    <CustomButton
      onPress={handleStop}
      icon={{ name: "stop" }}
      theme="control"
    />
  );
}

export default Stop;