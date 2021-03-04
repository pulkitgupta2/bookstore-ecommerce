import Axios from "./AxiosService";
const baseUrl = process.env.REACT_API_USER_URL;
const axios = new Axios();

class BookService {
  getBooks = () => {
    return axios.Get(`${baseUrl}/get/book`);
  };

  addToCart = (id) => {
    const user = localStorage.getItem("bookStoreToken")
    return axios.Post(`${baseUrl}/add_cart_item/${id}`, false, {
      headers: {
        "x-access-token": `${user}`,
      },
    });
  };

  // getCartItem = () => {
  //   const user = localStorage.getItem("bookStoreToken")
  //   return axios.Get(`${baseUrl}/get_cart_items`, {
  //     headers: {
  //       "x-access-token": `{user}`,
  //     },
  //   });
  // };
  getCartItem = () => {
    const user = localStorage.getItem("bookStoreToken")
    return axios.Get(`${baseUrl}/get_cart_items`, {
      headers: {
        "x-access-token": `${user}`,
      },
    });
  };

  addOrder = (data) => {
    const user = localStorage.getItem("bookStoreToken")
    console.log(data);
    return axios.Post(`${baseUrl}/add/order`, data, {
      headers: {
        "x-access-token": `${user}`,
      },
    });
  };

  deleteCartItem = (id) => {
    const user = localStorage.getItem("bookStoreToken")
    return axios.Delete(`${baseUrl}/remove_cart_item/${id}`, {
      headers: {
        "x-access-token": `${user}`,  
      },
    });
  }

}



export default BookService











