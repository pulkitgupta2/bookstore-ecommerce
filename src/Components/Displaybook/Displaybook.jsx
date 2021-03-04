/** @format */

import React, { useState, useEffect, Fragment, useContext } from "react";

import Bookservice from "../../Services/BookService";
import "./displaybook.scss";
import bookImg from "../../Assets/Image12.png";
import bookListContext from "../Context";
import { Card, Button } from "react-bootstrap";
import BookItem from "./BookItem";
// import cartCtx from "../../context/cartCtx";
let bookService = new Bookservice();

export default function DisplayBooks() {
  // const [BookList, setBookList] = useState([]);
  // console.log(BookList);
  // useEffect(() => {
  //   getAllBooks();
  // }, []);

  // const getAllBooks = () => {
  //   Bookservice.getBooks()
  //     .then((res) => {
  //       console.log(res);
  //       setBookList(res.data.result);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  const { books } = useContext(bookListContext);

  
  return (
    <>
      {/* // <cartCtx.Provider value={{ data }}> */}
      <div className="book-length-div">
        <div className="bookLength">
          Books <span className="book-length">({books.length}) </span>
        </div>{" "}
      </div>

      <div className="container-fluid">
        {books.map((item) => (
         <BookItem item={item}/>
        ))}
      </div>
    </>
    // </cartCtx.Provider>
  );
}
