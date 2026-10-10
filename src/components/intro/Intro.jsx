import "./intro.css";
import introVideo from "../../img/intro3.mp4";
import poster from "../../img/poster.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <video src={introVideo} poster={poster} autoPlay muted loop playsInline className='introVideo'> </video>
        <div className='title-name'>
          <h1 className="i-name">Jefferson Maranan</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Video Editor</div>
              <div className="i-title-item">Videographer</div>
              <div className="i-title-item">Content Creator</div>
            </div>
          </div>
          <div className="i-cta">
            <a className="btn btn-primary" href="#work">View my work</a>
            <a className="btn btn-ghost" href="#contact">Get in touch</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
