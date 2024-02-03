import { useRef, useState } from "react";
import ReactPlayer from "react-player";
import { useLocation, useParams } from "react-router-dom";
export default function MiniPlayer() {
  const { id } = useParams();
  const location = useLocation();
  const { state } = location || "";
  const floatBtnRef = useRef();
  const [status, setStatus] = useState(false);
  const link = `https://www.youtube.com/watch?v=${id}`;
  function floatBtn() {
    if (!status) {
      floatBtnRef.current.classList.remove("floatingBtn");
      setStatus(true);
    } else {
      floatBtnRef.current.classList.add("floatingBtn");

      setStatus(false);
    }
  }
  return (
    <div
      className="miniPlayer floatingBtn"
      ref={floatBtnRef}
      onClick={floatBtn}
    >
      <span className="material-icons-outlined open">play_circle_filled</span>
      <span className="material-icons-outlined close" onClick={floatBtn}>
        close
      </span>
      <div className={`player ${status ? "" : "open"}`}>
        <ReactPlayer url={link} controls playing={status} width="" height="" />
      </div>
      <p>{state}</p>
    </div>
  );
}
