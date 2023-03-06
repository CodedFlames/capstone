import html from "html-literal";

export default store => html`
  <section class="flexcontainer flexcenter flexcol textcenter">
    <h1 class="black bigger textcenter">${store.topper}</h1>
    <h4 class="medium black">${store.KEY}</h4>
    <form class="flexcontainer flexcenter flexcol">
      <textarea
        id="editField"
        class="dynamic-mobile-full dynamic-Qfull medium"
        cols="100"
        rows="25"
      ></textarea>
      <input
        type="button"
        class="button big hoverabove bigspace"
        value="Done"
      />
    </form>
  </section>
`;
