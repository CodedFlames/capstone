import html from "html-literal";

export default () => html`
  <section id="ContactPage">
    <h1 class="black bigger">Contact Us.</h1>
    <form action="https://formspree.io/f/xeqwaadj" method="post">
      <label for="email" class="medium">Your email</label>
      <input
        type="email"
        placeholder="Johndoe@mail.com"
        id="email"
        name="email"
        size="30"
        required
      />
      <textarea
        class="medium"
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
