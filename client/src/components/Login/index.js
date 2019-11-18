import React from "react";


function Login(props) {
  return (

    <div>
      <div className="loginput">
        <label for="email">Your Email Address</label>
        <input className="form-control" type="email" id="email" name="email" required onChange={props.onChange} />
      </div>
      <div className="loginput">
        <label for="password">Password</label>
        <input className="form-control" type="password" id="password" name="password" required onChange={props.onChange} />
      </div>
      <br />
      <div>
        <button type="submit" className="btn btn-primary btn-lg btn-block" style={{ marginBottom: "10px" }} onClick={props.onSubmit}>Login Now</button>
        {/* <p class="lead mt-4">
          No Account? <a href="/register">Register</a>
        </p> */}
      </div>
    </div>

  )
}

export default Login;
