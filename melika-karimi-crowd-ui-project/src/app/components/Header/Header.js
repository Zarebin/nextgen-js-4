import React from 'react';
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from "@mui/icons-material/Person";

import {
    StyledContainer,
    StyledButton,
    StyledDashboardDiv,
    StyledUserContainer 
} from "./Header.styled";
import { useDispatch , useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import {logout , reset} from "../../../features/Authentication/userSlice"


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  
  const handleLogout = () => {
    // dispatch(logout());
    // dispatch(reset());
    navigate('/')
  };

  return ( 
    <StyledContainer>
        <StyledDashboardDiv>
            <Link to='/'>
                <img src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw" alt="" />
            </Link>
        </StyledDashboardDiv>
        {
            user ? (
                <StyledButton onClick={handleLogout}>
                    <LoginIcon />
                    <h5>Logout</h5>
                </StyledButton>
            ) :
            (
                <>
                    <StyledUserContainer>
                        <Link to='login'>
                            <LoginIcon />
                            <h5>Login</h5>
                        </Link>
                    </StyledUserContainer>

                    <StyledUserContainer>
                        <Link to='Register'>
                            <PersonIcon />
                            <h5>Register</h5>
                        </Link>
                    </StyledUserContainer>
                </>
            )
        }
    </StyledContainer>
  )
}

export default Header