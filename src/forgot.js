import React, { Component } from 'react';
import { Label, Button } from 'reactstrap';

class Forgot extends React.Component {
  render() {
    return (
      <div>
        <Label>confirm password</Label>
        <input name="password" type="password" value={this.state.password} onChange={(event)=>this.handleChange(event)} className="form-controller"
        id="exapmpleInputPassword" placeholder="password"/>
        <Label>re-confirm password</Label>
        <input name="password" type="password" value={this.state.password} onChange={(event)=>this.handleChange(event)} className="form-controller"
        id="exapmpleInputPassword" placeholder="password"/>
        <Button>confirmed</Button>
      </div>
    );
  }
}

export default Forgot;
