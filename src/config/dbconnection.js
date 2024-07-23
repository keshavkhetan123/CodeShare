const mongoose = require('mongoose')

const connectDb = async () => {
    try{
        const connect = await mongoose.connect('mongodb+srv://iit2022193:2G151paGc4jMfB8F@cluster0.h057kbf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log("Database Connected: ", connect.connection.host, connect.connection.name)
    } catch(err) {
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDb;
