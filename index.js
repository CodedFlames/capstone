import * as store from "./store";
import * as scripts from "./scripts";
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
  afterRender();
  router.updatePageLinks();
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.hasOwnProperty("page")
        ? capitalize(params.page)
        : "Home";
    // Add a switch case statement to handle multiple routes
    switch (view) {
      case "/":
      case "Home":
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?q=st%20louis&appid=${process.env.WEATHER_API_KEY}`
          )
          .then(response => {
            const kelvinToFahrenheit = kelvinTemp =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);
            store.Home.weather = {};
            store.Home.weather.temp = kelvinToFahrenheit(
              response.data.main.temp
            );
            const msToMph = MS => Math.round(MS * 2.237);
            store.Home.weather.wind = msToMph(response.data.wind.speed);
          })
          .catch(err => console.log(err));
        done();
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
    switch (view) {
      case "About":
        console.log("YOU ARE ON THE ABOUT PAGE");
        break;
    }
    render(store[view]);
  }
});

function afterRender() {
  let openSubmit = document.querySelector("#submitCode");
  // NAVBARS
  console.log("In afterRender.");
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

  // openSubmit.addEventListener("openSubmit");
  // let createSubmit = document.querySelector("#submitFile");
  // createSubmit.addEventListener("click", () =>
  //   scripts.genkey(document.querySelector("#userField").value)
  // );
}

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      render(store[view]);
    }
  })
  .resolve();
