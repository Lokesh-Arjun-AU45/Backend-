const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/books-routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books  gV5qoAuVfcJqK5pc

mongoose
  .connect(
    "mongodb+srv://admin:E2CwYjlL3LvEKwzL@cluster0.rsujyih.mongodb.net/bookStore?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))

  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));