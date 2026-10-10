import "./product.css";
import { useEffect, useRef } from "react";

// thumbnailTime (seconds) picks the frame shown before playback, for videos
// that open on black. The first play still starts from the beginning.
// Every video gets a #t= offset because Safari paints nothing for a video that
// has only loaded metadata; seeking to a tiny offset makes it decode a frame.
//
// width/height give the video's aspect ratio so its slot is the right size
// before the file loads. load=false drops the file so the browser can free it;
// the carousel only loads the visible slide and its neighbours.
const Product = ({videoImport, thumbnailTime, width = 16, height = 9, load = true}) => {
  const videoRef = useRef();
  const started = useRef(false);

  // Removing the src attribute alone leaves the browser holding the old file,
  // so load() is needed to actually release it.
  useEffect(() => {
    if (load) return;
    const video = videoRef.current;
    video.pause();
    video.removeAttribute("src");
    video.load();
    started.current = false;
  }, [load]);

  const handlePlay = (e) => {
    if (started.current) return;
    started.current = true;
    if (thumbnailTime) e.target.currentTime = 0;
  };

  return (
    <div className="p">
      <video
        ref={videoRef}
        src={load ? `${videoImport}#t=${thumbnailTime || 0.001}` : undefined}
        onPlay={handlePlay}
        loop
        controls
        playsInline
        preload="metadata"
        className='p-img'
        style={{ "--r": width / height }}
      > </video>
    </div>
  );
};

export default Product;
