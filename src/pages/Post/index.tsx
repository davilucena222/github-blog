import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { PostHeader } from "./components/PostHeader";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const reponame = import.meta.env.VITE_GITHUB_REPONAME;

interface PostProps {
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: string;
  user: {
    login: string;
  };
  isLoading: boolean;
}

export function Post() {
  const [post, setPost] = useState<PostProps>({} as PostProps);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  const getPost = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await api.get(`/repos/${username}/${reponame}/issues/${id}`);

      setPost(response.data);
    } finally {
      setIsLoading(false);
    }
  }, [post]);

  useEffect(() => {
    getPost();
  }, []);

  return (
    <> 
     <PostHeader post={post} />
    </>
  );
}