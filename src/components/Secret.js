import React, { Component } from 'react';

export default class Secret extends Component{
  render(){
    return(
      <div>
        This is the secret area. Jump back to <a href="/">Home</a>
        <br />
        <button onClick={this.props.auth.logout}>Logout</button>
      </div>
    );
  }
}
