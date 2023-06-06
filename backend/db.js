// USE 127(3).0.0.1 INSTEAD OF LOCAL-HOST TO CONNECT TO MONGODB.
const mongoURI = "mongodb://127.0.0.1:27017/inotebook?directConnection=true"
// MONGOOSE IS USED TO STORE INFO ACCORDING TO SCHEMA.
const mongoose = require('mongoose');

const connectToMongo = () => {
    mongoose.connect(mongoURI,)
    .then(() => console.log('Successfully connected to Mongo'))
    .catch((err) => { console.error(err); });
}

// FUNCTION WHICH WILL BE EXPORTED.
module.exports = connectToMongo;