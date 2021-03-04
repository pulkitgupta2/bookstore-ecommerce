import Axios from "./AxiosService";
const baseUrl = process.env.REACT_API_USER_URL;
const axios = new Axios();

class UserServices {



  userRegistration = (data) => {
    return axios.Post(`${baseUrl}/registration`, data);
  };

  userLogin = (data) => {
    return axios.Post(`${baseUrl}/login`, data);
  };
}

export default new UserServices















