import styled from "styled-components";

export const ProfileContainer = styled.section`
  width: 100%;
  min-height: 13.25rem;
  background: ${({ theme }) => theme.colors["base-profile"]};
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem 2.5rem;
  display: flex;
  gap: 2rem;
`;

export const ProfilePicture = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
  object-fit: cover;
`;