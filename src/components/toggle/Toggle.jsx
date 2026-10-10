import "./toggle.css";
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Toggle = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    // Only an explicit choice is saved; until then the device setting applies.
    try {
      localStorage.setItem("theme", darkMode ? "light" : "dark");
    } catch (e) {}
    theme.dispatch({ type: "TOGGLE" });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div className="t">
      <img src={Sun} alt="" className="t-icon" />
      <img src={Moon} alt="" className="t-icon" />
      <div
        className="t-button"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        role="switch"
        aria-checked={darkMode}
        aria-label="Dark mode"
        tabIndex={0}
        style={{ left: darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
};

export default Toggle;
