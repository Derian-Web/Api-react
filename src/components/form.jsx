
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
          <div class="col-2">
            <input 
              type="text" 
              class="form-control" 
              placeholder="First name" 
              name="name" 
              value={name} 
              onChange={this.changeHandler} 
            />
          </div>
          <div class="col-2">
            <input 
              type="text" 
              class="form-control block" 
              placeholder="Last name" 
              name="lastname" 
              value={lastname}
              onChange={this.changeHandler} 
             />
          </div>
          <div class="col-2">
            <input 
              type="email" 
              class="form-control block" 
              placeholder="email" 
              name="email" 
              value={email}
              onChange={this.changeHandler} 
            />
          </div>
          <div class="col-2">
            <input 
              type="password" 
              class="form-control block" 
              placeholder="contraseña" 
              name="password" 
              value={password}
              onChange={this.changeHandler} 
            />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button> 
        </div>
      </form>
    );
  }
}

export default Form;