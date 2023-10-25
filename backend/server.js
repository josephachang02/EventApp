const express = require('express');
const cors = require('cors');
const morgan = require ('morgan');
const helmet = require('helmet'); // adds a bunch of standard security to server 
require('dotenv').config(); //connect password
const path = require("path");
const PORT = 3000;
require('./config/db.js'); //connect to database
const Event = require('./models/Event.js');
const { log } = require('console');

const app = express();


app.use(express.static(path.join(__dirname, "dist")));
// START MIDDLEWARE
app.use(express.json());
app.use(cors({
    origin: "*"
}));
app.use(morgan('dev'));
app.use(helmet());
// END MIDDLEWARE

// START ROUTE //

// get the events 

app.get("/events", async (req,res) => {
    let arrayOfEvents = await Event.find();
    res.send(arrayOfEvents);
})


// 
app.post("/events", async (req, res) => {
  //1. get the data that was sent in the front end 
//   let { eventData } = req.body;
  //or 
  //let { eventData } = req.body
  try {
    let response = await Event.create(req.body);
    res.status(201).send("create a new event!")
  } catch (err) {
    res.send("ERROR")
  }  
  
  //2. model.create(eventData)
});

app.delete("/events/:idOfEvent", async (req,res) => {
    // findByIdAndDelete()
    let id = req.params.idOfEvent;
    let response = await Event.findByIdAndDelete(id);
    console.log(response);
    res.send('selected event has been removed')
});

app.put('/events/:idOfEvent/', async (req,res) => {
    let id = req.params.idOfEvent;
    let updatedData = req.body;
    console.log(updatedData);
    let response = await Event.findByIdAndUpdate(id, req.body, { new:true } );
    res.send(response);
    
});
// END ROUTE // 


app.listen(PORT, ()=> {
    console.log(`Server LIVE on port ${PORT}`);
});
