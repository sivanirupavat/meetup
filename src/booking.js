import React, { Component } from 'react'
import firebase from './firebase';
import 'firebase/firestore';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';
export class Booking extends Component {
    
    state = {
        booking: []
    }
    fetchbooking = () => {
        const db = firebase.firestore();
        db.settings({ timestampsInSnapshots: true });
        db.collection("books").get().then((snapshot) => {
            let bookingArray = []
            snapshot.docs.forEach(doc => {
                console.log(doc.data(), "doc")

                /* Update the components state with query result */
                bookingArray.push(doc.data())
            });
            if ((this.state.booking && this.state.booking.length !== bookingArray.length) || !this.state.booking) {
                this.setState({ booking: bookingArray })
            }
        });
    }
    render() {
        
            
            const user = firebase.auth().currentUser;
            console.log(user, "user_uid")
            if (user) {
                this.fetchbooking()
            }
            console.log(this.state.booking, "books")
            return (
                <div className="container" >
                    {
                        this.state.booking &&  this.state.booking.length !== 0
                        ? this.state.booking.map((books, index) => {
                            
                            return (
                                <Card className="car col-md-3" id="card-list">
                                    <CardImg top width="100%" height="100px" src="/img/download.jpg" alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>{books.cafe.Name} </CardTitle>
                                        <CardSubtitle>{books.cafe.Address}</CardSubtitle>
                                        <CardText>{books.cafe.average_cost}
                                            {books.cafe.time_slot}
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

export default Booking;
