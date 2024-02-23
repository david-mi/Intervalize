import { useContext } from "react";

import CustomButton from "@/components/CustomButton/CustomButton";
import { GlobalContext } from "@/context/GlobalContext";

function Resume() {
  const { setSessionStatus } = useContext(GlobalContext)

  function handleResume() {
    setSessionStatus("ACTIVE")
  }

  return (
    <CustomButton
      icon={{ name: "play-arrow" }}
      onPress={handleResume}
      theme="control"
    />
  );
}

export default Resume;