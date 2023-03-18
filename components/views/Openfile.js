import html from "html-literal";

export default store => html`
  <section
    class="flexcontainer flexcenter flexcol textcenter dynamic-mobile-full"
  >
    ${store.data
      .map(item => {
        return `<div class="outline"><h1 class="bigger">Genkey<h1><h2 class="big" id="GENKEY">${
          item.genkey
        }</h2><h3 class="medium">Open's : ${item.opens +
          1}<p class="medium" id="viewingfile">${item.message}</p></div>`;
      })
      .join("")}
  </section>
`;
