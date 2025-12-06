import PostListItem from "@/components/PostListItem";
import { dummyPosts } from "@/dummyData";
import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <FlatList
      data={dummyPosts}
      renderItem={({ item }) => (
        <PostListItem post={item} />
      )}
    ></FlatList>
  );
}
