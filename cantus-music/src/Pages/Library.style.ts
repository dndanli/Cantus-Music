import styled from "styled-components";
import Library from "./Library";

const StyledLibrary = styled(Library)`
  .lib-header-2 {
    color: rgba(16, 16, 16, 0.9);
    font-size: 2rem;
  }

  .user-icon {
    font-size: 2rem;
    margin-left: auto;
  }

  #user-icon {
    color: rgba(16, 16, 16, 0.9);
  }
  .user-info-wrapper {
    margin-block: 1rem;
    display: flex;
  }
`;

export default StyledLibrary;
