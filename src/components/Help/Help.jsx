import "./Help.css";
import helpImg from "../../assets/images/meeting.jpg";

function Help() {
  return (
    <section className="help">

      <div className="help-image">
        <img src={helpImg} alt="Help" />
      </div>

      <div className="help-content">
        <h2>
          See how we can
          <br />
          help you progress
        </h2>

        <p>
          We add a layer of fearless insights and action that
          allows change makers to accelerate their progress
          in areas such as brand, design, digital,
          comms and social research.
        </p>

        <a href="#">Read more →</a>
      </div>

    </section>
  );
}

export default Help;