export function AnsOfQuestion({ title, children }) {
  return (
    <div className="question">
      <div className="qtitle">
        <span className="material-icons-outlined"> help_outline </span>
        {title}
      </div>
      <div className="answers">{children}</div>
    </div>
  );
}
