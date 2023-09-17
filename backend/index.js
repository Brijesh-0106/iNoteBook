// Fuunction borrowed from db.js
const connectToMongo = require('./db');
// To use routes
const express = require('express');
const app = express();
// CORS->cross-origin resource sharing => Allow access for clients to use resource.
var cors = require('cors')
app.use(cors())


connectToMongo();

const port = 5000;

// express.json=Built-in middleware function to access body from request. 
app.use(express.json());
// app.use(PATH,callback) used to set middleware-function(callback) on specified path.
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
    console.log(`iNoteBook app is listening at http://localhost:${port}`);
})