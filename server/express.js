const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const scripts = require("./scripts/genkey");

dotenv.config();

mongoose.connect(process.env.MONGODB);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

const PORT = process.env.PORT || 4040;

// *****************
// Middleware below;;
// *****************

function logging(Req, Res, Next) {
  console.log(`${Req.method} ${Req.url} ${Date.now()}`);
  Next();
}

const cors = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

// *****************
// Middleware Deploys
// *****************
app.use(cors); //always use CORS first if defined.
app.use(express.json());
app.use(logging);

app.get("/status", (Req, Res) => {
  Res.send(`<h1 style="text-align: center;">Status Healthy</h1>`);
});

app.get("/genkey/:text", (Req, Res) => {
  const text = Req.params.text.toString();
  const scrm = scripts.genkey(text);
  Res.status(200).json({ genkey: scrm });
});

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
