import React from 'react';
import './App.css';
import LoginForm from './LoginForm'
import UserHeader from './UserHeader'
import PoemsContainer from './PoemsContainer'
import NewPoemForm from './NewPoemForm'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      poems: [],
      username: ""
    }
  }

  handleNewUser = (event) => {
    event.preventDefault()
    this.setState({username: event.target.value})
  }

  componentDidMount() {
    fetch('http://localhost:3000/poems')
      .then(response=> response.json())
      .then(poems=> this.setState({poems: poems}) ) 
  }


  render(){
    
    return (
      <div className="app">
        <div className="sidebar">
          <LoginForm handleNewUser={this.handleNewUser}/>
          <UserHeader username={this.state.username}/>
          <NewPoemForm />
        </div>
        <PoemsContainer poems={this.state.poems}/>
      </div>
    ); 
  }
}

export default App;
