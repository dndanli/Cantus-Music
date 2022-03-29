type UserProps = {
  className: string;
  userData: {
    userName: string;
    userNameTag: string;
    userPicture: string;
    followers: number;
    following: number;
    hasTrack: boolean;
  };
};

const User = ({ className, userData }: UserProps) => {
  return (
    <div className={className}>
      <img
        className="user-profile-pic"
        src={userData.userPicture}
        alt={userData.userNameTag}
      ></img>
      <div className="name">
        <h1 id="user-name">{userData.userName}</h1>
        <h2 id="user-name-tag">{userData.userNameTag}</h2>
      </div>
      <div className="fol">
        <h3 id="followers">{userData.followers} followers</h3>
        <h3 id="following">{userData.following} following</h3>
      </div>
    </div>
  );
};

export default User;
