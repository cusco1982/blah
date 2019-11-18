import React from "react";


function Card(props) {
  return (
    <div className="col-sm-3">
      <div className="card cards animated fadeInUp delay-1s">
      <img src={props.image} className="card-img-top" alt="New Property" />
        <div className="card-body">
          <h3 className="card-text">{props.address}</h3>
          <h3 className="card-text">{props.city}</h3><br/>
          <div className="d-flex justify-content-center">
          <h4 className="card-text">{props.price} {props.other}</h4>
          </div>
          
        </div>
        <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => props.open(props.id)}>Request Info</button>
      </div>
     </div>
  );
}

export default Card;