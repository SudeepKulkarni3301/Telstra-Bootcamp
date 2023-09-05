const express = require("express");
const kafka = require("kafka-node");

const app = express();
const port = 4000;

const Consumer = kafka.Consumer;
const client = new kafka.KafkaClient({ kafkaHost: `localhost:9092` });

const consumer = new Consumer(
  client,
  [{ topic: `test-topic2`, partition: 0 }],
  {
    autoCommit: false,
  }
);

consumer.on(`message`, (message) => {
  console.log(`recevied message ${message.value}`);
});

consumer.on(`error`, (err) => {
  console.log(`error encountered ${err}`);
});

app.listen(port, () => {
  console.log("Server started at 4000");
});
