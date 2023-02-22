import html from "html-literal";

export default store =>
  html`
    <h1 class="bigger black flexcontainer flexcenter textcenter">
      ${store.topper}
    </h1>
  `;
