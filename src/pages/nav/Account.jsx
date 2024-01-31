import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/useAuth";

export function Account() {
  const { currentUser, logout } = useAuth();
  return (
    <div className="account">
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      {currentUser ? (
        <>
          <span>{currentUser.displayName}</span>
          <span
            onClick={() => logout()}
            className="material-icons-outlined"
            title="Logout"
          >
            logout
          </span>
        </>
      ) : (
        <>
          <Link to={"/signup"}>Signup</Link>
          <Link to={"/login"}>Login</Link>
        </>
      )}
    </div>
  );
}
