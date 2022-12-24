import { useCallback, useEffect, useState } from "react";
import { Loading } from "../../components/Loading";
import { SearchInput } from "../../components/SearchInput";
import { api } from "../../lib/axios";
import { Post } from "./components/post";
import { Profile } from "./components/profile";
import { PostListContainer } from "./styles";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const reponame = import.meta.env.VITE_GITHUB_REPONAME;

interface Posts {
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: string;
  user: {
    login: string;
  };
}

export function Blog() {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = useCallback(async(query: string = "") => {
    try {
      setIsLoading(true);
      const response = await api.get(`search/issues?q=${query}%20repo:${username}/${reponame}`);

      setPosts(response.data.items);
    } finally {
      setIsLoading(false);
    }
  }, [posts]);

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Profile />
      <SearchInput postsNumber={posts.length} getPosts={getPosts} />

      {isLoading ? (
        <Loading />
      ) : (
        <PostListContainer>
          {posts.map((post) => (
            <Post
              key={post.number}
              title={post.title}
              body={post.body}
              created_at={post.created_at}
              number={post.number}
            />
          ))}
        </PostListContainer>
      )}
    </>
  );
}