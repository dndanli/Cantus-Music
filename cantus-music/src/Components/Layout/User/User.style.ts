import styled from "styled-components";
import User from "./User";

const StyledUser = styled(User)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 1rem;
  font-family: "Montserrat", sans-serif;
  .name {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 300;
  }
  .fol {
    display: flex;
    #followers {
      margin-right: 1rem;
    }
  }
  #followers,
  #following,
  #user-name {
    margin-block: 0.5rem;
  }
  #followers,
  #following,
  #user-name-tag {
    color: rgba(16, 16, 16, 0.8);
  }
  .user-profile-pic {
    max-height: 200px;
    max-width: 200px;
    border-radius: 7rem;
  }
`;

export default StyledUser;
