const mongoose = require('mongoose');
const { connect } = require('./routes/emp');

// Connection to DB

async function connectMongoDb(url){
    return mongoose.connect(url);
}

module.exports = {
    connectMongoDb,
};