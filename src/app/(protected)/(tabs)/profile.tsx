import { supabase } from "@/lib/supabase";
import { useAuth } from "@/providers/AuthProvider";
import { Text, View } from "react-native";
import { SafeAreaView} from "react-native-safe-area-context";

export default function ProfileScreen() {

  const {user, isAuthenticated} = useAuth()
  console.log(user)
  console.log(isAuthenticated)

  return (
    <SafeAreaView>
      <Text>Profile screen</Text>;
      <Text onPress={() => supabase.auth.signOut()} className="text-2xl text-white font-bold">Sign out</Text>
    </SafeAreaView>
  );
}
