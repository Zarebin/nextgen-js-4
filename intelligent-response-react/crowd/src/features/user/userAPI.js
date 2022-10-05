import axios from 'axios';
import {loginUrl, registerUrl} from '../../app/urls';
		
export const fetchUser = async (user) => {
	const response = await axios.post(loginUrl,user);
	console.log(response);
	return response;
} 

export const registerUser = async (user) => {
	const response = await axios.post(registerUrl,user);
	console.log(response);
	return response;
} 
