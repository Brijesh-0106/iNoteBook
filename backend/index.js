// Fuunction borrowed from db.js
const connectToMongo = require('./db');
// To use routes
const express = require('express');
const app = express();
var cors = require('cors')

app.use(cors())

connectToMongo();
// port for backend
const port = 5000;

// TO USE REQ.BODY
app.use(express.json());
// Only parses request where Content/Type = 'application/json matches.
app.use('/api/auth', require('./routes/auth'));
//.use is used to mount(insert) function at specified path.
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
    console.log(`iNoteBook app is listening at http://localhost:${port}`);
})