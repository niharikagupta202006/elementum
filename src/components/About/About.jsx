import "./About.css";
import meeting from "../../assets/images/meeting.jpg";

function About() {
  return (
    <section className="about">

      <div className="about-text">
        <h2>
          Tomorrow should
          <br />
          be better than <span>today</span>
        </h2>

        <p>
          We are a team of strategists, designers,
          communicators and researchers.
          Together, we believe that progress only
          happens when you refuse to play things safe.
        </p>

        <a href="#">Read more →</a>
      </div>

      <div className="about-image">
        <img src={meeting} alt="Meeting" />
      </div>

    </section>
  );
}

export default About;