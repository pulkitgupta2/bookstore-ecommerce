import React, { useState, useEffect } from "react";
// import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashoard";
import Login from "./Components/Login/Login";
import history from "./Components/history";
import Signup from "./Components/Signup/Signup";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header/Header";
import cartContext from "./Components/Context";
import BookService from "./Services/BookService";

let bookService = new BookService();

const App = (props) => {
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
    <Router history={history}>
      <Switch>
        <Route path="/dashboard" exact component={Dashboard}></Route>
        <Route path="/header" component={Header}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/Cart">
          <div className="dashboraddisplay">
            <cartContext.Provider value={{ cartBooks: cartBooks }}>
              <Cart nextpath={nextpath} />
              {/* <Cart/> */}
            </cartContext.Provider>
          </div>
        </Route>
        {/* <Route path="/Cart" component={Cart}></Route> */}
      </Switch>
    </Router>
  );
};

export default App;
