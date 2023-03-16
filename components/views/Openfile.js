import html from "html-literal";

export default store => html`
  <section class="flexcontainer flexcenter flexcol textcenter">
    ${store.data
      .map(item => {
        return `<div class="outline"><h1 class="bigger">Genkey<h1><h2 class="big">${item.genkey}</h2><h3 class="medium">Open's : ${item.opens}<p class="medium" id="viewingfile">${item.message}</p></div>`;
      })
      .join("")}
  </section>
`;
