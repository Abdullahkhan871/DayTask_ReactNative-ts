import SignUp from "@/src/screen/auth/SignUp";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-[#212832] px-6 py-2">
      <SignUp />
    </SafeAreaView>
  );
}
