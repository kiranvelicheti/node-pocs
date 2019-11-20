var express = require("express");
var Producer = require("sqs-producer");
const { Consumer } = require("sqs-consumer");
var app = express();
app.use(express.json());

// create simple producer
var producer = Producer.create({
  queueUrl: "https://sqs.us-east-1.amazonaws.com/708660187868/first-queue",
  region: "us-east-1"
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

app.post("/message", (req, res, next) => {
  console.log("Message i ", req.body);
  producer.send(
    ["msg1", "msg2"],
    // [
    //   {
    //     id: "id1",
    //     body: req.body,
    //     groupId: "group1234",
    //     deduplicationId: "abcdef123456" // typically a hash of the message body
    //   }
    // ],
    function(err) {
      if (err) console.log(err);
    }
  );
});

const consumer = Consumer.create({
  queueUrl: "https://sqs.us-east-1.amazonaws.com/708660187868/first-queue",
  handleMessage: async message => {
    console.log("Received message n node js:", message);
  }
});

consumer.on("error", err => {
  console.error(err.message);
});

consumer.on("processing_error", err => {
  console.error(err.message);
});

consumer.start();
