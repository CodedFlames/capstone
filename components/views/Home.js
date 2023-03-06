import html from "html-literal";

export default store =>
  html`
    <div class="flexcontainer flexcenter flexcol space">
      <h3 class="textcenter">
        It is currently ${store.weather.temp} F outside with a wind speed of
        ${store.weather.wind} MPH
      </h3>
      <h1 class="big black space">
        ${store.topper}
      </h1>
      <form class="flexcontainer flexcol flexcenter">
        <input
          type="text"
          class="big inputBar textcenter dynamic-mobile-full space"
          id="CODE"
          placeholder="itoetouotKltsleJtrFix"
        />
        <input
          type="button"
          class="button medium hoverabove bigspace bigspace"
          value="submit"
          id="submitCode"
        />
      </form>
      <h6 class="small">${store.totalFiles} Genkeys made...</h6>
    </div>
  `;
