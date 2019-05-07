import React, { Component } from 'react';
import './App.css';
import LoginForm from './LoginForm/LoginForm';
import PokemonContainer from './PokemonContainer/PokemonContainer'



class App extends Component{
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      username: null
    }
  }
  handleLogin = (formData) => {
    this.setState({
      loggedIn: true,
      username: formData.username
    })
  }
  render(){
    return (
      <div className="App">
        <h1>Welcome to Pokemon React App</h1>
        {
          this.state.loggedIn === true ?
          <PokemonContainer name={this.state.name}></PokemonContainer>
          :
          <LoginForm handleLogin = {this.handleLogin} ></LoginForm>
        }
      </div>
    );
  }
}

export default App;
