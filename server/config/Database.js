const Mongoose = require("mongoose");
const ErrorLog = require("./ErrorLog");

const database = () => {
  if (process.env.NODE_ENV === "production") {
    return Mongoose.connect("mongodb://heroku_qmq4xlzl:hellohello1@ds011429.mlab.com:11429/heroku_8vphkqjm", {
      useNewUrlParser: true
    }, (error) => {
      if (error) {
        return ErrorLog(error);
      }
      //remove after development
      console.log("Connected to MongoDB Database Server");
    });
  }
  
  Mongoose.connect("mongodb://heroku_qmq4xlzl:hellohello1@ds011429.mlab.com:11429/heroku_8vphkqjm", {
    useNewUrlParser: true
  }, (error) => {
    if (error) {
      return ErrorLog(error);
    }
    //remove after development
    console.log("Connected to MongoDB Database Server ");
  });
};

module.exports = database;
