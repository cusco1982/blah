import React, { Component } from "react";
// import video from "../images/video.mp4";
// import image1 from '../images/1.jpg';
// import image2 from '../images/2.jpg';
// import image3 from '../images/3.jpg';
// import image4 from '../images/4.jpg';


// const API = {
//   getAppart: () => {
//     return ([{
//       image: image1,
//       title: "New Apartment"
//     }, {
//       image: image2,
//       title: "New Apartment"
//     }, {
//       image: image3,
//       title: "New Apartment"
//     }, {
//       image: image4,
//       title: "New Apartment"
//     }])
//   }
// }




class Main extends Component {
  // state = {
  //   apartments: [],

  // };

  // open = () => {
  //   let path = `/Contact`;
  //   this.props.history.push(path);
  // }
  // close = (event) => {
  //   if (event) event.preventDefault();
  //   this.setState({ showModal: false });
  // }
  componentDidMount() {
    // this.loadAppart();
  }
  // loadAppart = () => {
  //   // API.getAppart()
  //   // .then(res =>
  //   //   this.setState({ apartments: res.data })
  //   // )
  //   // .catch(err => console.log(err));
  //   const apartments = API.getAppart()
  //   this.setState({ apartments: apartments })
  // };


  render() {
    return (
      <div>
Main page component
        {/* <div className="container-fluid"> */}
          {/* <video autoPlay muted loop id="myVideo">
            <source src={video} type="video/mp4" />
          </video> */}
          {/* <div className="row animated fadeInDown delay-1s">
            <div className="col-md-12 search">
              <h1 className="htitle">Welcome to Advanced Property Management</h1>
            </div>
          </div> */}
        {/* </div> */}



      </div>



    );
  }
}
export default Main;