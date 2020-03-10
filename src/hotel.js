import React, { Component, useState } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Modal, Form, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'
import { handleClose, handleShow } from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText, CarouselItem } from '@trendmicro/react-sidenav';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Carousel } from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import './hotel.css';
import firebase from './firebase';
import 'firebase/firestore';
import './datepicker.js' 


export class Hotel extends Component {
  booking = (event, cafe) => {
    event.preventDefault()
    console.log("inside books")
    const user = firebase.auth().currentUser;
    const db = firebase.firestore();
    this.toggle(2);
    db.collection("books").add({
        cafe: cafe,
        user_id: user.uid
    })
}

constructor(props) {

  super(props);
  
  this.state = {
  
  modal1: false,
  
  modal2: false,

  cafes: []
  
  };
  
  }
  
  toggle = nr => {
  
  let modalNumber = 'modal' + nr;
  
  this.setState({
  
  [modalNumber]: !this.state[modalNumber]
  
  });
  
  };
  
  render() {
    // this.fetchCafes()
    const cafe = this.props.location.cafe
    console.log(cafe, "cafe prop")
    console.log(this.props, "props")
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
          <div id='carousel-custom' class='carousel slide' data-ride='carousel'>
            <div class='carousel-outer'>

              <div class='carousel-inner'>
                <div class='item active'>
                  <img src='/img/cafe.jpg' alt='' width="100%" height="100%" />
                </div>
                <div class='item'>
                  <img src='/img/caf2.jpg' alt='' width="100%" height="100%" />
                </div>
                <div class='item'>
                  <img src='/img/caf3.jpg' alt='' width="100%" height="100%" />
                </div>

                <div class='item'>
                  <img src='/img/caf4.jpg' alt='' width="100%" height="100%" />
                </div>
                <div class='item'>
                  <img src='/img/caf5.jpg' alt='' width="100%" height="100%" />
                </div>
                <div class='item'>
                  <img src='/img/caf6.jpg' alt='' width="100%" height="100%" />
                </div>

                <div class='item'>
                  <img src='/img/caf7.jpg' alt='' width="100%" height="100%" />
                </div>
                <div class='item'>
                  <img src='/img/caf8.jpg' alt='' width="100%" height="100%" />
                </div>
                <div class='item'>
                  <img src='/img/caf9.jpg' alt='' width="100%" height="100%" />
                </div>
              </div>


              <a class='left carousel-control' href='#carousel-custom' data-slide='prev'>
                <span class='glyphicon glyphicon-chevron-left'></span>
              </a>
              <a class='right carousel-control' href='#carousel-custom' data-slide='next'>
                <span class='glyphicon glyphicon-chevron-right'></span>
              </a>
            </div>


            <ol class='carousel-indicators'>
              <li data-target='#carousel-custom' data-slide-to='0' class='active'><img src='/img/cafe.jpg' alt='' /></li>
              <li data-target='#carousel-custom' data-slide-to='1'><img src='/img/caf2.jpg' alt='' /></li>
              <li data-target='#carousel-custom' data-slide-to='2'><img src='/img/caf3.jpg' alt='' /></li>
              <li data-target='#carousel-custom' data-slide-to='3'><img src='/img/caf4.jpg' alt='' /></li>
              <li data-target='#carousel-custom' data-slide-to='4'><img src='/img/caf5.jpg' alt='' /></li>
              <li data-target='#carousel-custom' data-slide-to='5'><img src='/img/caf6.jpg' alt='' /></li>
              <li data-target='#carousel-custom' data-slide-to='6'><img src='/img/caf7.jpg' alt='' /></li>
              <li data-target='#carousel-custom' data-slide-to='7'><img src='/img/caf8.jpg' alt='' /></li>
              <li data-target='#carousel-custom' data-slide-to='8'><img src='/img/caf9.jpg' alt='' /></li>
            </ol>
          </div>
        </div>

        <Jumbotron>
        <p> Name : {cafe.Name}</p>
        <p>Address : {cafe.Address}</p>
        <p> BESTSELLING ITEMS:{cafe.BESTSELLINGITEM}  </p>
        <p> TYPE :{cafe.TYPE}  </p>
        <p> FACILITIES & FEATURES:{cafe.FACILITIESFEATURES}  </p>
        <p>average_cost:{cafe.average_cost}  </p>
        <p> contact:{cafe.contact}  </p>
        <p> cusinie:{cafe.cusinie}  </p>
        <p> seat:{cafe.seat}  </p>
        <p> time_slot:{cafe.time_slot}  </p>
        </Jumbotron>

        <div className="container">
          <span class="heading">User Rating</span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <p>4.1 average based on 254 reviews.</p>
          <hr style={{ border: '3px solid #f1f1f1' }} />

          <div class="row">
            <div class="side">
              <div>5 star</div>
            </div>
            <div class="middle">
              <div class="bar-container">
                <div class="bar-5"></div>
              </div>
            </div>
            <div class="side right">
              <div>150</div>
            </div>
            <div class="side">
              <div>4 star</div>
            </div>
            <div class="middle">
              <div class="bar-container">
                <div class="bar-4"></div>
              </div>
            </div>
            <div class="side right">
              <div>63</div>
            </div>
            <div class="side">
              <div>3 star</div>
            </div>
            <div class="middle">
              <div class="bar-container">
                <div class="bar-3"></div>
              </div>
            </div>
            <div class="side right">
              <div>15</div>
            </div>
            <div class="side">
              <div>2 star</div>
            </div>
            <div class="middle">
              <div class="bar-container">
                <div class="bar-2"></div>
              </div>
            </div>
            <div class="side right">
              <div>6</div>
            </div>
            <div class="side">
              <div>1 star</div>
            </div>
            <div class="middle">
              <div class="bar-container">
                <div class="bar-1"></div>
              </div>
            </div>
            <div class="side right">
              <div>20</div>
            </div>
          </div>
          <div className="fluid">
          <div class="row">
            <div class="col-sm-7">
              <hr />
              <div class="review-block">
                <div class="row">
                  <div class="col-sm-3">
                    <img src="http://dummyimage.com/60x60/666/ffffff&text=No+Image" class="img-rounded" />
                    <div class="review-block-name"><a href="#">nktailor</a></div>
                    <div class="review-block-date">January 29, 2016<br />1 day ago</div>
                  </div>
                  <div class="col-sm-9">
                    <div class="review-block-rate">
                      <button type="button" class="btn btn-warning btn-xs" aria-label="Left Align">
                        <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                      </button>
                      <button type="button" class="btn btn-warning btn-xs" aria-label="Left Align">
                        <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                      </button>
                      <button type="button" class="btn btn-warning btn-xs" aria-label="Left Align">
                        <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                      </button>
                      <button type="button" class="btn btn-default btn-grey btn-xs" aria-label="Left Align">
                        <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                      </button>
                      <button type="button" class="btn btn-default btn-grey btn-xs" aria-label="Left Align">
                        <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                      </button>
                    </div>
                    <div class="review-block-title">this was nice in buy</div>
                    <div class="review-block-description">this was nice in buy. this was nice in buy. this was nice in buy. this was nice in buy this was nice in buy this was nice in buy this was nice in buy this was nice in buy</div>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <img src="http://dummyimage.com/60x60/666/ffffff&text=No+Image" class="img-rounded" />
                    <div class="review-block-name"><a href="#">nktailor</a></div>
                    <div class="review-block-date">January 29, 2016<br />1 day ago</div>
                  </div>
                  <div class="col-sm-9">
                    <div class="review-block-rate">
                      <button type="button" class="btn btn-warning btn-xs" aria-label="Left Align">
                        <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                      </button>
                      <button type="button" class="btn btn-warning btn-xs" aria-label="Left Align">
                        <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                      </button>
                      <button type="button" class="btn btn-warning btn-xs" aria-label="Left Align">
                        <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                      </button>
                      <button type="button" class="btn btn-default btn-grey btn-xs" aria-label="Left Align">
                        <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                      </button>
                      <button type="button" class="btn btn-default btn-grey btn-xs" aria-label="Left Align">
                        <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                      </button>
                    </div>
                    <div class="review-block-title">this was nice in buy</div>
                    <div class="review-block-description">this was nice in buy. this was nice in buy. this was nice in buy. this was nice in buy this was nice in buy this was nice in buy this was nice in buy this was nice in buy</div>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3 ">
                    <img src="http://dummyimage.com/60x60/666/ffffff&text=No+Image" class="img-rounded" />
                    <div class="review-block-name"><a href="#">nktailor</a></div>
                    <div class="review-block-date">January 29, 2016<br />1 day ago</div>
                  </div>
                  <div class="col-sm-12">
                    <div class="review-block-rate">
                      <button type="button" class="btn btn-warning btn-xs" aria-label="Left Align">
                        <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                      </button>
                      <button type="button" class="btn btn-warning btn-xs" aria-label="Left Align">
                        <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                      </button>
                      <button type="button" class="btn btn-warning btn-xs" aria-label="Left Align">
                        <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                      </button>
                      <button type="button" class="btn btn-default btn-grey btn-xs" aria-label="Left Align">
                        <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                      </button>
                      <button type="button" class="btn btn-default btn-grey btn-xs" aria-label="Left Align">
                        <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                      </button>
                    </div>
                    <div class="review-block-title ">this was nice in buy</div>
                    <div class="review-block-description ">this was nice in buy. this was nice in buy. this was nice in buy. this was nice in buy this was nice in buy this was nice in buy this was nice in buy this was nice in buy</div>
                  </div>
                </div>
              </div>
            </div>
          </div></div>
</div>
        

<div Container>

<Button  onClick={() => this.toggle(1) }>Book table</Button>

<Modal isOpen={this.state.modal1} backdrop={true} centered  toggle={() => this.toggle(1)}>

<ModalHeader toggle={() => this.toggle(1)}>$20 per hour</ModalHeader>

<ModalBody>  <ModalBody> <label>Name</label>
              <input type="text" class="form-control"  />
              <label for="dateofbirth" >Date </label>
              <input type="date" class="form-control" name="dateofbirth" id="dateofbirth" />
              <label>Time</label>
              <div class="input-group clockpicker" data-placement="left" data-align="top" data-autoclose="true">
    <input type="text" class="form-control" value="13:14"/>
    <span class="input-group-addon">
        <span class="glyphicon glyphicon-time"></span>
    </span></div>
    <label>number of member</label>
  <input class="form-control" type="number" id="quantity" name="quantity" min="1" max="8" />
</ModalBody></ModalBody>

<ModalFooter>

<Button color="secondary" onClick={() => this.toggle(1)}>

Close

</Button>

<Button color="primary"  onClick={(event) => this.booking(event,cafe)} >

Booking

</Button>

</ModalFooter>

</Modal>

<Modal

backdrop={true}

isOpen={this.state.modal2}

toggle={() => this.toggle(2)}
centered
>

<ModalHeader toggle={() => this.toggle(2)}>Second Modal</ModalHeader>

<ModalBody>Booking confirmed!!</ModalBody>

<ModalFooter>

<Button color="secondary" onClick={() => this.toggle(2)}>

Close

</Button>
<Button color="danger" onClick={this.booking}>my booking</Button>


</ModalFooter>

</Modal>

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

export default Hotel;
