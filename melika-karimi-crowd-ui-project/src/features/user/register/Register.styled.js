import {styled} from "@mui/system";

const StyledContainer = styled("div")`
    align-items: center;
    justify-content: space-evenly;
    margin: 8px;
    padding: 8px;
`;

const StyledFormHeader = styled("div")`
    h1{
        margin-bottom: 10px;
    }
    p{
        font-size: 1.3rem;
    }
`;
const StyledFormContainer = styled("div")`

    flex-direction: row;
    border:1px solid #5c5c6194;
    background-color: #a8faff21;
    padding: 5px;
    border-radius: 5px;
`;
const StyledInputContainer = styled("div")`

    padding: 10px;
    input{
        width: 100%;
        height: 48px;
        flex: 1;
        border: 1px solid #bbc0c4;
        border-radius: 8px;
    }
`;


const StyledButtonContainer = styled("div")`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 16px;
    padding: 16px;
    button{
        height: 48px;
        flex: 1;
        border-radius: 8px;
    }
`;

export {
    StyledContainer,
    StyledFormHeader,
    StyledFormContainer,
    StyledInputContainer,
    StyledButtonContainer
}
