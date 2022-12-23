import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendar, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { ExternalLink } from "../../../../components/ExternalLink";
import { ExternalLinkArrow } from "../../../../components/ExternalLinkArrow";
import { PostHeaderContainer } from "./styles";

export function PostHeader() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <PostHeaderContainer>
      <header>
        <ExternalLinkArrow text="Voltar" href="#" onClick={goBack} />
        <ExternalLink text="Ver no GitHub" href="#" target="_blank" />
      </header>

      <h1>
        JavaScript data types and data structures
      </h1>

      <ul>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          cameronwll
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendar} />
          Há 1 dia
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} />
          5 comentários
        </li>
      </ul>
    </PostHeaderContainer>
  );
}