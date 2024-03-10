import CustomButton from "@/components/CustomButton/CustomButton";
import useBoundedStore from "@/store/store";

function Stop() {
  const { setSessionStatus, setCurrentSession } = useBoundedStore()

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