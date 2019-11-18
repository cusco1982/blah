import React, { Component } from "react";
import Card from "../components/Card";
import Modal from 'react-bootstrap/Modal'
import API from '../utils/API'




class Properties extends Component {
  state = {
    appartments: [],
    showModal: false,
    catchid: ""
  };

  open = (id) => {
    this.setState({ showModal: true, catchid:id });
    
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
      this.setState({ appartments: res.data })
    })
  }
  

  render() {
    return (
      <div>
      <div className="container-fluid">
          <div className="row justify-content-center">
              {this.state.appartments.map(appartment => {console.log(appartment)
                return <Card   
                              id={appartment._id} 
                              address={appartment.address} 
                              city={appartment.city + ", " + appartment.state + ", " + appartment.zip} 
                              price={"Price: $" + appartment.price +" | "} 
                              other={"SqFt: " + appartment.sqFeet + "  |  " + "Rooms: " + appartment.rooms} 
                              open={this.open} />
              })}
          </div>
      </div>




      <Modal
        size="lg"
        show={this.state.showModal} onHide={this.close}
        aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
        {this.state.appartments.filter(appartment => {console.log(appartment)
                return appartment._id === this.state.catchid
        }).map((appartment) =>{
          return <Modal.Title id="example-modal-sizes-title-lg">
          <h5>Apply for: {appartment.address}, {appartment.city}, {appartment.state}. &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Price: ${appartment.price}</h5>
          </Modal.Title>
        })}
        </Modal.Header>
        <Modal.Body>
        <form className="myform" action="/api/tenants" method="POST">
              <div className="row">
                <div className="col-md">
                  <label className="lable">Name:</label><br/>
                  <input className="form-control input" type="text" placeholder=" First name.." required/><br/>
                </div>
                <div className="col-md">
                  <label className="lable">Last Name:</label><br/>
                  <input className="form-control input" type="text" placeholder=" Last Name.." required/><br/>
                </div>
              </div>

              <div className="row">
                <div className="col-md">

                  <label className="lable1">Email:</label><br/>
                  <input className="form-control input" type="email" placeholder=" Your@email.." required/>
                  <br/>
                </div>
                <div className="col-md">
                  <label className="lable1">Telephone:</label><br/>
                  <input className="form-control input" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="XXX-XXX-XXXX" required/>
                </div>
              </div>

              <div className="row">
                <div className="col-md">
                  <label className="lable1">Password:</label><br/>
                  <input className="form-control input" type="password" required/>
                   
                </div>
                <div className="col-md">
                  <label className="lable1">Check Password:</label><br/>
                  <input className="form-control input" type="password" required/>
                </div>

              </div>


              <br/><br/>

              <button className="btn btn-primary btn-lg btn-block">Submit</button><br/>

            </form>

        </Modal.Body>
      </Modal>

</div>

    );
  }
}
export default Properties;