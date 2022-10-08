import {useSelector} from "react-redux";
import { Link } from "react-router-dom";
import {UserLogout} from "../features/user/UserLogout";
import {selectStatus, selectUser} from "../features/user/userSlice";

export const Header = () => {
	const status = useSelector(selectStatus)
  return (
    <>
      <div className="header">
        <div className="header__caption">
          <h3>Zarebin</h3>
        </div>
	   {
		   !status ?(
        <ul className="header__ul">
          <li className="header__ul__li">
            <Link className="link" to="/">Login</Link>
          </li>
          <li className="header__ul__li">
            <Link  className="link" to="/register">Register</Link>
          </li>
        </ul>):
		   (
			   
			  <UserLogout />
			)
		}
      </div>
    </>
  );
};
