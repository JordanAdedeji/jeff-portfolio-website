import "./product.css";
import { useRef } from "react";

// thumbnailTime (seconds) picks the frame shown before playback, for videos
// that open on black. The first play still starts from the beginning.
const Product = ({videoImport, thumbnailTime}) => {
  const started = useRef(false);

  const handlePlay = (e) => {
    if (started.current) return;
    started.current = true;
    if (thumbnailTime) e.target.currentTime = 0;
  };

  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <video
        src={thumbnailTime ? `${videoImport}#t=${thumbnailTime}` : videoImport}
        onPlay={handlePlay}
        loop
        controls
        playsInline
        preload="metadata"
        className='p-img'
      > </video>
    </div>
  );
};

export default Product;
