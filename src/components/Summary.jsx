import { useMemo } from "react";
import { useFetch } from "../hooks/useFetch";

export function Summary({ score, Img, noq }) {
  const getKeyWord = useMemo(() => {
    if ((score / (noq * 5)) * 100 < 50) {
      return "failed";
    } else if ((score / (noq * 5)) * 100 < 75) {
      return "good";
    } else if ((score / (noq * 5)) * 100 < 100) {
      return "vary good";
    } else {
      return "excellent";
    }
  }, [score, noq]);

  const url = `https://api.pexels.com/v1/search?query=${getKeyWord}`;
  const { loading, error, result } = useFetch(url, "GET", {
    Authorization: import.meta.env.VITE_APP_APIKEYIMG,
  });
  const image = result ? result?.photos[0].src.medium : Img;
  return (
    <div className="summary">
      <div className="point">
        {/* <!-- progress bar will be placed here --> */}
        <p className="score">
          Your score is <br />
          {score} out of {noq * 5}
        </p>
      </div>
      {loading && <div className="badge">Loading...</div>}
      {error && <div className="badge">There was a problem</div>}

      {!loading && !error && (
        <div className="badge">
          <img src={image} alt="Success" />
        </div>
      )}
    </div>
  );
}
