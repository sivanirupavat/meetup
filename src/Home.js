import React, { Component } from 'react';
import './home.css';
import firebase from './firebase';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Button, Navbar, NavbarBrand, FormGroup, Form, Input, Image } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';
import Carousel from 'react-bootstrap/Carousel';
// import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
//import styles from './home.css';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Link } from 'react-router-dom';
import Saved from './saved';
import Booking from './booking';
import Profile from './profile';


class Home extends Component {
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
                <nav className="navbar navbar-inverse  navbar-static-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand">
                                <div className="logo-image">
                                    <img src="/img/My Post (14).png" />
                                </div>
                            </a>
                        </div>
                        <form className="form-inline ml-auto ">
                            <input type="text" className="form-control mr-sm-2" placeholder="Search" />
                            <button type="submit" className="btn btn-outline-light"><i class="fa fa-search" aria-hidden="true"></i></button>
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

                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="maxresdefault.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="My Post.png"
                            alt="second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="cafe.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>


                <div className="container" >
                    <Card className="car col-md-3">
                        <CardImg top width="100%" src="/img/My Post.png" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <div className="overlay-right">
                                <Button type="button" class="btn btn-secondary" title="quick shop">
                                    <i className="fa fa-eye" aria-hidden="true"></i>
                                </Button>
                                <Button type="button" className="btn btn-secondary" title="wishlist">
                                    <i class="fa fa-heart" aria-hidden="true"></i>
                                </Button>
                                <Button type="button" className="btn btn-secondary" title="add to cart">
                                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                </Button>
                            </div>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                    <Card className="car  col-md-3">
                        <CardImg top width="100%" src="/img/My Post.png" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <div className="overlay-right">
                                <Button type="button" class="btn btn-secondary" title="quick shop">
                                    <i className="fa fa-eye" aria-hidden="true"></i>
                                </Button>
                                <Button type="button" className="btn btn-secondary" title="wishlist">
                                    <i class="fa fa-heart" aria-hidden="true"></i>
                                </Button>
                                <Button type="button" className="btn btn-secondary" title="add to cart">
                                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                </Button>
                            </div>

                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                    <Card className="car col-md-3 ">
                        <CardImg top width="100%" src="/img/My Post.png" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <div className="overlay-right">
                                <Button type="button" class="btn btn-secondary" title="quick shop">
                                    <i className="fa fa-eye" aria-hidden="true"></i>
                                </Button>
                                <Button type="button" className="btn btn-secondary" title="wishlist">
                                    <i class="fa fa-heart" aria-hidden="true"></i>
                                </Button>
                                <Button type="button" className="btn btn-secondary" title="add to cart">
                                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                </Button>
                            </div>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                    <Card className="car col-md-3 ">
                        <CardImg top width="100%" src="/img/My Post.png" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <div className="overlay-right">
                                <Button type="button" class="btn btn-secondary" title="quick shop">
                                    <i className="fa fa-eye" aria-hidden="true"></i>
                                </Button>
                                <Button type="button" className="btn btn-secondary" title="wishlist">
                                    <i class="fa fa-heart" aria-hidden="true"></i>
                                </Button>
                                <Button type="button" className="btn btn-secondary" title="add to cart">
                                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                </Button>
                            </div>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                    <Card className="car col-md-3">
                        <CardImg top width="100%" src="/img/My Post.png" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <div className="overlay-right">
                                <Button type="button" class="btn btn-secondary" title="quick shop">
                                    <i className="fa fa-eye" aria-hidden="true"></i>
                                </Button>
                                <Button type="button" className="btn btn-secondary" title="wishlist">
                                    <i class="fa fa-heart" aria-hidden="true"></i>
                                </Button>
                                <Button type="button" className="btn btn-secondary" title="add to cart">
                                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                </Button>
                            </div>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                    <Card className="car col-md-3">
                        <CardImg top width="100%" src="/img/My Post.png" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <div className="overlay-right">
                                <Button type="button" class="btn btn-secondary" title="quick shop">
                                    <i className="fa fa-eye" aria-hidden="true"></i>
                                </Button>
                                <Button type="button" className="btn btn-secondary" title="wishlist">
                                    <i class="fa fa-heart" aria-hidden="true"></i>
                                </Button>
                                <Button type="button" className="btn btn-secondary" title="add to cart">
                                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                </Button>
                            </div>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                    <Card className="car col-md-3">
                        <CardImg top width="100%" src="/img/My Post.png" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <div className="overlay-right">
                                <Button type="button" class="btn btn-secondary" title="quick shop">
                                    <i className="fa fa-eye" aria-hidden="true"></i>
                                </Button>
                                <Button type="button" className="btn btn-secondary" title="wishlist">
                                    <i class="fa fa-heart" aria-hidden="true"></i>
                                </Button>
                                <Button type="button" className="btn btn-secondary" title="add to cart">
                                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                </Button>
                            </div>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                    <Card className="car col-md-3">
                        <CardImg top width="100%" src="/img/My Post.png" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <div className="overlay-right">
                                <Button type="button" class="btn btn-secondary" title="quick shop">
                                    <i className="fa fa-eye" aria-hidden="true"></i>
                                </Button>
                                <Button type="button" className="btn btn-secondary" title="wishlist">
                                    <i class="fa fa-heart" aria-hidden="true"></i>
                                </Button>
                                <Button type="button" className="btn btn-secondary" title="add to cart">
                                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                </Button>
                            </div>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                    <Card className="car col-md-3">
                        <CardImg top width="100%" src="/img/My Post.png" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <div className="overlay-right">
                                <Button type="button" class="btn btn-secondary" title="quick shop">
                                    <i className="fa fa-eye" aria-hidden="true"></i>
                                </Button>
                                <Button type="button" className="btn btn-secondary" title="wishlist">
                                    <i class="fa fa-heart" aria-hidden="true"></i>
                                </Button>
                                <Button type="button" className="btn btn-secondary" title="add to cart">
                                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                </Button>
                            </div>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </div>
                <hr></hr>

                {/**about */}

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

                {/**contact */}

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
                {/**footer */}
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
                                    <p>{user.email}</p>
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
            </div>
        )
    }
}

export default Home;
