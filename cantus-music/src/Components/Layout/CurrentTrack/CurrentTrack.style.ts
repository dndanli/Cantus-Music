import styled from "styled-components";
import SongTrack from "./CurrentTracks";

const StyledCurrentTrack = styled(SongTrack)`
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 12px;
  background-color: rgba(243, 243, 243, 1);
  display: flex;
  border-radius: 10px;
  .track-img {
    border-radius: 10px;
    border: solid 0.5px rgba(16, 16, 16, 0.5);
    max-width: 70px;
    max-height: 70px;
  }

  .song-track-info {
    width: 100%;
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .track-title {
    color: rgba(16, 16, 16, 0.9);
  }
  .track-artist-name {
    color: rgba(16, 16, 16, 0.7);
  }

  .play-and-pause {
    display: flex;
    align-items: center;
    padding-right: 0.5rem;
  }
  .play-icon,
  .pause-icon {
    font-size: 3rem;
  }
`;

export default StyledCurrentTrack;
