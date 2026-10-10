import "./carousel.css";
import { cloneElement, useCallback, useEffect, useRef, useState } from "react";

const Carousel = ({ children }) => {
  const trackRef = useRef();
  const frameRef = useRef();
  const [active, setActive] = useState(0);
  const slides = Array.isArray(children) ? children : [children];

  const goTo = useCallback((index) => {
    const track = trackRef.current;
    const clamped = Math.max(0, Math.min(index, slides.length - 1));
    track.scrollTo({ left: clamped * track.clientWidth, behavior: "smooth" });
  }, [slides.length]);

  const handleScroll = () => {
    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      const track = trackRef.current;
      setActive(Math.round(track.scrollLeft / track.clientWidth));
    });
  };

  const handleKeyDown = (e) => {
    if (e.target.tagName === "VIDEO") return;
    if (e.key === "ArrowLeft") goTo(active - 1);
    if (e.key === "ArrowRight") goTo(active + 1);
  };

  // Only the visible slide should keep playing.
  useEffect(() => {
    trackRef.current.querySelectorAll("video").forEach((video, i) => {
      if (i !== active) video.pause();
    });
  }, [active]);

  useEffect(() => () => cancelAnimationFrame(frameRef.current), []);

  return (
    <div className="carousel" role="region" aria-roledescription="carousel" aria-label="Video portfolio">
      <button
        className="carousel-arrow carousel-prev"
        onClick={() => goTo(active - 1)}
        disabled={active === 0}
        aria-label="Previous video"
      >
        ‹
      </button>
      <div
        className="carousel-track"
        ref={trackRef}
        onScroll={handleScroll}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        {slides.map((slide, i) => (
          <div
            className="carousel-slide"
            key={i}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${slides.length}`}
          >
            {cloneElement(slide, { load: Math.abs(i - active) <= 1 })}
          </div>
        ))}
      </div>
      <button
        className="carousel-arrow carousel-next"
        onClick={() => goTo(active + 1)}
        disabled={active === slides.length - 1}
        aria-label="Next video"
      >
        ›
      </button>
      <div className="carousel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot${i === active ? " active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to video ${i + 1}`}
            aria-current={i === active}
          />
        ))}
      </div>
      <div className="carousel-counter" aria-hidden="true">
        {active + 1} / {slides.length}
      </div>
    </div>
  );
};

export default Carousel;
