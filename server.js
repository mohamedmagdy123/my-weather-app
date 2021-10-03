// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");
// Start up an instance of app
const app = express();
/* Middleware*/
const bodyParser = require("body-parser");
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors);
// Initialize the main project folder
app.use(express.static("website"));
// Setup Server
const port = 5500;

app.get("/all", function (req, res) {
  res.send("welcome to the server");
  res.send(projectData);
});
const server = app.listen(port, () => {
  console.log(port);
});

// app.post("/", addData);

// function addData(req, res) {
//   newEntry = {
//     Temprature: req.body.temprature,
//     data: req.body.date,
//     feelings: req.body.feelings,
//   };
//   projectData.push(newEntry);
//   res.send(projectData);
// }
