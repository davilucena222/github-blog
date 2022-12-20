import { HeaderContainer } from "./styles";
import logoGitHubBlog from "../../assets/logoGitHubBlog.svg"

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoGitHubBlog} alt="Logo do GitHub Blog" />
    </HeaderContainer>
  );
}