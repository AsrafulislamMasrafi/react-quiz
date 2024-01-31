export function Input({ icon, type, placeholder, onChange, ...props }) {
  return (
    <div className="textInput">
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        required
        {...props}
      />
      <span className="material-icons-outlined"> {icon} </span>
    </div>
  );
}
