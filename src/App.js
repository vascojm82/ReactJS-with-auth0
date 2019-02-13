import React, { Component } from 'react';
import Main from './components/Main.js';
import Secret from './components/Secret.js';
import Callback from './components/Callback.js';
import NotFound from './components/NotFound';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  render(){
    let mainComponent = "";

    switch(this.props.location){
      case "":
        mainComponent = <Main {...this.props} />;
        break;
      case "callback":
        mainComponent = <Callback />;
        break;
      case "secret":
        mainComponent = this.props.auth.isAuthenticated() ? <Secret {...this.props} /> : <NotFound />;
        break;
      default:
        mainComponent = <NotFound />;
    }

    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to React, {this.props.name}</h1>
        </header>
        {mainComponent}
      </div>
    );
  }
}

export default App;
