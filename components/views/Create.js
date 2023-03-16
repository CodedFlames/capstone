import html from "html-literal";

export default store => html`
  <h1 class="black bigger textcenter space">${store.topper}</h1>
  <div class="textcenter flexcontainer flexcenter flexcol">
    <h5 class="big">Create a Genkey using any word.</h5>
    <form id="Creating" class=" flexcontainer flexcenter flexcol">
      <label class="small-medium" for="numberOfOpens"
        >Close after how many times opened?</label
      >
      <select
        class="small-medium bigspace"
        id="numberOfOpens"
        value="numberOfOpens"
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <input
        class="big inputBar textcenter dynamic-mobile-full"
        type="text"
        placeholder="I am a text field."
        required
        id="userField"
      />
      <input
        class="button medium hoverabove space"
        type="submit"
        value="submit"
        id="submitFile"
      />
    </form>
  </div>
`;
