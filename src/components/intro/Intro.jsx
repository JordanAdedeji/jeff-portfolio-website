import "./intro.css";
import { useState } from "react";
import introVideo from "../../img/intro3.mp4";
import introVideoSmall from "../../img/intro3-small.mp4";
import poster from "../../img/poster.jpg";

// Phones get a lighter file: it starts sooner and keeps playing on weaker connections.
const isSmallScreen = () => window.matchMedia("(max-width: 768px)").matches;

const Intro = () => {
  const [videoSrc] = useState(() => (isSmallScreen() ? introVideoSmall : introVideo));

  return (
    <div className="i">
      <div className="i-left">
        <video src={videoSrc} poster={poster} autoPlay muted loop playsInline className='introVideo'> </video>
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
