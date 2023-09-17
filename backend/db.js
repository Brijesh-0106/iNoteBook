// Use 127(3).0.0.1 INSTEAD OF LOCAL-HOST TO  to mongodb.
const mongoURI = "mongodb://127.0.0.1:27017/inotebook?directConnection=true"
// inotebook is name of database.
const mongoose = require('mongoose');

const connectToMongo = async () => {
    mongoose.connect(mongoURI)
        .then(() => console.log('Successfully connected to Mongo'))
        .catch((err) => { console.error(err); });
}

module.exports = connectToMongo;        //Exporting function.