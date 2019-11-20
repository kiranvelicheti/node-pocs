var express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const customerRouter = require("./customerrouter");
const db = require("./db");

db.on("error", console.error.bind(console, "MongoDB connection error:"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use("/api", customerRouter);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
