export function Options({
  children,
  id,
  className,
  onChange,
  checked,
  control,
}) {
  return (
    <>
      {control ? (
        <label className={`answer ${className}`} htmlFor={id}>
          <input
            type="checkbox"
            id={id}
            onChange={onChange}
            checked={checked}
          />
          {children}
        </label>
      ) : (
        <label className={`answer ${className}`} htmlFor={id}>
          <input
            type="checkbox"
            id={id}
            defaultChecked={checked}
            disabled
          />
          {children}
        </label>
      )}
    </>
  );
}
