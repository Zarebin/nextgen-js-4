import { styled } from "@mui/system";

const StyledContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  padding: 8px;
  box-shadow: 0px 0px 11px 3px #8888886b;
  height: 60px;
`;

const StyledDashboardDiv = styled("div")`
  flex: 0.9;
  img {
    width: 127px;
  }
`;

const StyledUserContainer = styled("div")`
  display: flex;
  flex-direction: column;
  a {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 1rem;
    padding: 16px;
    text-decoration: none;
    color: #283618;
  }
`;

const StyledButton = styled("button")`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: #283618;
  background: none;
  border: none;
  cursor: pointer;
  h5 {
    font-weight: 600;
    font-size: 1rem;
  }
`;

export {
  StyledContainer,
  StyledButton,
  StyledDashboardDiv,
  StyledUserContainer,
};
