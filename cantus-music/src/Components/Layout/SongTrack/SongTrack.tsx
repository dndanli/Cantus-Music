type SongTrackProps = {
  className: string;
  trackTitle: string;
  trackImg: string;
  artistName: string;
  duration: string;
  numberOfPlays: string;
  displayCurrentTrack: any;
};
const SongTrack = ({
  className,
  trackTitle,
  trackImg,
  artistName,
  duration,
  numberOfPlays,
  displayCurrentTrack,
}: SongTrackProps) => {
  return (
    <div className={className} onClick={displayCurrentTrack}>
      <img className="track-img" src={trackImg} alt={trackTitle}></img>
      <div className="song-track-info">
        <h1 className="track-title">{trackTitle}</h1>
        <h2 className="track-artist-name">{artistName} </h2>
        <div className="track-metadata">
          <h2 className="number-of-plays">{numberOfPlays}</h2>
          <h2 className="song-duration">{duration}</h2>
        </div>
      </div>
    </div>
  );
};

export default SongTrack;
