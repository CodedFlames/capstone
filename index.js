/* eslint-disable no-inner-declarations */
import * as store from "./store";
import { Head, Nav, Main } from "./components";
import Navigo from "navigo";
import { capitalize } from "lodash";
import dotenv from "dotenv";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#meta").innerHTML = `${Head(state)}`;
  document.querySelector("#root").innerHTML = `
  ${Nav(store.Links)}
  ${Main(state)}`;
  afterRender(state);
  router.updatePageLinks();
}

function afterRender(state) {
  //these call everytime afterRender.
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
      const inputs = event.target.elements;
      store.Makefile.closeAt = inputs.numberOfOpens.value;
      axios
        .get(`${process.env.CLOUDFLARE}/genkey/${inputs.userField.value}`)
        .then(response => {
          // console.log(`cloudflare api; ${response.data}`);
          store.Makefile.KEY = response.data["result"];
          return true;
        })
        .then(function done(boo) {
          boo
            ? router.navigate("/Makefile")
            : console.log("Not able to navigate.");
        });
    });
  } else if (state.view === "Makefile") {
    document.querySelector("#makeCopy").addEventListener("click", event => {
      const copy_this = document.querySelector("#makeKey");
      navigator.clipboard.writeText(copy_this.innerText);
    });
    document.querySelector("#Creating").addEventListener("submit", event => {
      event.preventDefault();
      inputs = event.target.elements;
      if (confirm("are you sure? you can no longer edit it once posted.")) {
        const test = {
          item: String(inputs.editField.value)
        };
        axios
          .post(`${process.env.CLOUDFLARE}/LKODE`, test)
          .then(res => {
            const postingblock = {
              opens: 0,
              closeAt: Number(store.Makefile.closeAt),
              genkey: String(store.Makefile.KEY),
              message: String(res.data.result)
            };
            return axios.post(`${process.env.ON_RENDER}/storing`, postingblock);
          })
          .then(res => {
            store.Openfile.data = [];
            store.Openfile.data.push(res.data);
            return true;
          })
          .then(function done(boo) {
            boo
              ? router.navigate("/Openfile")
              : console.log("router can't navigate.");
          });
      } else {
        alert("continue editing.");
      }
    });
  } else if (state.view === "Home") {
    document.querySelector("#openAFile").addEventListener("submit", event => {
      event.preventDefault();
      inputs = event.target.elements;
      axios
        .get(`${process.env.ON_RENDER}/storing/${inputs.CODE.value}`)
        .then(res => {
          store.Openfile.data = [];
          store.Openfile.data.push(res.data[0]);
          return true;
        })
        .then(function done(boo) {
          boo
            ? router.navigate("/Openfile")
            : console.log("router can't navigate");
        })
        .catch(e => {
          console.log("ERROR, line 119", e);
          router.navigate("/Deleted");
        });
      return true;
    });
  } else if (state.view === "Openfile") {
  }
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";
    switch (view) {
      case "Home":
        axios
          .get(`${process.env.CLOUDFLARE}/howmany`)
          .then(res => {
            store["Home"].currentKeys = res.data.result;
            return axios.get(process.env.NASAURLKEY);
          })
          .then(Res => {
            console.log("IN AXIOS CALL, API CALL IS HAPPENING.");
            console.log("Tc's left;", Res.headers["x-ratelimit-remaining"]);
            store["Home"].photoTitle = Res.data.title;
            store["Home"].photoUrl = Res.data.hdurl;
            store["Home"].photoText = Res.data.explanation;
            done();
          });
        break; //runs until break
      case "About":
        axios.get(`${process.env.CLOUDFLARE}/random`).then(Res => {
          store["About"].cloudflare = Res.data;
          done();
        });
        break;
      default:
        done();
        break;
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
