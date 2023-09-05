const express = require("express");
const kafka = require("kafka-node");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
app.use(bodyParser.json());

const Producer = kafka.Producer;
const client = new kafka.KafkaClient({ kafkaHost: `localhost:9092` });
const producer = new Producer(client);

producer.on(`ready`, () => {
  console.log(`Producer is ready to produce the message`);
});

app.get("/sendmessage", (req, res) => {
  const { topic, message } = req.body;
  const producermessages = [
    {
      topic: "order",
      messages: message,
    },
  ];

  producer.send(producermessages, (err, data) => {
    if (err) {
      res.sendStatus(500).send(`Internal server error`);
    } else {
      res.json({ message: `Successfully sent message` });
    }
  });
});

app.listen(port, () => {
  console.log("Server started at 3000");
});
