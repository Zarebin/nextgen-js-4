import axios from 'axios'
import {foodFactUrl} from '../../app/urls';

const tocken = "12cff958a22039134e93586d0cf909bb9cdf453591f4953b7541583b1584386d"
export const fetchFirstCase = async (token) =>{
	const res = await axios.get(
		foodFactUrl ,{
            headers: {
              Authorization:
                `Token ${token}`
            },
        });
	return res;
};

export const sendRespondToServer = async (respond) => {
    const response = await axios.post(
        foodFactUrl , respond.data,
        {
            headers: {
              Authorization:
                `Token ${respond.token}`
            },
        }
        );
        return response;
}
