import { styled } from "@mui/system";

const StyledContainer = styled("div")`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -48%);
  display: grid;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid gray;
  background-color: #ffffff;
  padding: 40px 75px 23px 75px;
  border-radius: 5px;
  p {
    padding-bottom: 23px;
    font-size: 1.3rem;
  }
  img {
    width: 400px;
    height: 400px;
  }
`;

const StyledButton = styled("button")`
  width: 33.33%;
  padding: 10px;
  border: none;
  background-color: white;
  p {
    padding-bottom: 0px;
  }
`;
export { StyledContainer, StyledButton };