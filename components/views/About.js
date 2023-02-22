import html from "html-literal";

export default store => html`
  <h1 class="black bigger textcenter">${store.topper}</h1>
  <section class="medium flexcontainer flexcol flexcenter bigspace">
    <h2 style="align-self: flex-start;">This is a capstone project...</h2>
    <aside class="flexcontainer flexrow">
      <p class="bigspace">
        On a 12 week course to become a full-stack dev, this site was made.
        Inspired by other copy and pasting sites with a dash of different
        elements that you may find on the web... This site wouldn't exist with
        the many hours put into it built from the ground up.
      </p>
      <img src="assets/img/SavvyLogoNOBK.png" alt="savvy coders logo." />
    </aside>
    <p class="bigspace">
      Many thanks from the team behind savvy-coders for being so inspiring and
      helpful in the work of this project. Without them this wouldn't have been
      possible! The constant repetition really makes you understand code better.
    </p>
  </section>
`;
