import styled from "styled-components";
import headerBackground from "../../assets/header-background.png"

export const HeaderContainer = styled.div`
  width: 100%;
  height: 18.5rem;
  background: url(${headerBackground}) no-repeat center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;