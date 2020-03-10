import React from 'react';
import firebase from './firebase';
import { analytics } from 'firebase';
import './regi.css';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { FacebookLoginButton, LinkedInLoginButton } from 'react-social-login-buttons';
import { Route, Link } from 'react-router-dom';


class register extends React.Component {


  constructor(props) {
    super(props);
    this.signup = this.signup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: '',
      displayName:''
    }
  }
  signup(e) {
    e.preventDefault();
    // window.alert(this.state.email);
    debugger
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password,this.state.displayName)
      .then(response => {
        console.log(response)
      })
      .catch((error) => {
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
        <Form className="Register-page">
          <h1>meetUP</h1>

          <FormGroup >
            <h3>Registration</h3>
            <div className="text-box">
              <i class="fa fa-user" aria-hidden="true"></i>
              <input name="displayName" type="Name" value={this.state.displayName} onChange={(event) => this.handleChange(event)}
                className="form-controller" placeholder="Name" />
            </div>
            <div className="text-box">
              <i class="fa fa-user" aria-hidden="true"></i>
              <input name="email" type="email" value={this.state.email} onChange={(event) => this.handleChange(event)}
                className="form-controller" placeholder="email" />
            </div>
          </FormGroup>
          <div className="text-box">
            <FormGroup>
              <i class="fa fa-lock" aria-hidden="true"></i>
              <input name="password" type="password" value={this.state.password} onChange={(event) => this.handleChange(event)}
                className="form-controller" placeholder="password" />
            </FormGroup>
          </div>
          <div class="input_field radio_option">
              <input type="radio" name="radiogroup1" id="rd1"/>
              <label for="rd1">Male</label>
              <input type="radio" name="radiogroup1" id="rd2"/>
              <label for="rd2">Female</label>
              </div>
            
              
            <div class="input_field checkbox_option">
            	<input type="checkbox" id="cb1"/>
    			<label for="cb1">I agree with terms and conditions</label>
            </div>
          <Button type="submit" className="btn-lg btn-block btn-dark " onClick={this.signup}>SIGNUP</Button>


          <p><Link to="/">Already have an account?</Link></p>
        </Form>
      </div>
</div>

    )
  }
}

export default register;
