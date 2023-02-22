import * as store from "./store";
import { Head, Nav, Main } from "./components";
import Navigo from "navigo";
import { capitalize } from "lodash";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#meta").innerHTML += `${Head(state)}`;
  document.querySelector("#root").innerHTML = `
  ${Nav(store.Links)}
  ${Main(state)}`;
  router.updatePageLinks();
  afterRender();
}

function afterRender() {
  console.log("In afterRender.");
  let barr = document.querySelector("#navBars");
  let barrOpen = false;
  barr.addEventListener("click", () => {
    if (!barrOpen) {
      barrOpen = true;
      barr.innerHTML = "close";
      console.log("OOPEN");
    } else {
      barrOpen = false;
      barr.innerHTML = "menu";
    }
  });
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
