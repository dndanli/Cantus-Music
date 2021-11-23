import styled from "styled-components";
import Slider from "./Slider";

type SliderProps = {
  height: string;
  width: string;
};

export const StyledSlider = styled(Slider)<SliderProps>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};

  overflow: auto;
  white-space: nowrap;

  display: grid;
  grid-auto-flow: column;
  gap: 1em;
`;
