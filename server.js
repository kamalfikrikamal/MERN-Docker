//Importing and creating an instance of express
import express from "express";
import mongoose from "mongoose";
const app = express();

//Setting PORT to 5000 if PORT is not listed in environmental variables.
const PORT = process.env.PORT || 5000;
// Gets the Username and Password 
const MONGO_URI = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@mongo:27017`;

// Creating the connect function
const connectDB = async () => {
  mongoose.set('strictQuery', false);
  await mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Mongo connected successfully"))// Logs out successful when MongoDB connects.
    .catch((e) => {
      console.log(e.message);// Logs out the error message if it encounters any.
    });
};

// Calling the Connect Function
connectDB();

// Creating the `GET` route
app.get("/", (req, res) => {
  res.send("<h5>Welcome Friends</h5>");
});

//Starting the express server
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);