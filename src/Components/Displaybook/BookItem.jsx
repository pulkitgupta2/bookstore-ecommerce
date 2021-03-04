import React, { useContext, useState } from 'react'
import bookListContext from '../Context';
import Bookservice from "../../Services/BookService";
import bookImg from "../../Assets/Image12.png";
import { Card, Button } from "react-bootstrap";
let bookService = new Bookservice();

const BookItem = ({item}) => {
    const [details, setDetails] = useState(false);

  const [cartButtonMsg,setCartBtnMsg] = useState("ADD TO BAG")

  const { books } = useContext(bookListContext);
  console.log("books from display", books);
  // const [data, setData] = useState({});
  const addToBag = (e, item) => {
    e.stopPropagation();
    const id = item._id;
    console.log("iddd", id);
    item.is_Cart = true;
    bookService
      .addToCart(id)
      .then((item) => {
        console.log("itemmm", item);
        setDetails(true);
        setCartBtnMsg("ITEM ADDED")
      })
      .catch((err) => {
        console.log(err);
      });
  };
    return (
        <div>
             <div className="display" key={item._id}>
            <div class="bookCard my-2 mx-2 card shadow p-3 mb-5 bg-white">
              <div className="image image-div">
                <img class="card-img-top" src={bookImg} alt="" />
              </div>

              <div className="title">
                <h5 class="card-title"> {item.bookName}</h5>
              </div>
              <div className="author">by {item.author}</div>
              {/* <div className="quantity">({item.quantity})</div> */}
              <div className="price">Rs.{item.price}</div>
              <div className="displayadd">
                <button
                  type="button"
                  className="displayadd1 btn btn-danger"
                  onClick={(e) => addToBag(e, item)}
                >
                 {cartButtonMsg}
                </button>
                <button
                  type="button "
                  className="displayWhishlist1 btn btn-light"
                >
                  WHISHLIST
                </button>
              </div>
            </div>
          </div>
        </div>
    )
}

export default BookItem
