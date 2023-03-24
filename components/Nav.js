import html from "html-literal";

export default links => html`
  <nav
    id="TitleCard"
    class="white flexcontainer flexcol flexcenter dynamic-mobile-full"
  >
    <div id="Title">
      <h1>Lock-It</h1>
    </div>
    <div id="navOptions" class="flexcontainer flexcol flexcenter">
      <span
        class="material-symbols-outlined hideOnDesktop giantspace"
        id="navBars"
      >
        menu
      </span>
      <div
        id="navLinks"
        class="hideOnMobile flexcontainer flexrow flexcenter gap"
      >
        ${links
          .map(
            item =>
              `<h2 class="hoverabove noSelect"id="${item.id}"><a href="/${item.id}"data-navigo>${item.id}</a></h2>`
          )
          .join("")}
      </div>
      <!-- <h2 id="Home"><a href="./index.html">Home</a></h2>
      <h2 id="About"><a href="./about.html">About</a></h2>
      <h2 id="Contact"><a href="./contact.html">Contact</a></h2>
      <h2 id="Create"><a href="./create.html">Create</a></h2> -->
    </div>
  </nav>
`;
