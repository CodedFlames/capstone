import html from "html-literal";

export default store => html`
  <h1 class="black bigger textcenter space">${store.topper}</h1>
  <div class="textcenter flexcontainer flexcenter flexcol">
    <h5 class="big">Create a Genkey using any word.</h5>
    <form id="Creating" class="flexcontainer flexcenter flexcol">
      <label class="small-medium" for="numberOfOpens"
        >Close after how many times viewed?</label
      >
      <input
        class="bigspace medium black"
        type="number"
        placeholder="1"
        min="1"
        max="20"
        id="numberOfOpens"
        value="numberOfOpens"
        required
      />
      <input
        class="black big inputBar textcenter dynamic-mobile-full"
        type="text"
        placeholder="I am a text field."
        required
        id="userField"
      />
      <input
        class="button medium hoverabove bigspace"
        type="submit"
        value="submit"
        id="submitFile"
      />
    </form>
  </div>
`;
