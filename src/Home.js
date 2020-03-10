import React, { Component } from 'react';
import './home.css';
import firebase from './firebase';
import 'firebase/firestore';
import { Button } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
// import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
//import styles from './home.css';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';



class Home extends Component {


    constructor(props) {
        super(props)
        this.state = {
            user: null,
            cafes: [],
            save:[]
        }
        this.logout = this.logout.bind(this);
    }

    logout = () => {
        debugger
        firebase.auth().signOut();
    }

    saveWishlist = (event, cafe) => {
        event.preventDefault()
        console.log("inside wishlist")
        const user = firebase.auth().currentUser;
        const db = firebase.firestore();
        db.collection("save").add({
            cafe: cafe,
            user_id: user.uid
        })
    }

    fetchCafes = () => {
        const db = firebase.firestore();
        db.settings({ timestampsInSnapshots: true });
        db.collection("cafes").get().then((snapshot) => {
            let cafeArray = []
            snapshot.docs.forEach(doc => {
                console.log(doc.data(), "doc")

                /* Update the components state with query result */
                cafeArray.push(doc.data())
            });
            if ((this.state.cafes && this.state.cafes.length !== cafeArray.length) || !this.state.cafes) {
                this.setState({ cafes: cafeArray })
            }
        });
    }



    render() {

        const user = firebase.auth().currentUser;
        console.log(user, "user variable")
        if (user) {
            this.fetchCafes()
            
        }
        console.log(this.state.cafes)
       
        
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
                <div className="carousel">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/img/maxresdefault.jpg"
                                alt="First slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/img/My Post.png"
                                alt="second slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/img/cafe.jpg"
                                alt="Third slide"
                            />


                        </Carousel.Item>
                    </Carousel>
                </div>
                {/**hotel */}
                <div className="container" >
                    {
                        this.state.cafes.map((cafe, index) => {
                            return (
                                <Card className="car col-md-3" id="card-list">
                                    <CardImg top width="100%" height="100px" src={cafe.img}></CardImg>
                                    <CardBody>
                                        <CardTitle>{cafe.Name} </CardTitle>
                                        <CardSubtitle>{cafe.Address}</CardSubtitle>
                                        <CardText>{cafe.average_cost}
                                            {cafe.time_slot}
                                        </CardText>
                                        <div className="overlay-right">
                                            <Button type="button" class="btn btn-secondary" title="quick shop">
                                                <Link to={{
                                                    pathname: "/hotel",
                                                    cafe: cafe
                                                }}>     <i className="fa fa-eye" aria-hidden="true"></i></Link>
                                            </Button>
                                            <Button type="button" onClick={(event) => this.saveWishlist(event, cafe)} className="btn btn-secondary" title="wishlist" id="add">
                                                <Link to="/saved"><i class="fa fa-heart" aria-hidden="true" /></Link>
                                            </Button>
                                                <Button type="button" className="btn btn-secondary" title="add to cart">
                                                    <Link to="/booking" > <i className="fa fa-shopping-cart" aria-hidden="true"></i></Link>
                                                </Button>
                                        </div>
                                            <Button><Link to={{
                                                    pathname: "/hotel",
                                                    cafe: cafe
                                                }}> see profile</Link></Button>
                                    </CardBody>
                                </Card>
                                
                                    )
                                })
                            }
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4344314241766!2d80.25231061433504!3d13.071630816213379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52672a02ed8cbb%3A0x89127af5b8dc9ba2!2sFromage!5e0!3m2!1sen!2sin!4v1583694253919!5m2!1sen!2sin" width="600px" height="450px"></iframe>
                </div>
                                <hr></hr>
                                <ul id="cafe-list"></ul>

                {/**about */ }

                            <div className="container">
                                <h1>ABOUT  US</h1>

                                <div class="card1-container col-md-3">
                                    <div className="card1">
                                        <div className="side"><img src="/img/cafe.jpg" width="100%" height="100%" alt="Jimmy Eat World" /></div>
                                        <div className="side back">Jimmy Eat World</div>
                                    </div>
                                </div>
                                <div class="card1-container col-md-3">
                                    <div className="card1">
                                        <div className="side"><img src="/img/cafe.jpg" width="100%" height="100%" alt="Jimmy Eat World" /></div>
                                        <div className="side back">Jimmy Eat World</div>
                                    </div>
                                </div>
                                <div class="card1-container col-md-3">
                                    <div className="card1">
                                        <div className="side"><img src="/img/cafe.jpg" width="100%" height="100%" alt="Jimmy Eat World" /></div>
                                        <div className="side back">Jimmy Eat World</div>
                                    </div>
                                </div>
                            </div>

                                <hr></hr>


                {/**contact */ }

                            <div className="container">
                                <h1>CONTACT  US</h1>
                                <Card className="car col-md-3">
                                    <CardImg top width="100%" src="/img/cafe.jpg" alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle className="title1">Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                        <CardText className="a"> <a href="#"><i class="fa fa-dribbble"></i></a>
                                            <a href="#"><i class="fa fa-twitter"></i></a>
                                            <a href="#"><i class="fa fa-linkedin"></i></a>
                                            <a href="#"><i class="fa fa-facebook"></i></a> </CardText>
                                        <Button className="button1">Button</Button>
                                    </CardBody>
                                </Card>
                                <Card className="car col-md-3">
                                    <CardImg top width="100%" src="/img/cafe.jpg" alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle className="title1">Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                        <CardText className="a"> <a href="#"><i class="fa fa-dribbble"></i></a>
                                            <a href="#"><i class="fa fa-twitter"></i></a>
                                            <a href="#"><i class="fa fa-linkedin"></i></a>
                                            <a href="#"><i class="fa fa-facebook"></i></a> </CardText>
                                        <Button className="button1">Button</Button>
                                    </CardBody>
                                </Card>
                                <Card className="car col-md-3">
                                    <CardImg top width="100%" src="/img/cafe.jpg" alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle className="title1">Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                        <CardText className="a"> <a href="#"><i class="fa fa-dribbble"></i></a>
                                            <a href="#"><i class="fa fa-twitter"></i></a>
                                            <a href="#"><i class="fa fa-linkedin"></i></a>
                                            <a href="#"><i class="fa fa-facebook"></i></a> </CardText>
                                        <Button className="button1">Button</Button>
                                    </CardBody>
                                </Card>
                            </div>
                            {/**footer */ }
                            <section>
                                <div className="footer">
                                    <div className="container text-center">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <h1>Useful Links</h1>
                                                <p>Privacy Policy</p>
                                                <p>Terms of Use</p>
                                                <p>Return Policy</p>
                                                <p>Discount Coupons</p>

                                            </div>

                                            <div className="col-md-4">
                                                <h1>About us</h1>
                                                <p>Contact us</p>
                                                <p>career</p>
                                                <p>commpany</p>
                                                <p>affiliate</p>
                                            </div>
                                            <div className="col-md-4">
                                                <h1>Follow Us On</h1>
                                                <p><i className="fa fa-fw fa-instagram"></i>Instagram</p>
                                                <p><i className="fa fa-fw fa-facebook" aria-hidden="true"></i> Facebook</p>
                                                <p> <i className="fa fa-fw fa-youtube"></i>Youtube</p>
                                            </div>
                                            <hr></hr>

                                        </div>
                                        <p className="copyright">made by <b>sivani rupavat&copy;</b></p>

                                    </div>
                                </div>
                            </section>
                                <script type="text/javascript">
                                    $('.clockpicker').clockpicker();
</script>
                {/*<script src="check.js"></script>*/ }
            </div>
                )
            }
        }
        
        
        
        export default Home;
