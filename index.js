const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const connectDB = require('./config/connectDB')
const routes = require('./routes/routes')

const app = express();

app.use(cors());

app.use(express.json()); 

connectDB();

app.use(routes);

const PORT = process.env.PORT || 3000 

app.listen(PORT, () => {
    // http://localhost:5173/
    console.log(`server is listening on http://localhost:${PORT}`)
})
