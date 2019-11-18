import React, { Component } from "react";
// import Login from "../components/Login";
// import API from "../utils/API"
import { Link } from "react-router-dom";
import axios from "axios"




export default class Tenants extends Component {

  state = {
    email: '',
    password: '',
    // errorMessage: ""
  };

  // onSubmit = () => {
  //   const email = this.state.email;
  //   const pass = this.state.pass;
  //   API.login({ email: email, pass: pass })
  // }

  handleSubmit = event => {
    event.preventDefault();

    const { email, password } = this.state;
    axios({
      url: "/authentication/signin",
      method: 'POST',
      data: {
        email,
        password
      }
    })
      .then(response => {
        console.log(response);
        const { email } = response.data;
        sessionStorage.setItem("user", JSON.stringify({ email }));
        if (email === "manager@gmail.com") {
          this.props.history.push('/admin')
        } else {
          this.props.history.push('/tenant')
        }
      })
      .catch((error) => {
        console.log(error)
      }
      );
  }
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  render() {
    return (
      <div className="container-fluid imgcont">
        <div className="row justify-content-center">
          <div className="col-md-4 col3 animated fadeInUp slow delay">
            <div className="jumbotron tent">
              <h2>Online Portal</h2>
              <h4>Pay rent, submit maintenance requests, and view your account from anywhere.</h4>
            </div>
          </div>

          <div className="col-md-4 col3 animated fadeInUp slow delay">
            <div className="jumbotron tent1">
              <form onSubmit={this.handleSubmit}>
                <div className="loginput">
                  <label for="email">Your Email Address</label>
                  <input className="form-control" type="email" id="email" name="email" onChange={this.handleChange} />
                </div>
                <div className="loginput">
                  <label for="password">Password</label>
                  <input className="form-control" type="password" id="password" name="password" onChange={this.handleChange} />
                </div>
                <br />
                <div>
                  <button className="btn btn-primary btn-lg btn-block" style={{ marginBottom: "10px" }} type="submit">Login Now</button>
                  {/* <p class="lead mt-4">
          No Account? <a href="/register">Register</a>
        </p> */}
                </div>
              </form>              <p class="lead mt-4">
                No Account? <Link className="register-link" to="/register">Register</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
