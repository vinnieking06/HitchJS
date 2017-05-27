import React from 'react';
import Ride from './Ride.jsx';
import {browserHistory } from 'react-router'
class AllDrivers extends React.Component {
    constructor(props) {
    super(props);
    this.state = {trips: []};
    this.bookRide = this.bookRide.bind(this);
  }

bookRide() {
  alert("You booked the ride!");
  browserHistory.push('home');
}
  componentDidMount() {
    $.get('http://localhost:3000/allDrivers').then(function(trips){
      this.setState({trips});
    }.bind(this))
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
        children: nextProps.children
    });
}
  render() {
    const drivers = [];
    this.state.trips.forEach(function(driver, index) {
      drivers.push(<Ride bookRide={this.bookRide} key={index} driver={driver}/>)
    }.bind(this))
    
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