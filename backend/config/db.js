// connect mongoose library to Database

const mongoose = require('mongoose');

let connectionString = `mongodb+srv://josephachang02:${process.env.MONGO_PASS}@practice.usvhzod.mongodb.net/Company?retryWrites=true&w=majority`
console.log(connectionString);

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


// log when connected

mongoose.connection.once('open', ()=> {
    console.log('connected to MongoDB');
});