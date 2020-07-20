import React from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';
import Form from './components/form'
class App extends React.Component {
  constructor (){
    super()

    this.state = {
      usuarios: []
    }
  }
  deletUsers = async (id) => {
    const url = 'https://academlo-api-users.herokuapp.com/user/2'
    await axios.delete(url)
    alert('se borro exitosamente')

  }
   async componentDidMount() {
    const url = 'https://academlo-api-users.herokuapp.com/users';
    const rest = await axios.get(url);
    console.log(rest)
    this.setState({usuarios: rest.data.data})
    }

  render(){
    return (
      <div className="App">
        <h1>Api</h1>
        <Form />
        <button onClick={this.deletUsers}>Borra usuario</button>
        <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.usuarios.map(user => (
                                <li className="list-group-item list-group-item-action" key={user.id}>
                                    {user.name}
                                </li>
                            ))
                        }
                    </ul>
                </div>
      </div>
    );
  }
}

export default App;
