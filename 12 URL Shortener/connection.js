const { default: mongoose } = require("mongoose");

async function connectToMongoDB (link){
    return mongoose.connect(link);
}

module.exports = {
    connectToMongoDB,
} ;