export function ProgressBar({ nextBtn, width, previousBtn, nextQ }) {
  return (
    <div className="progressBar">
      <div className="backButton">
        <span className="material-icons-outlined" onClick={previousBtn}>
          {" "}
          arrow_back{" "}
        </span>
      </div>
      <div className="rangeArea">
        <div className="tooltip">24% Complete!</div>
        <div className="rangeBody">
          <div
            className="progress"
            style={{
              width: `${width}`,
            }}
          ></div>
        </div>
      </div>
      {/* <Link to="/result"> */}
      <button className="button next" onClick={nextBtn}>
        <span>{nextQ}</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </button>
      {/* </Link> */}
    </div>
  );
}
