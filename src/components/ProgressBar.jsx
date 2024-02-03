import { useRef, useState } from "react";

export function ProgressBar({ nextBtn, width, previousBtn, nextQ }) {
  const [toolTip, setToolTip] = useState(false);
  const toolTipRef = useRef();

  function toggleToolTip() {
    if (toolTip) {
      setToolTip(false);
      toolTipRef.current.style.display = "none";
    } else {
      setToolTip(true);
      toolTipRef.current.style.left = ` calc(${width} - 65px)`;
      toolTipRef.current.style.display = "block";
    }
  }
  return (
    <div className="progressBar">
      <div className="backButton">
        <span className="material-icons-outlined" onClick={previousBtn}>
          arrow_back
        </span>
      </div>
      <div className="rangeArea">
        <div className="tooltip" ref={toolTipRef}>
          {width} Complete!
        </div>
        <div className="rangeBody">
          <div
            className="progress"
            style={{
              width: `${width}`,
            }}
            onMouseOver={toggleToolTip}
            onMouseOut={toggleToolTip}
          ></div>
        </div>
      </div>
      <button className="button next" onClick={nextBtn}>
        <span>{nextQ}</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </button>
    </div>
  );
}
