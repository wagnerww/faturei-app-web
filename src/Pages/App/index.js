import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Auth extends Component {
  render() {
    const { children } = this.props;
    const Auth = localStorage.getItem("FatureiAuth");
    return <div>{Auth ? children : <Redirect to={"/"} />}</div>;
  }
}

export default Auth;
