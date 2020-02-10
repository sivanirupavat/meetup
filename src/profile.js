import React, { Component } from 'react'

export class Profile extends Component {

    render() {
        const user = firebase.auth().currentUser;
        console.log(user, "user variable")
        return (
            <div>
                profile page
                <p>{user.email}</p>
            </div>
        )
    }
}

export default Profile;
