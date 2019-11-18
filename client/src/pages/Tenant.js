import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal';
import TakeMoney from "../components/Stripe_button";
// import { Link } from "react-router-dom";
import API from "../utils/API";



class Tenant extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      showModal1: false,
      appartments: [],
      catchid: "",
      name: "",
      user: ""
    }
  // ...
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handlePhoneChange = this.handlePhoneChange.bind(this)
    this.handleMessageChange = this.handleMessageChange.bind(this)

  }
  
  componentDidMount = () => {
    console.log(this.state)
    // const user = JSON.stringify(sessionStorage.getItem("user"));
    const user = sessionStorage.getItem("user");
    console.log("tenant", user);
    if (user) {
      this.setState({
        user: JSON.parse(user)
      })
    }
  }

  open = () => {
    this.setState({ showModal: true });
  }

  open2 = () => {
    this.setState({ showModal1: true });
  }

  close = (event) => {
    if (event) event.preventDefault();
    this.setState({ showModal: false });
  }
  close1 = (event) => {
    if (event) event.preventDefault();
    this.setState({ showModal1: false });
  }

  loadUnit = () => {
    API.getUnit()
      .then(res => {
        this.setState({
          masterdata: res.data
        })
      }
    )
  }

  onSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    const ticketData =
    {
      name: this.state.name,
      phone: this.state.phone,
      message: this.state.message,
     
    }
    console.log(ticketData)
    API.createTicket(ticketData)
      .then(res => console.log(res))

        this.setState({ showModal: false });
  }
  
  handleNameChange(event) {
    this.setState({name: event.target.value})
    console.log(this.state)
  } 
  handlePhoneChange(event) {
    this.setState({phone: event.target.value})
    console.log(this.state)
  } 
  handleMessageChange(event) {
    this.setState({message: event.target.value})
    console.log(this.state)
  } 

  render() {

    const {user} = this.state;


    return (

      <div class="container-fluid">
        <div className="row justify-content-center">
          <div className="card cards3 animated fadeInUp slow">
            <div className="card-header">
              Your Property Address:
            </div>
            {this.state.appartments.filter(appartment => {console.log(appartment)
                return appartment._id === this.state.catchid
        }).map((appartment) =>{
          return <div className="card-body">
                <h5 className="card-title">{appartment.address}</h5>
              </div>
            })}
        </div>
      </div>


          <div className="row justify-content-center">
            <div className="col-md-5 col3 animated fadeInUp slow delay">
              <div className="jumbotron tent2">
                <h2>Customer Profile</h2>
                <h5>Name: </h5>
                <h5>Phone: </h5>
                <h5>Email: {user ? user.email : "test@email.com"} </h5>
                <h5>Rent: </h5>
                <h5>Next Rent Due:</h5>
              </div>
            </div>


<div className="col-md-5 col3 animated fadeInUp slow delay">
  <div className="jumbotron tent2">
    <button type="button" name="issueModal" className="btn btn-primary btn-lg btn-block" onClick={this.open}>Request Maintenance</button>
    <br />
    <button type="button" name="payRentModal" className="btn btn-primary btn-lg btn-block" onClick={this.open2}>Pay Rent</button>
    <br />
    <div>

    </div>
    <button type="button" className="btn btn-primary btn-lg btn-block">Contact Us</button>
    <br />

    </div>
  </div>
</div>

  <Modal
    show={this.state.showModal} onHide={this.close}>
    <Modal.Header closeButton>
      <Modal.Title>
        <h5>Report an Issue</h5>
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
<form>
  <div class="form-group">
    <label className="col-form-label">Your Name:</label>
    <input type="text" className="form-control" placeholder="Your Name...." />
</div>
    <div class="form-group">
      <label className="col-form-label">Your Phone:</label>
      <input type="tel" className="form-control" placeholder="XXX-XXX-XXXX"/>
</div>
      <div className="form-group">
        <label className="col-form-label">Please provide the details of the issue:</label>
        <textarea className="form-control"></textarea>
      </div>
      <div class="modal-footer">
        <button type="submit" className="btn btn-success submit" onClick={this.onSubmit}>Submit</button>
        <button type="close" onClick={this.close} className="btn btn-success submit" >Close</button>
      </div>
    </form>
  </Modal.Body>
</Modal>

<Modal
    show={this.state.showModal1} onHide={this.close}>
    <Modal.Header closeButton>
      <Modal.Title>
        <h5>Pay the Rent</h5>
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <TakeMoney/>
  </Modal.Body>
</Modal>




          <Modal
            show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>
                <h5>Report an Issue</h5>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <div class="form-group">
                  <label className="col-form-label">Your Name:</label>
                  <input type="text" className="form-control" placeholder="Your Name...." name="name" value={this.state.name} onChange={this.handleNameChange}/>
                </div>
                <div class="form-group">
                  <label className="col-form-label">Your Phone:</label>
                  <input type="tel" className="form-control" placeholder="XXX-XXX-XXXX"  name="phone" value={this.state.phone} onChange={this.handlePhoneChange}/>
                </div>
                <div className="form-group">
                  <label className="col-form-label">Please provide the details of the issue:</label>
                  <textarea className="form-control" name="message" value={this.state.message} onChange={this.handleMessageChange}></textarea>
                </div>
                <div class="modal-footer">
                  <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={this.onSubmit}>Submit</button>
                  <button type="close" onClick={this.close} className="btn btn-primary btn-lg btn-block" >Close</button>
                </div>
              </form>
            </Modal.Body>
          </Modal>

          <Modal
            show={this.state.showModal1} onHide={this.close1}>
            <Modal.Header closeButton>
              <Modal.Title>
                <h5>Rent is due on the 1st of every month</h5>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <TakeMoney/>
            </Modal.Body>
          </Modal>

        </div>
        )
      }
    }
    
    export default Tenant;
