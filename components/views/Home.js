import html from "html-literal";

export default store =>
  html`
    <div class="flexcontainer flexcenter flexcol">
      <h1 class="bigger black">
        ${store.topper}
      </h1>
      <form class="flexcontainer flexcol flexcenter">
        <input
          type="text"
          class="big inputBar textcenter"
          id="CODE"
          placeholder="Jmns91lmax"
        />
        <input
          type="button"
          class="button medium hoverabove bigspace"
          value="submit"
          id="submitCode"
        />
      </form>
      <h6>${store.totalFiles} Genkeys made...</h6>
    </div>
  `;
