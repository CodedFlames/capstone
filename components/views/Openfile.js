import html from "html-literal";

export default store => html`
  <section
    class="flexcontainer flexcenter flexcol textcenter dynamic-mobile-full"
  >
    ${store.data
      .map(item => {
        return html`
          <div class="outline">
            <h1 class="black bigger">Genkey</h1>
            <h2 class="big key" id="GENKEY">${item.genkey}</h2>
            <h3 class="medium">Opened ${item.opens + 1} times so far.</h3>
            <span
              style="font-size: 40px;"
              class="black material-symbols-outlined"
            >
              emergency_heat
            </span>
            <h3 class="medium">Closes at ${item.closeAt}</h3>
            <h3 id="viewingfile">${item.message}</h3>
          </div>
        `;
      })
      .join("")}
  </section>
`;
