import React, { Component } from 'react'
import firebase from './firebase';
import './profile.css'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText, CarouselItem } from '@trendmicro/react-sidenav';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css'
export class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null
        }
        this.logout = this.logout.bind(this);
    }
    logout = () => {
        debugger
        firebase.auth().signOut();
    }
    render() {
        const user = firebase.auth().currentUser;
        console.log(user, "user variable")
   
    
        return (
            <div>
<nav className="navbar   navbar-stickybar">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand">
                                <div className="logo-image">
                                    <img src="/img/My Post (14).png" />
                                </div>
                            </a>
                        </div>
                        
                        <form className="form-inline ml-auto ">
                            <input type="text" className="form-control" placeholder="Search" />
                            <button type="submit" className="btn btn-danger"><i class="fa fa-search" aria-hidden="true"></i></button>
                        </form>
                    </div>
                </nav>

                <SideNav
                    onSelect={(selected) => {
                        const to = '/' + selected;
                        if (this.props.location.pathname !== to) {
                            this.props.history.push(to);
                        }
                    }}>
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="home">
                        <NavItem eventKey="profile">
                            <NavIcon>
                                <i className="fa fa-fw fa-user" style={{ fontSize: '1.75em' }} />
                            </NavIcon>

                            <NavText>
                                Profile
                                        </NavText>
                        </NavItem>

                        <NavItem eventKey="Home">
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Home
                                        </NavText>
                        </NavItem>

                        <NavItem eventKey="Saved">
                            <NavIcon>
                                <i className="fa fa-fw fa-heart" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                saved
                                        </NavText>
                        </NavItem>
                        <NavItem eventKey="Booking">
                            <NavIcon>
                                <i className="fa fa-fw fa-ticket" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Booking
                                        </NavText>
                        </NavItem>
                        <NavItem onClick={this.logout}>
                            <NavIcon>
                                <i className="fa fa-fw fa-sign-out" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                logout
                                        </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
               <div className="container" >
                <img className="img" src="/img/default.png" width="100px" height="100px"></img>
                <table class="table table-striped">
                <tbody>
      <tr>
        <td>name</td>
       <td>{user.displayName}</td>
      </tr>
      <tr>
        <td>email</td>
        <td>{user.email}</td>
      </tr>
      
    </tbody>
    </table>
             
      
      <button className="button" onClick={this.logout}>
        <i className="fa fa-fw fa-sign-out" style={{ fontSize: '1.75em' }} />logout
     </button>
            </div>
            </div>
        )
    }
}

export default Profile;
