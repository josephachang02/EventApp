const express = require('express');
const cors = require('cors');
const morgan = require ('morgan');
const helmet = require('helmet'); // adds a bunch of standard security to server 
require('dotenv').config();
const PORT = 3000;


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



// END ROUTE // 


app.listen(PORT, ()=> {
    console.log(`Server LIVE on port ${PORT}`);
});
