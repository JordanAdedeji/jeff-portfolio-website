import "./intro.css";
import introVideo from "../../img/intro2.mp4";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className='title-name'>
          <h1 className="i-name">Jefferson Maranan</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item video-editor">Video Editor</div>
              <div className="i-title-item videgrapher">Videographer</div>
              <div className="i-title-item content-creator">Content Creator</div>
            </div>
          </div>
        </div>
      <video src={introVideo} muted loop autoplay="" className='introVideo'> </video>
      </div>
    </div>
  );
};

export default Intro;
