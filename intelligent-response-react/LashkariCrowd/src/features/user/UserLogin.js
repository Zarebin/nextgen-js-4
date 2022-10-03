import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectStatus, selectUser } from "./userSlice";
import { useNavigate } from "react-router-dom";

import { userLogin } from "./actions";
import {Header} from "../../components/header";

export function UserLogin() {
  const [user, setUser] = useState({ username: "", password: "" });
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
	  if(status){
		  navigate("/dashboard")
	  }
  },[status]);
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    dispatch(userLogin(user));
  };
  const handleInputChange = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(user);
  };

  return (
    <div>
	  <Header />
      <form className="form" onSubmit={handleLoginSubmit}>
		<h2 className="form__h2">Login</h2>
        <input className="form__input" type="text" name="username" placeholder="user name" onChange={handleInputChange} />
        <input className="form__input" type="password" name="password" placeholder="password" onChange={handleInputChange} />
        <button className="form__btn" type="submit">Submit</button>
      </form>
    </div>
  );
}
