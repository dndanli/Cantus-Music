import styled from "styled-components";
import UserProfile from "./UserProfile";

const StyledUserProfile = styled(UserProfile)`
  background-color: white;
  position: relative;
  .user-profile-wrapper,
  .current-track-wrapper,
  .tracks-wrapper,
  .public-playlists {
    padding-inline: 1rem;
  }
  .current-track-wrapper {
    min-width: 90vw;
    position: fixed;
    bottom: 5.5rem;
  }
  .tracks-wrapper {
    margin-block: 2rem;
  }
  .public-playlists {
    margin-bottom: 10rem;
  }
  .song-track {
    margin-bottom: 1rem;
  }
  .slider {
    overflow: visible;
    grid-auto-flow: row;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 0.3rem;
  }
`;

export default StyledUserProfile;
