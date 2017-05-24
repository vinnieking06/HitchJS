const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const Driver = require('./database')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));
app.post('/drivers', function(req,res){
    Driver.create({ name: req.body.name, destination: req.body.destination, origin: req.body.origin, date: req.body.date, seats: req.body.seats, price: req.body.price, email: req.body.email }).then(function(driver) {
      console.log(driver.get({
        plain: true
      })) 
    })
})
app.post('/trips', function(req,res){
    Driver.findAll({
        where: {
            destination: req.body.destination,
            origin: req.body.origin,
            date: req.body.date
        }
    }).then(function(driver){
        res.send(driver[0].dataValues);
    })
})
app.get('/allDrivers', function(req,res){
    Driver.findAll().then(function(driver){
        res.send(driver)
    })
}) 
app.post('/driverProfile', function(req,res){
 
    Driver.findAll({
        where: {
            email: req.body.email
        }
    }).then(function(driver){
        res.send(driver)
    })
    
})
app.post('/updateSeats', function(req, res){
    Driver.findOne({ where: { email: req.body.email } }).then(function(data){
        let seatNum = data.dataValues.seats - 1;
        data.updateAttributes({
            seats: seatNum
        })
    })
})

app.listen(3000, function(){
    console.log("new Hitch server is running on 3000")
})