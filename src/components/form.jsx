
import React from "react";
import axios from 'axios'

class Form extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            lastname: '',
            password: ''

        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value })
    }
    submitHadler = (e) => {
      e.preventDefault();
      console.log(this.state)
      axios.post('https://academlo-api-users.herokuapp.com/users', this.state)
        .then(response =>{
            console.log(response)
        })
        .catch(error => {
            console.log(error);
        })
        this.setState({ name: '',
        email: '',
        lastname: '',
        password: ''})
    }


  render() {
      const {name,email,lastname,password} = this.state
    return (
        <form onSubmit={this.submitHadler}>
        <div class="row m-0">
          <div class="col">
            <h2>Agregar un nuevo usuario</h2>
            <input 
              type="text" 
              className="form-control" 
              placeholder="First name" 
              name="name" 
              value={name} 
              onChange={this.changeHandler} 
            />
            <br></br>
             <input 
              type="text" 
              className="form-control block mb-3" 
              placeholder="Last name" 
              name="lastname" 
              value={lastname}
              onChange={this.changeHandler} 
             />
              <input 
              type="email" 
              className="form-control block mb-3" 
              placeholder="email" 
              name="email" 
              value={email}
              onChange={this.changeHandler} 
            />
            <input 
              type="password" 
              className="form-control block mb-3" 
              placeholder="contraseña" 
              name="password" 
              value={password}
              onChange={this.changeHandler} 
            />
            <button type="submit" className="btn btn-primary btn-block">Enviar</button> 
          </div>
        </div>
      </form>
    );
  }
}

export default Form;