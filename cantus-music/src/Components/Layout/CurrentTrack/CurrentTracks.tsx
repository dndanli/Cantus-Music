import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { useState } from "react";
type CurrentTrackProps = {
  className: string;
  trackTitle: string;
  trackImg?: string;
  artistName: string;
};
const CurrentTrack = ({
  className,
  trackTitle,
  trackImg,
  artistName,
}: CurrentTrackProps) => {
  const [active, setActive] = useState(false);
  const toggleActive = () => setActive(!active);
  return (
    <div className={className}>
      <img className="track-img" src={trackImg} alt={trackTitle}></img>
      <div className="song-track-info">
        <h2 className="track-title">{trackTitle}</h2>
        <h2 className="track-artist-name">{artistName}</h2>
      </div>
      <div className="play-and-pause">
        {active === true ? (
          <BsFillPauseFill className="pause-icon" onClick={toggleActive} />
        ) : (
          <BsFillPlayFill className="play-icon" onClick={toggleActive} />
        )}
      </div>
    </div>
  );
};

export default CurrentTrack;
