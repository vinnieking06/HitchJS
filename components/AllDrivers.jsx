import React from 'react';
class AllDrivers extends React.Component {
    constructor(props) {
    super(props);
    this.state = {trips: []};
    this.bookRide = this.bookRide.bind(this);
  }

bookRide() {
  console.log("hello")
}
  componentDidMount() {
    $.get('http://localhost:3000/allDrivers').then(function(trips){
      console.log("setting state: ", trips)
      this.setState({trips});
      console.log("after state set", this.state)
    }.bind(this))
  }
  render() {
    const drivers = [];
    this.state.trips.forEach(function(driver, index) {
      drivers.push(
      <div className="driver-div" key={index}>
        <h3>Email: {driver.email}</h3>
        <h3>Start: {driver.origin}</h3>
        <h3>End: {driver.destination}</h3>
        <h3>When: {driver.date}</h3>
        <h3>Seats: {driver.seats}</h3>
        <button>book trip</button>
      </div>
      )
    })
    
    return (
      <div className="allDriversMain">
      <h3>All Trips</h3>
      <p>Select a trip and enjoy the ride!</p>
        <div className="driver-parent-div">
          {drivers}
        </div>
      </div>
      
    );
  }
}
export default AllDrivers;