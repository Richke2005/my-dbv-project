const mongoose = require("mongoose");

const bookResponseSchema = require("./bookResponse.js");
const classSchema = require("./class.js");
const classbookSchema = require("./book.js");
const clubSchema = require("./club.js");
const userSchema = require("./user.js");
const postSchema = require("./post.js");
const unitSchema = require("./unit.js");


// Defining collections and models
mongoose.model("book_responses", bookResponseSchema);
mongoose.model("classes", classSchema);
mongoose.model("books", classbookSchema);
mongoose.model("clubs", clubSchema);
mongoose.model("users", userSchema);
mongoose.model("posts", postSchema);
mongoose.model("units", unitSchema);


module.exports = mongoose;