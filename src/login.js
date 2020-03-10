import React, { Component } from 'react';
import firebase from './firebase';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import './login.css'
import { Link, Route } from 'react-router-dom';
import register from './Register';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: '',
      password: '',
      
    }
  }
  login(e) {
    e.preventDefault();
    debugger
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
    }).catch((error) => {
      console.log(error);

    });
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });

  }
  render() {
    return (
      <div className="wrapper">
        <div className="col-md-6">
          <Form className="Login-page">
            <h1>meetUP</h1>

            <h3>LOGIN</h3>
            <div className="text-box">

              <i class="fa fa-user" aria-hidden="true"></i>
              <input name="email" value={this.state.email} onChange={(event) => this.handleChange(event)}
                id="exampleInputEmail" aria-describedby="emailHelp" placeholder="email" />
              <br></br>
            </div>
            <div className="text-box">
              <i class="fa fa-lock" aria-hidden="true"></i>
              <input name="password" type="password" value={this.state.password} onChange={(event) => this.handleChange(event)}
                id="exapmpleInputPassword" placeholder="password" />
            </div>
            <Button type="submit" className="btn-lg btn-dark btn-block" onClick={this.login}>LOGIN</Button>
            <br></br>

            <p className="text"> Dont have an  account?<Link to="Register" type="submit">SIGNUP</Link></p>

          </Form>
        </div>
      </div>
    )
  }
}
export default Login;