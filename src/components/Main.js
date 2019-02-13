import React, { Component } from 'react';

export default class Main extends Component{
  showSubmitBtn(){
    if(!this.props.auth.isAuthenticated()){
      return(
        <div>
          <hr />
          Please login first
          <hr />
          <button onClick={this.props.auth.login}>Login</button>
        </div>
      );
    }else{
      return <p>Do you want to see the secret area? <a href="/secret">secret area</a></p>;
    }
  }

  render(){
    return(
      <div>
        <h2>Main</h2>
        <p>Hello, {this.props.name}</p>
        {this.showSubmitBtn()}
      </div>
    );
  }
}
