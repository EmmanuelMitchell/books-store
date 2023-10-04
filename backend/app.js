const express = require("express");
const booksRouter = require("./Routes/booksRoute");

const app = express();

// MiddleWare
app.use("/api/v1/books", booksRouter);

module.exports= app