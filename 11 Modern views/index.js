require('dotenv').config()
const express = require('express');


// defined folder import
const { connectMongoDb } = require('./connection')
const empRoutes = require('./routes/emp');

const app = express();


// Connection
connectMongoDb(process.env.DB_URL).then(()=>{
    console.log("MongoDb Connected!");
});

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 

// Routes
app.use("/api/users" , empRoutes);

app.listen(process.env.PORT, () => console.log("Server is running on port 3000"));
