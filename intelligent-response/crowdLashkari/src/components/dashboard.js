import {useEffect} from "react";
import {useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom"
import {selectStatus} from "../features/user/userSlice";
import {Header} from "./header"
import {Item} from "./item"
import { itemNames } from "../app/itemsName";
export const Dashboard = () => {
  const status = useSelector(selectStatus);
  const navigate = useNavigate();
  useEffect(() => {
	  if(!status){
		  navigate("/")
	  }
  },[status]);
	return (
		<>
		<Header />
		<div className="dashContainer">
		{
			itemNames.map(item =>( 
				<div className="item">
				<img className="item__img" src={item.img_link} />
				<div className="item__link">
				<Link className="link" to={item.link}>
				<Item name={item.name}/>
				</Link>
				</div>
				</div>)
			)
		}
		
		</div>
		</>
	)
}
