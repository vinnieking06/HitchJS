import React from 'react';

const Ride = (props) => (
      <div className="driver-div">
        <h3>Email: {props.driver.email}</h3>
        <h3>Start: {props.driver.origin}</h3>
        <h3>End: {props.driver.destination}</h3>
        <h3>When: {props.driver.date}</h3>
        <h3>Seats: {props.driver.seats}</h3>
        <button onClick={props.bookRide}>Book Ride</button>
      </div>
);

export default Ride;