import CustomButton from "@shared/CustomButton/CustomButton";

import useBoundedStore from "@store/store";

function Stop() {
  const setSessionStatus = useBoundedStore((state) => state.setSessionStatus)
  const setCurrentSession = useBoundedStore((state) => state.setCurrentSession)

  function handleStop() {
    setCurrentSession(null)
    setSessionStatus("NOT_SELECTED")
  }

  return (
    <CustomButton
      icon={{ name: "stop" }}
      onPress={handleStop}
      theme="control"
    />
  );
}

export default Stop;