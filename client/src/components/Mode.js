import React, { useState } from "react";
import { CiLight, CiDark } from "react-icons/ci";

function Mode() {
  const [mode, setMode] = useState(true);
  const setDarkMode = () => {
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("body").style.color = "white";
    setMode(false);
  };
  const setLightMode = () => {
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("body").style.color = "black";
    setMode(true);
  };
  return (
    <div style={{ display: "flex", flexDirection: "row", cursor: "pointer" }}>
      {mode ? (
        <div onClick={setDarkMode}>
          <CiDark style={{ fontSize: "22px", marginTop: "1px" }} />
        </div>
      ) : (
        <div onClick={setLightMode}>
          <CiLight style={{ fontSize: "22px", marginTop: "1px" }} />
        </div>
      )}
    </div>
  );
}

export default Mode;
