import CustomButton from "@/components/CustomButton/CustomButton";
import useBoundedStore from "@/store/store";

function Resume() {
  const { setSessionStatus } = useBoundedStore()

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