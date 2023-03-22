import html from "html-literal";

export default store => html`
  <section class="flexcontainer flexcenter flexcol textcenter flexwrap">
    <h1 class="black bigger textcenter noSelect">${store.topper}</h1>
    <div class="flexrow flexcontainer flexcenter">
      <h4 id="makeKey" class="black medium key">${store.KEY}</h4>
      <button id="makeCopy" class="copyButton">Copy-Key</button>
    </div>
    <h3 class="bigspace">
      Your File will close after being viewed: ${store.closeAt} times.
    </h3>
    <form id="Creating" class="flexcontainer flexcenter flexcol">
      <textarea
        id="editField"
        class="dynamic-Qfull medium"
        placeholder="Write what you want here. Please note that if you want to link something just type it like 'Example.com'"
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
