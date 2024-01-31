import { Link } from "react-router-dom";

export function ProgressBar({}) {
  return (
    <div className="progressBar">
      <div className="backButton">
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className="rangeArea">
        <div className="tooltip">24% Complete!</div>
        <div className="rangeBody">
          <div
            className="progress"
            style={{
              width: "20%",
            }}
          ></div>
        </div>
      </div>
      <Link to="/result">
        <button className="button next">
          <span>Next Question</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </button>
      </Link>
    </div>
  );
}
