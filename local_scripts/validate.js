import dotenv from "dotenv";

let globalVar = process.env.GLOBAL_VAR;

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
