import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendar, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../../../components/ExternalLink";
import { ExternalLinkArrow } from "../../../../components/ExternalLinkArrow";
import { PostHeaderContainer } from "./styles";

export function PostHeader() {
  return (
    <PostHeaderContainer>
      <header>
        {/* <ExternalLink text="Voltar" href="#" /> */}
        <ExternalLinkArrow text="Voltar" href="#" />
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