import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import './login.css';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      name: "",
      email: "",
      address: "",
      phone: "",
      userID: "",
      access: "",
    };
  }
 
checkAuth = () => {
  if(this.state.isLoggedIn){
    this.componentClicked();
  }
}
  componentClicked = () => {
    console.log("clicked");
    this.props.history.push("/dashboard", {
      id: this.state.userID,
      access: this.state.access,
    });
  }


  responseFacebook = (response) => {
    console.log(response)
    if (response.accessToken){
      this.setState({
        name: response.name,
        email: response.email,
        address: response.address,
        phone: response.phone,
        userID: response.id,
        access: response.accessToken,
        isLoggedIn: true,
      });
    }
  }
  render() {
    let fbContent;
    if (this.state.isLoggedIn) {
      this.props.history.push("/dashboard", {
        id: this.state.userID,
        access: this.state.access,
      });
    } else {
      fbContent = (
        <FacebookLogin
          appId='379462766637679'
          autoLoad={false}
          fields='name,email,picture'
          callback={this.responseFacebook}
          onClick={this.checkAuth}
        />
      );
  }
    return (
      <div className='App App-logo'>
        <header className='App-header'>
          To get started, authenticate with Facebook
          <br></br>
          {fbContent}
        </header>
      </div>
    );
  }
}
export default Login;


