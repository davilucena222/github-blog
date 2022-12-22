import { SearchInput } from "../../components/SearchInput";
import { Post } from "./components/post";
import { Profile } from "./components/profile";
import { PostListContainer } from "./styles";

export function Blog() {
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