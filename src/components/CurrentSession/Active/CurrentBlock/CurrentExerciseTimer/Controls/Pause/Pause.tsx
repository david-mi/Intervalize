import CustomButton from "@shared/CustomButton/CustomButton";

import useBoundedStore from "@/store/store";

function Pause() {
  const setSessionStatus = useBoundedStore((state) => state.setSessionStatus)

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