import React from 'react';


class LoginForm extends React.Component {

  state = {
    username: ""
  }


  render(){
    
    return (
      <div className="login">
        <form className="login-form" onChange={this.handleNewUser}>
          <input placeholder="Enter a username..." />
          <input type="submit" value="Log In"/>
        </form>
      </div>
    ); 
  }
}

export default LoginForm;