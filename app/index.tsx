import Onboarding from "@/src/screen/Onboarding";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Index() {
  return (
    <SafeAreaView className="bg-[#212832] px-12 flex-1 items-center justify-center">
      <Onboarding />
    </SafeAreaView>
  );
}
