export function Button({ children, ...props }) {
  return (
    <button className="button" {...props}>
      <span>{children}</span>
    </button>
  );
}
