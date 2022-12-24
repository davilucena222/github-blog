import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useEffect, useState } from "react";
import { ExternalLink } from "../../../../components/ExternalLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";
import { api } from "../../../../lib/axios";
import { Loading } from "../../../../components/Loading";

const username = import.meta.env.VITE_GITHUB_USERNAME;

interface ProfileProps {
  login: string;
  bio: string;
  avatar: string;
  html_url: string;
  name: string;
  company?: string;
  followers: number;
}

export function Profile() {
  const [profile, setProfile] = useState<ProfileProps>({} as ProfileProps);
  const [isLoading, setIsLoading] = useState(true);

  const getProfileUser = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await api.get(`/users/${username}`);

      setProfile(response.data);
    } finally {
      setIsLoading(false);
    }
  }, [profile]);

  useEffect(() => {
    getProfileUser();
  }, []);

  return (
    <ProfileContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ProfilePicture src="https://github.com/davilucena222.png" />

          <ProfileDetails>
            <header>
              <h1>{profile.name}</h1>

              <ExternalLink text={"GitHub"} href={profile.html_url} target="_blank" />
            </header>

            <p>
              {profile.bio}
            </p>

            <ul>
              <li>
                <FontAwesomeIcon icon={faGithub} />
                {profile.login}
              </li>
              {profile?.company && (
                <li>
                  <FontAwesomeIcon icon={faBuilding} />
                  Google
                </li>
              )}
              <li>
                <FontAwesomeIcon icon={faUserGroup} />
                {profile.followers}
              </li>
            </ul>
          </ProfileDetails>
        </>
      )}
    </ProfileContainer>
  );
}