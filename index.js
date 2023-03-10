import * as store from "./store";
import { Head, Nav, Main } from "./components";
import Navigo from "navigo";
import { capitalize } from "lodash";
import dotenv from "dotenv";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.Home) {
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
  switch (state.view) {
    case "Home":
      break;
  }
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.hasOwnProperty("page")
        ? capitalize(params.page)
        : "Home";
    // Add a switch case statement to handle multiple routes
    switch (view) {
      case "Home":
        //axios
        axios.get(process.env.NASAURLKEY).then(Res => {
          console.log("Tc's left;", Res.headers["x-ratelimit-remaining"]);
          store["Home"].photoTitle = Res.data.title;
          store["Home"].photoUrl = Res.data.hdurl;
          store["Home"].photoText = Res.data.explanation;
        });
        //axios
        done(); //tell navigo im done here.
        break;
      default:
        done();
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";
    render(store[view]);
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      render(store[view]);
    }
  })
  .resolve();
