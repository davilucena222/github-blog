import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendar, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { ExternalLink } from "../../../../components/ExternalLink";
import { ExternalLinkArrow } from "../../../../components/ExternalLinkArrow";
import { Loading } from "../../../../components/Loading";
import { PostHeaderContainer } from "./styles";
import { formattingDate } from "../../../../utils/formatter";

interface PostHeader {
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

interface PostHeaderProps {
  post: PostHeader;
  isLoading: boolean;
}

export function PostHeader({ post, isLoading }: PostHeaderProps) {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <PostHeaderContainer>
      {isLoading ? <Loading /> : (
        <>
          <header>
            <ExternalLinkArrow text="Voltar" href="#" onClick={goBack} />
            <ExternalLink text="Ver no GitHub" href={post.html_url} target="_blank" />
          </header>

          <h1>
            {post.title}
          </h1>

          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              {post.user.login}
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendar} />
              {formattingDate(post?.created_at)}
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} />
              {post.comments} comentários
            </li>
          </ul>
        </>
      )}
    </PostHeaderContainer>
  );
}