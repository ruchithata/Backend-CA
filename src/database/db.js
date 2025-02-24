const { connect } = require('mongoose');

const connectDB = async(uri)=>{
    try{
        await connect(uri)
        console.log("connected to database");
    }
    catch (err){
        console.log("Cannot connect to db",err);
    }
}

module.exports = connectDB;
