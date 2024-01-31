import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LoginImg from "../../assets/images/login.svg";
import { AccountInfo } from "../../components/AccountInfo";
import { AuthImg } from "../../components/AuthImg";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import Layout from "../../components/Layout";
import { useAuth } from "../../contexts/useAuth";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { login } = useAuth();
  async function handleClick(e) {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null);
      await login(email, password);
      setLoading(false);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError("Failed to login");
      setLoading(false);
    }
  }
  return (
    <Layout>
      <h1>Login to your account</h1>
      <div className="column">
        <AuthImg alt="Login Image" src={LoginImg} />
        <form className="login form" onSubmit={handleClick}>
          <Input
            icon="alternate_email"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon="lock"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}

          <Button type="submit" disabled={loading}>
            Submit now
          </Button>
          <AccountInfo>
            Don't have an account? <NavLink to="/signup">Signup</NavLink>
            instead.
          </AccountInfo>
        </form>
      </div>
    </Layout>
  );
}
