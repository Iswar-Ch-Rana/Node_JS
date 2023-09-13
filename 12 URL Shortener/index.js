require('dotenv').config();
const express = require('express');
const urlRoute = require('./routes/url');
const { connectToMongoDB } = require('./connection');
const URL = require('./models/url');


const app = express();
connectToMongoDB(process.env.DB_URL).then(() => {
    console.log("Connected to Mongodb!");
});

// For EJS We need to use view engine
app.set('view engine', 'ejs');
app.use(express.static("views"));


app.get('/', async (req, res) => {
    const allURL = await URL.find({});
    res.render('home', {
        urls: allURL,
    });
})


// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/url', urlRoute);


app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});


