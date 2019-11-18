import React, { Component } from "react";
import API from "../utils/API";
import Form from "../components/Form"
import DeleteBtn from "../components/DeleteBtn/DeleteBtn";

class Admin extends Component {

  headers = {
    tenant: ["First Name", "Last Name", "Address", "Phone", "Email", "Price", ""],
    tickets: ["First Name", "Phone", "Message", ""],
    units: ["Address", "City", "Zip", "State", "Price", "Rooms", "SqFeet", ""]
  }

  state = {
    whichheader: "tenant",
    masterdata: [],
    showTable: true,
    address: '',
    city: '',
    state: '',
    zip: '',
    price: '',
    sqf: '',
    rooms: '',
    uploading: false,
    image: '', 
    user: ""
  }

  componentDidMount() {
    this.loadTenant();

    const user = sessionStorage.getItem("user");
    console.log("tenant", user);
    if (user) {
      this.setState({
        user: JSON.parse(user)
      })
    }
  }

  loadTenant = () => {
    API.getTennat()
      .then(res => {
        this.setState({
          masterdata: res.data
        })
      }
      )
  }

  onClickShowForm = () => {
    this.setState({ showTable: false })
  }


  onClick = (e) => {
    const btnname = e.target.name;
    if (btnname === "tickets") {
      this.loadTicket()
    } else if (btnname === "units") {
      this.loadUnit()
    } else if (btnname === "tenant") {
      this.loadTenant()
    }

    this.setState({
      whichheader: btnname,
      showTable: true
    })
  }

  onInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  onFileChange = e => {
    const files = e.target.files
    this.setState({ uploading: true })

    if(files && files.length > 0){

      let formData = new FormData()
      
      formData.append("image", files[0])
      // console.log(files[0])
      console.log(formData.getAll("files"))
      
      API.saveImage(formData).then((response) => {
        console.log(response)
      }).then(image => {
        this.setState({ 
          uploading: false,
          // image: ""
        })
      })
    }
    }
    
    onSubmit = (e) => {
    const UnitData =
    {
      address: this.state.address,
      city: this.state.city,
      zip: this.state.zip,
      state: this.state.state,
      price: this.state.price,
      rooms: this.state.rooms,
      sqFeet: this.state.sqf,
      image: this.state.image
    }

    
    API.createUnit(UnitData)
      .then(res => { console.log(res) })
    this.setState({
      address: '',
      city: '',
      state: '',
      zip: '',
      price: '',
      sqf: '',
      rooms: '',
      // image: ''
    });
  }

  loadTicket = () => {
    API.getTicket()
      .then(res => {
        this.setState({
          masterdata: res.data
        })
      }
      )
  }

  renderTicketTable() {
    console.log(this.state.masterdata)
    return this.state.masterdata.map((alldata, key) => {
      return (<tr>
        <td className="td2">{alldata.name}</td>
        <td className="td2">{alldata.phone}</td>
        <td className="td2">{alldata.message}</td>
        <td className="td3"><DeleteBtn data-id={alldata.id} onClick={() => this.deleteTicket(alldata._id)} /></td>
      </tr>)
    })
  }

  deleteTicket = id => {
    API.deleteTicket(id)
      .then(res => this.loadTicket())
      .catch(err => console.log(err));
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

  renderUnitTable() {
    console.log(this.state.masterdata)
    return this.state.masterdata.map((alldata, key) => {
      return (<tr key={key}>
        <td className="td2">{alldata.address}</td>
        <td className="td2">{alldata.city}</td>
        <td className="td2">{alldata.zip}</td>
        <td className="td2">{alldata.state}</td>
        <td className="td2">{alldata.price}</td>
        <td className="td2">{alldata.rooms}</td>
        <td className="td2">{alldata.sqFeet}</td>
        <td className="td3"><DeleteBtn data-id={alldata.id} onClick={() => this.deleteUnit(alldata._id)} /></td>
      </tr>)
    })
  }
  deleteUnit = id => {


    API.deleteUnit(id)
      .then(res => this.loadUnit())
      .catch(err => console.log(err));
  }

  renderTenantsTable() {
    console.log(this.state.masterdata)
    return this.state.masterdata.map((alldata, key) => {
      return (<tr key={key}>
        <td className="td2">{alldata.firstname}</td>
        <td className="td2">{alldata.lastname}</td>
        <td className="td2">{alldata.address}</td>
        <td className="td2">{alldata.phone}</td>
        <td className="td2">{alldata.email}</td>
        <td className="td2">{alldata.price}</td>
        <td className="td3"><DeleteBtn data-id={alldata.id} onClick={() => this.deleteTennant(alldata._id)} /></td>
      </tr>)
    })
  }

  renderTable() {

    if (this.state.whichheader === "tenant") {
      return this.renderTenantsTable();
    } else if (this.state.whichheader === "tickets") {
      return this.renderTicketTable();
    } else if (this.state.whichheader === "units") {
      return this.renderUnitTable();
    }
  }
  deleteTennant = id => {


    API.deleteTenant(id)
      .then(res => this.loadTenant())
      .catch(err => console.log(err));

  }



  render() {
    return (

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="butdom">
              <button type="button" onClick={this.onClick} name="tenant" className="btn btn-primary btn-lg btn-block">Manage Tenants</button>
              <button type="button" onClick={this.onClick} name="units" className="btn btn-primary btn-lg btn-block">Manage Properties</button>
              <button type="button" onClick={this.onClick} name="tickets" className="btn btn-primary btn-lg btn-block">Manage Tickets</button>
              <button type="button" onClick={this.onClickShowForm} name="create" className="btn btn-primary btn-lg btn-block">Add Unit</button>
            </div>
          </div>


          <div className="col-md-9">
            {this.state.showTable ?
              <table className="table table-striped tbls">
                <thead>
                  <tr>
                    {this.headers[this.state.whichheader].map((columnname, key) =>
                      <th key={key}>{columnname}</th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {this.renderTable()}
                </tbody>
              </table>

              : <Form onFileChange={this.onFileChange} onChange={this.onInputChange} adminState={this.state} onSubmit={this.onSubmit} />
            }


          </div>
        </div>
      </div>

    );
  }
}

export default Admin;
