import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SingUpImg from "../../assets/images/signup.svg";
import { AccountInfo } from "../../components/AccountInfo";
import { AuthImg } from "../../components/AuthImg";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import Layout from "../../components/Layout";
import { useAuth } from "./../../contexts/useAuth";
export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();
  const navigate = useNavigate();
  async function handleClick(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMsg("Password does not match");
      setError(true);
      return;
    }
    try {
      setError(false);
      setErrorMsg(null);
      setLoading(true);
      await signUp(email, password, name);
      setLoading(false);
      navigate("/");
    } catch (err) {
      console.log(err);
      setErrorMsg("Failed to create an account");
      setError(true);
      setLoading(false);
    }
  }
  return (
    <Layout>
      <h1>Create an account</h1>
      <div className="column">
        <AuthImg alt="Login Image" src={SingUpImg} />
        <form className="signup form" onSubmit={handleClick}>
          <Input
            icon="person"
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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

          <Input
            icon="lock_clock"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && <p style={{ color: "red" }}>{errorMsg}</p>}
          <label>
            <input
              type="checkbox"
              style={{ margin: "0 10px 0 0" }}
              value={agreed}
              onChange={(e) => setAgreed(e.target.value)}
            />
            <span>I agree to the Terms & Conditions</span>
          </label>

          <Button type="submit" disabled={loading}>
            Submit now
          </Button>
          <AccountInfo>
            |Have an account? <NavLink to="/login">Login</NavLink> instead.
          </AccountInfo>
        </form>
      </div>
    </Layout>
  );
}
