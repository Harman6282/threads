import PostListItem from "@/components/PostListItem";
import { dummyPosts } from "@/dummyData";
import { supabase } from "@/lib/supabase";
import { Post } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text } from "react-native";

const fetchPosts = async () => {
  const { data } = await supabase
    .from("posts")
    .select("*, user:profiles(*)")
    .throwOnError();
  return data;
};

export default function App() {
  const {
    data,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <PostListItem post={item} />}
      ListHeaderComponent={() => (
        <>
          <Link
            href={"/new"}
            className="text-blue-500 p-4 text-center text-3xl"
          >
            {" "}
            New Post
          </Link>
        </>
      )}
    ></FlatList>
  );
}
