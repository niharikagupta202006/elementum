import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <h1>
        The thinkers and
        <br />
        doers were changing
        <br />
        the <span>Status Quo</span> with
      </h1>

      <p>
        We are a team of strategists, designers, communicators,
        researchers. Together we believe progress only happens
        when you refuse to play things safe.
      </p>

      <div className="people">
  <img src="/src/assets/images/person1.jpg" alt="" />
  <img src="/src/assets/images/person2.jpg" alt="" />
  <img src="/src/assets/images/person3.jpg" alt="" />
  <img src="/src/assets/images/person4.jpg" alt="" />
  <img src="/src/assets/images/person5.jpg" alt="" />
  <img src="/src/assets/images/person6.jpg" alt="" />
</div>

    </section>
  );
}

export default Hero;