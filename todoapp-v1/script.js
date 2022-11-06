/////////////////GLOBALS////////////////////

const express = require("express");
const bodyParser = require("body-parser");
let date = require(__dirname + "/date.js");
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
let day = date()
let items = []; 
let workItems = []; 
 
/////////////////HOMEPAGE////////////////////
app.get("/", function (req, res) {

  res.render("list", { listTitle: day, newListItems: items });
});

app.post("/", function (req, res) {
  let item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
}); 

/////////////////WORKLIST////////////////////

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

/////////////////ABOUT PAGE////////////////////

app.get("/about",function(req, res){
  res.render("about");
})

/////////////////SERVER PORT////////////////////

app.listen(3000, function () {
  console.log("Server has started");
});
