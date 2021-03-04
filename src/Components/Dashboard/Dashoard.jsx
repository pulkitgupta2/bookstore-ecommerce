/** @format */
import React, { useState, useEffect } from "react";
// import Displaybook from "../Displaybook/Displaybook"
import Header from "../Header/Header";
import Displaybook from "../Displaybook/Displaybook";
import BookService from "../../Services/BookService";
import bookListContext from "../Context";
import cartContext from "../Context";
import "./dashboard.scss";
import Cart from "../Cart/Cart";
// import ProtectedRoute from "../ProtectedRoute";
import {BrowserRouter as Route, Switch } from "react-router-dom";

import Footer from "../Footer/Footer";
let bookService = new BookService();

const DisplayBooks = (props) => {
  const [BookList, setBookList] = useState([]);
  const [cartBooks, setCartBooks] = useState([]);
  useEffect(() => {
    getBooks();
  }, []);
  const getBooks = () => {
    bookService
      .getBooks()
      .then((response) => {
        console.log(response);
        setBookList(response.data.result);
        // books.map((data) => (data.isCart = false));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    allCartItem();
  }, []);

  const allCartItem = () => {
    bookService
      .getCartItem()
      .then((data) => {
        console.log(data.data.result);
        setCartBooks(data.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const nextpath = (path) => {
    props.history.push(path);
  };

  return (
    <React.Fragment>
      <Header />
      {/* <Switch> */}
        <div className="dashboraddisplay">
          <bookListContext.Provider value={{ books: BookList }}>
            <Displaybook />
          </bookListContext.Provider>
        </div>
      
      {/* </Switch> */}
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default DisplayBooks;
