const express = require("express");
const bookController = require("./../Conroller/bookController");

const router = express.Router();

router
  .route("/")
  .get(bookController.getAllBooks)
  .post(bookController.createBook);

router
  .route("/:id")
  .get(bookController.getSingleBook)
  .patch(bookController.updateBook)
  .delete(bookController.deleteBook);

module.exports = router;
