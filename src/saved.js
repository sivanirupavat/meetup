import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import firebase from './firebase';
import 'firebase/firestore';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';
export class Saved extends Component {
    state = {
        saveWishlist: []
    }
    fetchsaveWishlist = () => {
        const db = firebase.firestore();
        db.settings({ timestampsInSnapshots: true });
        db.collection("save").get().then((snapshot) => {
            let saveWishlistArray = []
            snapshot.docs.forEach(doc => {
                console.log(doc.data(), "doc")

                /* Update the components state with query result */
                saveWishlistArray.push(doc.data())
            });
            if ((this.state.saveWishlist && this.state.saveWishlist.length !== saveWishlistArray.length) || !this.state.saveWishlist) {
                this.setState({ saveWishlist: saveWishlistArray })
            }
        });
    }
    render() {
        const user = firebase.auth().currentUser;
        console.log(user, "user_uid")
        if (user) {
            this.fetchsaveWishlist()
        }
        console.log(this.state.saveWishlist, "wishlist")
        return (
            <div className="container" >
                {
                    this.state.saveWishlist &&  this.state.saveWishlist.length !== 0
                    ? this.state.saveWishlist.map((wishlist, index) => {
                        
                        return (
                            <Card className="car col-md-3" id="card-list">
                                <CardImg top width="100%" height="100px" src="/img/download.jpg" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>{wishlist.cafe.Name} </CardTitle>
                                    <CardSubtitle>{wishlist.cafe.Address}</CardSubtitle>
                                    <CardText>{wishlist.cafe.average_cost}
                                        {wishlist.cafe.time_slot}
                                    </CardText>
                                </CardBody>
                            </Card>

                        )
                    })
                    : null
                }
            </div>


        )
    }
}

export default Saved;
