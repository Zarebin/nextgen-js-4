import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectStatus, selectUser } from "./userSlice";
import { userRegister } from "./actions";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/header";

export function UserRegister() {
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const User = useSelector(selectUser);
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (status) {
      navigate("/");
    }
  }, [status]);
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    dispatch(userRegister(user));
  };
  const handleInputChange = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(User);

  return (
    <div>
      <Header />
      <form className="form" onSubmit={handleLoginSubmit}>
		<h2 className="form__h2">Register</h2>
        <input className="form__input" type="text" name="username" placeholder="user name" onChange={handleInputChange} />
        <input className="form__input" type="text" name="email" placeholder="email" onChange={handleInputChange} />
        <input className="form__input" type="password" name="password" placeholder="password" onChange={handleInputChange} />
        <button className="form__btn" type="submit">Submit</button>
      </form>
    </div>
  );
}
