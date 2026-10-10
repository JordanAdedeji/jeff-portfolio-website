import "./product.css";
import { useRef } from "react";

// thumbnailTime (seconds) picks the frame shown before playback, for videos
// that open on black. The first play still starts from the beginning.
// Every video gets a #t= offset because Safari paints nothing for a video that
// has only loaded metadata; seeking to a tiny offset makes it decode a frame.
const Product = ({videoImport, thumbnailTime}) => {
  const started = useRef(false);

  const handlePlay = (e) => {
    if (started.current) return;
    started.current = true;
    if (thumbnailTime) e.target.currentTime = 0;
  };

  return (
    <div className="p">
      <video
        src={`${videoImport}#t=${thumbnailTime || 0.001}`}
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
