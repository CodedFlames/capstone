import html from "html-literal";

export default store =>
  html`
    <section class="flexcontainer flexcol flexcenter">
      <h1 class="black bigger textcenter">${store.topper}</h1>
      <form
        class="flexcontainer flexcol flexcenter"
        action="https://formspree.io/f/xeqwaadj"
        method="post"
      >
        <label for="email" class="medium">Your email</label>
        <input
          class="space textcenter"
          type="email"
          placeholder="Johndoe@mail.com"
          id="email"
          name="email"
          size="30"
          required
        />
        <textarea
          class="medium textcenter"
          rows="10"
          cols="50"
          name="MAIL"
          id="MAIL"
          placeholder="Tell us all about your side!"
          required
        ></textarea>
        <input type="submit" class="medium" style="margin: 2%;" />
      </form>
    </section>
  `;
