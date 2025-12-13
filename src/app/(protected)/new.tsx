import { supabase } from "@/lib/supabase";
import { useAuth } from "@/providers/AuthProvider";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const createPost = async (content: string, user_id: string) => {
  const { data, error } = await supabase
    .from("posts")
    .insert({ content, user_id })
    .select("*")
    .throwOnError();

  return data;
};

export default function NewScreen() {
  const [text, setText] = useState("");
  const { user } = useAuth();

  const queryClient  = useQueryClient();
 

  const { mutate, isPending } = useMutation({
    mutationFn: () => createPost(text, user!.id),
    onSuccess: (data) => {
      setText('')
      router.back()
      queryClient.invalidateQueries({queryKey: ['posts']})
    },
    onError: (error) => {
      Alert.alert('Error', error.message)
    }
  });

  // const onSubmit = async () => {
  //   if (!text) return;

  //   const { data, error } = await supabase
  //     .from("posts")
  //     .insert({ content: text, user_id: user?.id });

  //   if (error) {
  //     console.error(error);
  //   }

  //   setText("");
  // };

  return (
    <SafeAreaView className="p-4 flex-1" edges={["bottom"]}>
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 140 : 0}
      >
        <Text className="text-white text-lg">Username</Text>

        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="What is on your mind?"
          className="text-white text-lg"
          multiline
          numberOfLines={4}
          secureTextEntry
        />

        <View className="mt-auto">
          <Pressable
            onPress={() => mutate()}
            className={`${
              isPending ? "bg-white/50" : "bg-white"
            } p-3 px-6 rounded-full self-end`}
            disabled={isPending}
          >
            <Text className="text-black font-bold">Post</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
