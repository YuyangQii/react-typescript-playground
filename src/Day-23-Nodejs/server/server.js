
const express = require("express");

const app = express();


// middleware
// middleware: runs between the request being sent to your server 
// and the actual response being reutrned to the use
app.use(logger);

app.use(express.json());

const userRouter = require("./routes/users");

// all /users routes go to users.js
app.use("/users", userRouter);


app.get("/", (req, res) => {
  res.send("Hello");
});


// LOGGER MIDDLEWARE
// req.originalUrl stores current URL
function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}


app.listen(3000, () => {
  console.log("Server running on port 3000");
});