const mongoose = require ("mongoose");
const {MONGO_URI}= process.env;

exports.connect = () => {
    //  connecting to database
    mongoose
    .connect(MONGO_URI,{
        userNewUrlParser: true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log("Successfully connected to database");
    })
    .catch((error)=>{
        console.log("Failed to connect to database");
        console.log(error);
        process.exit(1);
    });
};