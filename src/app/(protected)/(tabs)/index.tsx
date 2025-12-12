import PostListItem from "@/components/PostListItem";
import { dummyPosts } from "@/dummyData";
import { Link } from "expo-router";
import { FlatList } from "react-native";

export default function App() {
  return (
    <FlatList
      data={dummyPosts}
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
