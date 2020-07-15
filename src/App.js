import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/form'
class App extends React.Component {
  constructor (){
    super()

    this.state = {
      usuarios: []
    }
  }
  componentDidMount() {
        fetch('https://academlo-api-users.herokuapp.com/users')
          .then((response) => {
            return response.json()
          })
          .then((result) => {
           this.setState({ usuarios: result.data })
        })
    }

  render(){
    return (
      <div className="App">
        <h1>Api</h1>
        <p>{this.state.usuarios.name}</p>
        <Form />
      </div>
    );
  }
}

export default App;
