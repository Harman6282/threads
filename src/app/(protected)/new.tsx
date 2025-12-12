import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NewScreen() {
  const [text, setText] = useState("");
  return (
    <SafeAreaView className="p-4 flex-1" edges={["bottom"]}>
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 140 : 0}
      >
        <Text className="text-white text-lg">Username</Text>

        <TextInput
          placeholder="What is on your mind?"
          className="text-white text-lg"
          multiline
          numberOfLines={4}
          secureTextEntry
        />

        <View className="mt-auto">
          <Pressable
            onPress={() => console.log("post: ")}
            className="bg-white p-3 px-6 rounded-full self-end"
          >
            <Text className="text-black font-bold">Post</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
