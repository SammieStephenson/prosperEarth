const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
//S addition setting up connection to Database
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const router = express.Router();
const mysql = require('mysql');

//USE STATIC FILES
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/img", express.static(__dirname + "public/img"));
app.use("/js", express.static(__dirname + "public/js"));

// TEMPLATING ENGINE
app.set("views", "./src/views");
app.set("view engine", "ejs");

// ROUTES
const indexRouter = require("./src/routes/index");
app.use("/", indexRouter);

// GET VIEWS
app.get("/news", (req, res) => {
  res.render("news");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/faq", (req, res) => {
  res.render("faq");
});

// LISTEN ON PORT 3000
app.listen(port, () => console.log(`listening on port ${port}`));


//Sammies copy and Paste start 

// Storing contact input in contact table
const userDetails = req.body;

// Insert data into Contact table
var sql = 'INSERT INTO hope.contact SET ?';
db.query(sql, userDetails, function (err, data) {
  if (err) throw err;
  console.log("Contact data is inserted successfully ");
});

// redirect to user form page after inserting the data
res.redirect('/contact/form');

module.exports = router;

//Retrieve data from contact input/table and see in console log
app.get("/", (req, res) => {
  connection.query('SELECT * FROM hope.contact LIMIT 1', (err, rows) => {
    if (err) throw err;
    console.log('The data from users table are: \n', rows);
    connection.end();
  });
});