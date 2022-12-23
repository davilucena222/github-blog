import { useCallback, useState } from "react";
import { SearchInput } from "../../components/SearchInput";
import { Post } from "./components/post";
import { Profile } from "./components/profile";
import { PostListContainer } from "./styles";

interface Posts {
  title: string;
}

export function Blog() {
  const [posts, setPosts] = useState([]);

  const getPosts = useCallback(async() => {
    try {

    } finally {
      
    }
  }, [posts]);

  return (
    <>
      <Profile />
      <SearchInput />

      <PostListContainer>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </PostListContainer>
    </>
  );
}