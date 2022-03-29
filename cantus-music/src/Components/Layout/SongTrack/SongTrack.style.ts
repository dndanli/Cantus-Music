import styled from "styled-components";
import SongTrack from "./SongTrack";

const StyledSongTrack = styled(SongTrack)`
  display: flex;
  font-family: "Montserrat", sans-serif;
  .track-title {
    color: rgba(16, 16, 16, 0.9);
  }
  .song-track-info {
    margin-left: 1rem;
    width: 100%;
    font-size: 13px;
  }
  .track-metadata {
    width: 100%;
    margin-top: 0.5rem;
    display: flex;
    justify-content: flex-start;
  }
  .number-of-plays {
    margin-right: 1rem;
  }
  .track-img {
    max-width: 100px;
    max-height: 100px;
    border-radius: 15px;
  }
`;

export default StyledSongTrack;
