const data = require("./Vault");
const dotenv = require("dotenv");

dotenv.config();

// next steps, potentially change to object that stores the text data.
let globalVar = process.env.GLOBAL_VAR;

function grabdata() {
  let data1 = data[Math.floor(Math.random() * data.length)];
  let data2 = data[Math.floor(Math.random() * data.length)];
  let data3 = data[Math.floor(Math.random() * data.length)];
  console.log(data1, data2, data3);
  return [data1, data2, data3];
}

function scramble(string) {
  let newstring = "";
  let obj = string.split("");
  while (obj.length > 0) {
    let pick = Math.floor(Math.random() * obj.length);
    newstring += obj[pick];
    obj.splice(pick, 1);
  }
  return newstring;
}

function SYPH(String) {
  return String.toString()
    .split("")
    .reverse()
    .join("");
}

function genkey(txt) {
  let genkey = "";
  let scramuser = scramble(txt);
  let encrypt = grabdata();
  genkey = scramble(encrypt[0] + encrypt[1] + scramuser + encrypt[2]);
  genkey = genkey.replace(/\s+/g, ""); //replace all spaces. (regex)
  genkey = scramble(genkey);
  // genkey += globalVar;
  // genkey = SYPH(genkey);
  return genkey;
}

exports.grabdata = grabdata;
exports.genkey = genkey;
exports.scramble = scramble;
