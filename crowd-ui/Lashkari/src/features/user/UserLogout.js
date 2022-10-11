import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";
import { removeUser } from "./userSlice";

export function UserLogout() {
  const dispathch = useDispatch();
  const navigate = useNavigate()
  const handleLogout = () => {
    dispathch(removeUser());
	navigate("/");
  };
  return (
    <ul className="header__ul">
      <li onClick={handleLogout} className="header__ul__li pointer">
	  Logout
      </li>
    </ul>
  );
}
