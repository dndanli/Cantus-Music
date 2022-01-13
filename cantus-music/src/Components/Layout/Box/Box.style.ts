import styled from "styled-components";
import Box from "./Box";

type Props = {
  height: string;
  width: string;
};

export const StyledBox = styled(Box)<Props>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: 4%;
  img {
    height: 145px;
    width: 145px;
    border-radius: 4%;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
  }

  .description {
    color: #111111;
    font-size: 0.9rem;
    font-weight: 500;
    font-family: Montserrat, sans-serif;
    margin-top: 0.5rem;
    display: flex;
    justify-content: flex-start;
  }
`;
