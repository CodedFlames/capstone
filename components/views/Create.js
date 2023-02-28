import html from "html-literal";

export default store => html`
  <h1 class="black bigger textcenter space">${store.topper}</h1>
  <div class="textcenter flexcontainer flexcenter flexcol">
    <h5 class="big">Create a Genkey using any word.</h5>
    <form>
      <input
        class="big inputBar textcenter dynamic-mobile-full"
        type="text"
        placeholder="I am a text field."
        id="userField"
      />
      <input
        class="button medium hoverabove space"
        type="button"
        value="submit"
        id="submitFile"
      />
    </form>
  </div>
`;
