const express = require("express");

const router = express.Router();


const users = [{ name: "Kyle" }, { name: "Sally" }, { name: "Yuyang" }];


router.get("/", (req, res) => {
  res.send("User List");
});


router.post("/", (req, res) => {
  console.log(req.body);
  res.send("Create User");
});


// route() GET,PUT,DELETE

router.route("/:id")
// :id is route parameter
// req.params stores URL values
.get((req, res) => {
  console.log(req.user);
  res.send(`Get User With ID ${req.params.id}`);
})


.put((req, res) => {
  res.send(`Update User With ID ${req.params.id}`);
})


.delete((req, res) => {
  res.send(`Delete User With ID ${req.params.id}`);
});

// router.param runs first
// before route handler
// Express extracts the id first
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});


module.exports = router;
