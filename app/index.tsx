import SignIn from "@/src/screen/auth/SignIn";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Index() {
  return (
    <SafeAreaView className="h-screen bg-[#212832] px-6 flex-1 justify-center">
      <SignIn />
    </SafeAreaView>
  );
}
