export function Summary({ score, Img }) {
  return (
    <div className="summary">
      <div className="point">
        {/* <!-- progress bar will be placed here --> */}
        <p className="score">
          Your score is <br />
          {score}
        </p>
      </div>

      <div className="badge">
        <img src={Img} alt="Success" />
      </div>
    </div>
  );
}
