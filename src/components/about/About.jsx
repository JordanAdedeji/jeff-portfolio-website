import "./about.css";
import Me from "../../img/jeff.jpg";
import Me2 from "../../img/jeffa.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg">
        <img
            src={Me2}
            alt=""
            className="b-img"
          />
        </div>
        <div className="a-card">
          <img
            src={Me}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-desc">
        A creative and extremely organised video editor. Self-taught in video editing using Adobe suite; including Premiere Pro, After Effects and Photoshop. Travelling the world and capturing stories through video. Let me create your best highlight reels.
        </p>
      </div>
    </div>
  );
};

export default About;
