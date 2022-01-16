import { StyledBox } from "./Box.style";
import MusicianImg from "../../../Assets/Images/nathan-nichols-nOFXvnRMMK4-unsplash.jpg";
import MusicianImg2 from "../../../Assets/Images/chase-fade-XOLIrILp-vI-unsplash.jpg";
import MusicianImg3 from "../../../Assets/Images/vale-arellano-vkMIlSf8lfg-unsplash.jpg";
import MusicianImg4 from "../../../Assets/Images/raul-najera-OsTJNX83lC0-unsplash.jpg";
import MusicianImg5 from "../../../Assets/Images/marcela-laskoski-YrtFlrLo2DQ-unsplash.jpg";

export let Boxes: JSX.Element[] = [
  <StyledBox
    boxArtWorkImg={MusicianImg}
    imgAlt="R&B Music"
    boxDesc="Best R&B right now"
    className="box"
    height="209px"
    width="140px"
  />,
  <StyledBox
    boxArtWorkImg={MusicianImg2}
    imgAlt="Hip Hop Music"
    boxDesc="Best Hip Hop"
    className="box"
    height="209px"
    width="140px"
  />,
  <StyledBox
    boxArtWorkImg={MusicianImg3}
    imgAlt="Rock Music"
    boxDesc="Rock Playlist"
    className="box"
    height="209px"
    width="140px"
  />,
  <StyledBox
    boxArtWorkImg={MusicianImg4}
    imgAlt="Country Music"
    boxDesc="Country Music"
    className="box"
    height="209px"
    width="140px"
  />,
  <StyledBox
    boxArtWorkImg={MusicianImg5}
    imgAlt="Electronic Music"
    boxDesc="Electronic Music"
    className="box"
    height="209px"
    width="140px"
  />,
];
