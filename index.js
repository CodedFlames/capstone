import * as store from "./store";
import { Head, Nav, Main } from "./components";
import Navigo from "navigo";
import { capitalize } from "lodash";
import dotenv from "dotenv";
import axios from "axios";

const router = new Navigo("/");

function beforeRender(state) {
  router.updatePageLinks();
  switch (state.view) {
    case "Home":
      console.log("Home");
      axios.get(process.env.NASAURLKEY).then(Res => {
        console.log("Tc's left;", Res.headers["x-ratelimit-remaining"]);
        store["Home"].photoTitle = Res.data.title;
        store["Home"].photoUrl = Res.data.hdurl;
        store["Home"].photoText = Res.data.explanation;
      }); //Testing function beforeRender to replace router hooks
      break;
    case "About":
      console.log("About");
  }
}

function render(state = store.Home) {
  beforeRender(state); //temporary fix?
  document.querySelector("#meta").innerHTML += `${Head(state)}`;
  document.querySelector("#root").innerHTML = `
  ${Nav(store.Links)}
  ${Main(state)}`;
  afterRender(state);
  router.updatePageLinks();
}

function afterRender(state) {
  // NAVBARS
  // console.log("In afterRender."); //debug
  let barr = document.querySelector("#navBars");
  let barrOpen = false;
  barr.addEventListener("click", () => {
    if (!barrOpen) {
      barrOpen = true;
      barr.innerHTML = "close";
      document.querySelector("#navLinks").classList.toggle("hideOnMobile");
    } else {
      barrOpen = false;
      barr.innerHTML = "menu";
      document.querySelector("#navLinks").classList.toggle("hideOnMobile");
    }
  });
  // View Switches (If statements)
  let inputs;
  if (state.view === "Create") {
    document.querySelector("#Creating").addEventListener("submit", event => {
      event.preventDefault();
      console.log("EVENT CLICKED");
      axios
        .get("https://lock-it.codedflames-apis.workers.dev/ping")
        .then(Res => {
          store.Makefile.KEY = Res.data["PING"]; //short term memory loss.
        });
      router.navigate("/Makefile");
    });
  }
}

// router.hooks({
//   before: (done, params) => {
//     const view =
//       params && params.hasOwnProperty("page")
//         ? capitalize(params.page)
//         : "Home";
//     switch (view) {
//       case "Home":
//         console.log("IN HOME SWITCH");
//       default:                             //code doesn't work
//         done();                            //Making calls constantly on different pages when told not to.
//     }
//   },
//   already: params => {
//     const view =
//       params && params.data && params.data.view
//         ? capitalize(params.data.view)
//         : "Home";

//     render(store[view]);
//   }
// });

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      render(store[view]);
    }
  })
  .resolve();
