import html from "html-literal";

export default store =>
  html`
    <div class="flexcontainer flexcenter flexcol space">
      <h3 class="textcenter"></h3>
      <h1 class="big black space">
        ${store.topper}
      </h1>
      <form id="openAFile" class="flexcontainer flexcol flexcenter">
        <input
          type="text"
          class="big inputBar textcenter dynamic-mobile-full space"
          id="CODE"
          placeholder="itoetouotKltsleJtrFix"
        />
        <input
          type="submit"
          class="button medium hoverabove bigspace bigspace"
          value="submit"
          id="submitCode"
        />
      </form>
      <h6 class="small">Currently: ${store.currentKeys} genkeys in use</h6>
      <h4 class="textcenter medium bigspace">Fun nasa fact below!</h4>
      <h1>${store.photoTitle}</h1>
      <img
        class="dynamic-mobile-full"
        width="500"
        src="${store.photoUrl}"
        alt="${store.photoTitle}"
      />
      <p class="textcenter">${store.photoText}</p>
    </div>
  `;
