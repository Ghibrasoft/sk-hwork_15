import React, { useEffect, useState } from "react";

export default function ToggleThemeButton({ setLightMode }) {
  const [warning, setWarning] = useState(false);

  function clickHandler() {
    if (window.innerWidth <= 576) {
      setWarning(true);
      setLightMode(true);
    } else {
      setLightMode((prev) => !prev);
    }
  }

  useEffect(() => {
    const unSubscribe = setTimeout(() => {
      setWarning(false);
    }, 3000);

    return () => {
      clearTimeout(unSubscribe);
    };
  }, [warning]);

  return (
    <div className="btn-div">
      <button onClick={clickHandler} className="toggle-btn">
        Toggle for theme
      </button>
      <span
        style={{
          visibility: `${warning ? "visible" : "hidden"}`,
          color: "#dc143c",
        }}
      >
        Dark theme not allowed for mobile
      </span>
    </div>
  );
}
