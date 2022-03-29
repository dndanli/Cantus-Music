import StyledUser from "../Components/Layout/User/User.style";
import StyledNavbar from "../Components/Layout/Navbar/Navbar.style";
import StyledCurrentTrack from "../Components/Layout/CurrentTrack/CurrentTrack.style";
import StyledSongTrack from "../Components/Layout/SongTrack/SongTrack.style";
import { StyledSlider } from "../Components/Layout/Slider/Slider.style";
import { useState } from "react";

type UserProfileProps = {
  className: string;
};

const userDataProp = {
  userName: "test user",
  userNameTag: "@testuser",
  userPicture: "https://avatars.githubusercontent.com/u/73452073?v=4",
  followers: 25000,
  following: 30,
  hasTrack: true,
};

const UserProfile = ({ className }: UserProfileProps) => {
  const [isActive, setActive] = useState(false);
  const displayCurrentSong = () => setActive(!isActive);
  return (
    <div className={className}>
      <div className="user-profile-wrapper">
        <StyledUser className="user-component" userData={userDataProp} />
      </div>
      <div className="tracks-wrapper">
        <StyledSongTrack
          className="song-track"
          trackTitle="test track"
          trackImg={userDataProp.userPicture}
          artistName={userDataProp.userName}
          duration="2:30"
          numberOfPlays="133K"
          displayCurrentTrack={displayCurrentSong}
        />
      </div>
      {isActive === true ? (
        <div className="current-track-wrapper">
          <StyledCurrentTrack
            className="current-track"
            trackTitle="test track"
            trackImg={userDataProp.userPicture}
            artistName={userDataProp.userName}
          />
        </div>
      ) : null}
      <div className="public-playlists">
        <StyledSlider className="slider" />
      </div>
      <div className="navbar-wrapper">
        <StyledNavbar className="navbar" />
      </div>
    </div>
  );
};

export default UserProfile;
