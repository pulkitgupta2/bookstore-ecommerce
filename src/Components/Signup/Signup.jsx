/** @format */
// import axios from "axios";
import React, { Component } from "react";
import "./signup.scss";
import UserServices from "../../Services/userServices";
import { withRouter } from "react-router";
// import { useHistory } from 'react-router-dom';

// import React from "react";
// import "./style.css";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    console.log("from registrations", this.props);
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
      fields["fullName"] = this.state.fields.fullName;
      fields["email"] = this.state.fields.email;
      fields["password"] = this.state.fields.password;
      fields["phone"] = this.state.fields.phone;
      UserServices.userRegistration(fields)
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

    if (!fields["fullName"]) {
      formIsValid = false;
      errors["fullName"] = "*Please enter your full name.";
    }

    if (typeof fields["fullName"] !== "undefined") {
      if (!fields["fullName"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["fullName"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "*Please enter your email-Id.";
    }

    if (typeof fields["email"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields["email"])) {
        formIsValid = false;
        errors["email"] = "*Please enter valid email-Id.";
      }
    }

    if (!fields["phone"]) {
      formIsValid = false;
      errors["phone"] = "*Please enter your mobile no.";
    }

    if (typeof fields["phone"] !== "undefined") {
      if (!fields["phone"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["phone"] = "*Please enter valid mobile no.";
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
          <form
            method="post"
            name="userRegistrationForm"
            onSubmit={this.submituserRegistrationForm}
          >
            <label>Name:</label>
            <input
              type="text"
              name="fullName"
              value={this.state.fields.fullName}
              onChange={this.handleChange}
              autoComplete="off"
            />
            <div className="errorMsg">{this.state.errors.fullName}</div>
            <label>Email Id:</label>
            <input
              type="text"
              name="email"
              value={this.state.fields.email}
              onChange={this.handleChange}
              autoComplete="off"
            />
            <div className="errorMsg">{this.state.errors.email}</div>
            <label>Mobile No:</label>
            <input
              type="text"
              name="phone"
              value={this.state.fields.phone}
              onChange={this.handleChange}
              autoComplete="off"
            />
            <div className="errorMsg">{this.state.errors.phone}</div>
            <label>Password:</label>
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
              value="SignUp"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
