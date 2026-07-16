import "./Hero.css";
import person1 from "../../assets/images/person1.jpg";
import person2 from "../../assets/images/person2.jpg";
import person3 from "../../assets/images/person3.jpg";
import person4 from "../../assets/images/person4.jpg";
import person5 from "../../assets/images/person5.jpg";
import person6 from "../../assets/images/person6.jpg";

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
  <img src={person1} alt="Person 1" />
  <img src={person2} alt="Person 2" />
  <img src={person3} alt="Person 3" />
  <img src={person4} alt="Person 4" />
  <img src={person5} alt="Person 5" />
  <img src={person6} alt="Person 6" />
</div>

    </section>
  );
}

export default Hero;