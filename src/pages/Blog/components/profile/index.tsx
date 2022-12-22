import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../../../components/ExternalLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src="https://github.com/davilucena222.png" />

      <ProfileDetails>
        <header>
          <h1>Davi Luiz</h1>

          <ExternalLink text={"GitHub"} href="#" />
        </header>

        <p>
          Hi, I am Davi Luiz. I am a Front-End Software Engineer and currently I am working on projects to help impact the community tech and build applications to help other people that are trying to migrate your career.
        </p>

        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            davilucena222
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            Google
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            15 seguidores
          </li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  );
}