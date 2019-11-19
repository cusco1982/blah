import React, { Component } from "react";
import Card from "../components/Card";
import Modal from 'react-bootstrap/Modal'
import API from '../utils/API'




class Properties extends Component {
  state = {
    apartments: [],
    showModal: false,
    catchid: ""
  };

  open = (id) => {
    this.setState({ showModal: true, catchid: id });

  }
  close = (event) => {
    if (event) event.preventDefault();
    this.setState({ showModal: false });
  }

  componentDidMount() {
    this.loadAppart();
  }

  loadAppart = () => {
    API.getUnit().then(res => {
      console.log(res)
      this.setState({ apartments: res.data })
    })
  }


  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row justify-content-center">
            {this.state.apartments.map(apartment => {
              console.log(apartment)
              return <Card
                id={apartment._id}
                address={apartment.address}
                city={apartment.city + ", " + apartment.state + ", " + apartment.zip}
                price={"Price: $" + apartment.price + " | "}
                other={"SqFt: " + apartment.sqFeet + "  |  " + "Rooms: " + apartment.rooms}
                open={this.open} />
            })}
          </div>
        </div>




        <Modal
          size="lg"
          show={this.state.showModal} onHide={this.close}
          aria-labelledby="example-modal-sizes-title-lg">
          <Modal.Header closeButton>
            {this.state.apartments.filter(apartment => {
              console.log(apartment)
              return apartment._id === this.state.catchid
            }).map((apartment) => {
              return <Modal.Title id="example-modal-sizes-title-lg">
                <h5>Apply for: {apartment.address}, {apartment.city}, {apartment.state}. &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Price: ${apartment.price}</h5>
              </Modal.Title>
            })}
          </Modal.Header>
          <Modal.Body>
            <form className="myform" action="/api/tenants" method="POST">
              <div className="row">
                <div className="col-md">
                  <label className="lable">Name:</label><br />
                  <input className="form-control input" type="text" placeholder=" First name.." required /><br />
                </div>
                <div className="col-md">
                  <label className="lable">Last Name:</label><br />
                  <input className="form-control input" type="text" placeholder=" Last Name.." required /><br />
                </div>
              </div>

              <div className="row">
                <div className="col-md">

                  <label className="lable1">Email:</label><br />
                  <input className="form-control input" type="email" placeholder=" Your@email.." required />
                  <br />
                </div>
                <div className="col-md">
                  <label className="lable1">Telephone:</label><br />
                  <input className="form-control input" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="XXX-XXX-XXXX" required />
                </div>
              </div>

              <div className="row">
                <div className="col-md">
                  <label className="lable1">Password:</label><br />
                  <input className="form-control input" type="password" required />

                </div>
                <div className="col-md">
                  <label className="lable1">Check Password:</label><br />
                  <input className="form-control input" type="password" required />
                </div>

              </div>


              <br /><br />

              <button className="btn btn-primary btn-lg btn-block">Submit</button><br />

            </form>

          </Modal.Body>
        </Modal>

      </div>

    );
  }
}
export default Properties;