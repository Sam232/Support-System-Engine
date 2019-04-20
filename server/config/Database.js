const Mongoose = require("mongoose");
const ErrorLog = require("./ErrorLog");

const database = () => {
  if (process.env.NODE_ENV === "production") {
    return Mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true
    }, (error) => {
      if (error) {
        return ErrorLog(error);
      }
      //remove after development
      console.log("Connected to MongoDB Database Server");
    });
  }
  
  Mongoose.connect("", {
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
