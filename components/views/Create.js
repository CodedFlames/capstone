import html from "html-literal";

export default store => html`
  <h1 class="black bigger textcenter">${store.topper}</h1>
  <div class="textcenter space flexcontainer flexcenter flexcol">
    <h5 class="big">Create a Genkey using any word.</h5>
    <form>
      <input
        class="big inputBar textcenter"
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
