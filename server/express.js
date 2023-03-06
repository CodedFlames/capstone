const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose.connect(process.env.MONGODB);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

const PORT = process.env.PORT || 4040;

function logging(Req, Res, Next) {
  console.log(`${Req.method} ${Req.url} ${Date.now()}`);
  Next();
}

app.use(express.json());
app.use(logging);

app.get("/status", (Req, Res) => {
  Res.send(`<h1 style="text-align: center;">Status Healthy</h1>`);
});

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
