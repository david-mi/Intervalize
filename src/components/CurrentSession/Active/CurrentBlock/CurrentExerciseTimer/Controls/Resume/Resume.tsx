import CustomButton from "@shared/CustomButton/CustomButton";

import useBoundedStore from "@/store/store";

function Resume() {
  const setSessionStatus = useBoundedStore((state) => state.setSessionStatus)

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