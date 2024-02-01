export function Options({ children, id, className, onChange, checked }) {
  return (
    <label className={`answer ${className}`} htmlFor={id}>
      <input type="checkbox" id={id} onChange={onChange} checked={checked} />
      {children}
    </label>
  );
}
