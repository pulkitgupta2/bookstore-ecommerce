/** @format */

import React, { Component, Fragment } from "react";
import userServices from "../../Services/userServices";
import "./login.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;
import UserServices from "../../Services/userServices";

class Login extends React.Component {
  constructor(props) {
    super(props);
    console.log("from login", this.props);
    this.state = {
      fields: {},
      errors: {},
    };
  }

  handleChange = (e) => {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields,
    });
  };

  submituserRegistrationForm = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["email"] = this.state.fields.email;
      fields["password"] = this.state.fields.password;
      UserServices.userLogin(fields)
        .then(
          (response) => {
            console.log("fieldsssss", JSON.stringify(fields));
            console.log(response);
            console.log(response.data);
          },
          () => {
            setTimeout(() => {
              this.props.history.push("/");
            }, 2000);
          }
        )
        .catch((error) => {
          console.error(error);
        });
    }
  };

  validateForm = () => {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "*Please enter your email-ID.";
    }

    if (typeof fields["email"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields["email"])) {
        formIsValid = false;
        errors["email"] = "*Please enter valid email-ID.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (
        !fields["password"].match(
          /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
        )
      ) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }

    this.setState({
      errors: errors,
    });
    return formIsValid;
  };

  render() {
    return (
      <div id="main-registration-container">
        <div id="register">
          {/* <h3>Login page</h3> */}
          <form
            method="post"
            name="userLoginForm"
            onSubmit={this.submituserRegistrationForm}
          >
            <label>Email ID:</label>
            <input
              type="text"
              name="email"
              value={this.state.fields.email}
              onChange={this.handleChange}
              autoComplete="off"
            />
            <div className="errorMsg">{this.state.errors.email}</div>

            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.fields.password}
              onChange={this.handleChange}
              autoComplete="off"
            />
            <div className="errorMsg">{this.state.errors.password}</div>
            <input
              type="submit"
              className="reg-button btn-danger"
              value="Login"
            
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
