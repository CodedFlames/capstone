import html from "html-literal";

export default store => html`
  <h1 class="black bigger textcenter">${store.topper}</h1>
  <section class="medium flexcontainer flexcol flexcenter bigspace">
    <h2 class="textcenter small white">This is a capstone project...</h2>
    <p class="bigspace">
      On a 12 week course to become a full-stack dev, this site was made.
      Inspired by other copy and pasting sites with a dash of different elements
      that you may find on the web... This site wouldn't exist with the many
      hours put into it built from the ground up.
    </p>
    <img id="SAVLOGO" class="giantspace" src="" alt="savvy coders logo." />
    <p class="bigspace">
      Many thanks from the team behind savvy-coders for being so inspiring and
      helpful in the work of this project. Without them this wouldn't have been
      possible! The constant repetition really makes you understand code better.
    </p>
    <h6 class="micro textcenter">
      fun fact, this is a "spa", Single Page Application that loads in using JS!
    </h6>
  </section>
`;
