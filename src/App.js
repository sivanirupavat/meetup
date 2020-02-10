import React, { Component } from 'react';

import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import firebase from './firebase';
import Login from './login';
import Home from './Home';
// import styledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Booking from './booking'
import Profile from './profile'
import Saved from './saved'
import Hotel from './hotel'
import register from './Register';
// import Register from './Register';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      isLoggedIn: false
    }
  }
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    // debugger
    firebase.auth().onAuthStateChanged((user) => {
      debugger
      if (user) {
        this.setState({ user: user, isLoggedIn: true });
      }
      else {
        this.setState({ user: null, isLoggedIn: false });
      }
    });
  }

  render() {

    let routes = null

    if (this.state.isLoggedIn) {
      debugger
      routes = (
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/login" component={Login} /> */}
            <Route exact path="/home" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="/booking" component={Booking} />
            <Route exact path="/hotel" component={Hotel}/>
            <Route path="*" render={() => <Redirect to="/" />} />
          </Switch>
        </Router>
      )
    }
    else {
      debugger
      routes = (
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/Register" component={register} />
            <Route exact path="*" render={() => <Redirect to="/" />} />
          </Switch>
        </Router>
      )
    }

    return (
      <div className="ppl">
        {routes}
      </div>

    );
  }
}

export default App;
