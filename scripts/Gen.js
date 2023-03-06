import { default as data } from "./Vault";
import * as store from "./../store";
import dotenv from "dotenv";

// next steps, potentially change to object that stores the text data.
let globalVar = process.env.GLOBAL_VAR;

export function grabdata() {
  let data1 = data[Math.floor(Math.random() * data.length)];
  let data2 = data[Math.floor(Math.random() * data.length)];
  let data3 = data[Math.floor(Math.random() * data.length)];
  return [data1, data2, data3];
}

export function scramble(string) {
  let newstring = "";
  let obj = string.split("");
  while (obj.length > 0) {
    let pick = Math.floor(Math.random() * obj.length);
    newstring += obj[pick];
    obj.splice(pick, 1);
  }
  return newstring;
}

export function SYPH(String) {
  return String.toString()
    .split("")
    .reverse()
    .join("");
}

export function genkey(txt) {
  globalCount();
  let genkey = "";
  let genkeyr;
  let scramuser = scramble(txt);
  let encrypt = grabdata();
  genkey = scramble(encrypt[0] + encrypt[1] + scramuser + encrypt[2]);
  genkey = genkey.replace(/\s+/g, ""); //replace all spaces. (regex )
  genkey = scramble(genkey);
  genkeyr = genkey;
  genkey += globalVar;
  let block = [SYPH(genkey)]; //push to some sort of storage #1 - issue.
  store.Storage.push(block);
  store.Makefile.KEY = genkeyr; //push to making file page.
  console.log("YOUR GENKEY;", genkeyr);
  return genkeyr;
}

export function globalCount() {
  store.Storage.forEach(item => console.log(item)); //debug.
  store.Home.totalFiles++;
  console.log("Global Count Up;", store.Home.totalFiles); //debug.
}

export function validate(String) {
  let vl = globalVar.length;
  let sl = String.length;
  let validQ;
  let StringB = String.split("")
    .reverse()
    .splice(0, sl - vl)
    .join("");
  let StringC = String.split("")
    .reverse()
    .splice(-vl, vl)
    .join("");
  StringC === globalVar ? (validQ = true) : (validQ = false);
  return validQ ? StringB : console.log("Illegal Storage implementation");
}
