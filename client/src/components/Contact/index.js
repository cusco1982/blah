import React from "react";


function Contact(props) {
  return (



<div className="myform">
  <div className="row">

    <div className="col-md">
      <label className="lable">Name:</label>
      <input className="form-control input" type="text" name="name" id="fname" placeholder=" First name.." required onChange={props.onChange} />
    </div>
    
    <div className="col-md">
      <label className="lable">Last Name:</label>
      <input className="form-control input" type="text" name="name" id="lname" placeholder=" Last Name.." required onChange={props.onChange} />
    </div>
  
  </div><br/>
          
  <div className="row">
    <div className="col-md">
      <label className="lable1">Email:</label>
      <input className="form-control input" type="email" id="email" name="email" placeholder=" Your@email.." required onChange={props.onChange}/>
    </div>
                  
    <div className="col-md">
      <label className="lable1">Telephone:</label>
      <input className="form-control input" type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder="XXX-XXX-XXXX" required onChange={props.onChange}/>
    </div>
  </div><br/>

    <label class="lable1">Message:</label>
    <textarea class="form-control text" name="message" id="message" rows="3" cols="128" placeholder=" Tell me what you need"

        required></textarea><br/><br/>


    <button id="sendmail" class="btn btn-primary btn-lg btn-block" onClick={props.onSubmit}>Submit</button>

  </div>
  

  )
}


export default Contact;
