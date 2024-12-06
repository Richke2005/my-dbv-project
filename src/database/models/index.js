const mongoose = require("mongoose");

const bookResponseSchema = require("./bookResponse.js");
const classSchema = require("./class.js");
const classbookSchema = require("./classBook.js");
const clubSchema = require("./club.js");
const leadershipSchema = require("./leadership.js");
const pathfinderSchema = require("./pathfinder.js");
const postSchema = require("./post.js");
const unitSchema = require("./unit.js");


// Defining collections and models
mongoose.model("book_responses", bookResponseSchema);
mongoose.model("classes", classSchema);
mongoose.model("class_books", classbookSchema);
mongoose.model("clubs", clubSchema);
mongoose.model("leaderships", leadershipSchema);
mongoose.model("pathfinders", pathfinderSchema);
mongoose.model("posts", postSchema);
mongoose.model("units", unitSchema);


module.exports = mongoose;