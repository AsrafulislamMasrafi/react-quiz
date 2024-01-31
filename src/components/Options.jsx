export function Options({ children, id, className }) {
  return (
    <label className={ `answer ${className}`
    } htmlFor={id}>
      <input type="checkbox" id={id} />
      {children}
    </label>
  );
}
