import styled from "styled-components";
import UserProfile from "./UserProfile";

const StyledUserProfile = styled(UserProfile)`
  background-color: white;
  position: relative;
  .user-profile-wrapper,
  .current-track-wrapper,
  .tracks-wrapper {
    padding-inline: 1rem;
  }
  .current-track-wrapper {
    min-width: 90vw;
    position: fixed;
    bottom: 5.5rem;
  }
  .song-track {
    margin-bottom: 1rem;
  }
`;

export default StyledUserProfile;
