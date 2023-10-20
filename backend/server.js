const express = require('express');
const cors = require('cors');
const morgan = require ('morgan');
const helmet = require('helmet'); // adds a bunch of standard security to server 
require('dotenv').config(); //connect password
const PORT = 3000;
require('./config/db.js'); //connect to database
const Event = require('./models/Event.js');

const app = express();



// START MIDDLEWARE
app.use(express.json());
app.use(cors({
    origin: "*"
}));
app.use(morgan('dev'));
app.use(helmet());
// END MIDDLEWARE

// START ROUTE //

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


// END ROUTE // 


app.listen(PORT, ()=> {
    console.log(`Server LIVE on port ${PORT}`);
});
