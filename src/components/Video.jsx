export function Video({ id, title, noq }) {
  return (
    <div className="video">
      <img
        src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
        alt={title}
      />
      <p>{title}</p>
      <div className="qmeta">
        <p>{noq} Questions</p>
        <p>Total Point : {noq * 5}</p>
      </div>
    </div>
  );
}