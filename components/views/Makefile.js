import html from "html-literal";

export default store => html`
  <section class="flexcontainer flexcenter flexcol textcenter">
    <h1 class="black bigger textcenter noSelect">${store.topper}</h1>
    <h3>Your File will close after being viewed: ${store.closeAt} times.</h3>
    <h4 class="medium black">${store.KEY}</h4>
    <form id="Creating" class="flexcontainer flexcenter flexcol">
      <textarea
        id="editField"
        class="dynamic-mobile-Qfull dynamic-Qfull medium"
        placeholder="Write what you want here."
        cols="100"
        rows="25"
      ></textarea>
      <input
        type="submit"
        class="button big hoverabove bigspace"
        value="Done"
      />
    </form>
  </section>
`;
