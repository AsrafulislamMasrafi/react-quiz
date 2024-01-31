import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo-bg.png";
import { Account } from "./Account";

export default function Nav() {
  return (
    <div>
      <nav className="nav">
        <Brand />
        <Account />
      </nav>
    </div>
  );
}

function Brand() {
  return (
    <ul>
      <li>
        <Link to={"/"} className="brand">
          <img src={Logo} alt="Learn with Sumit Logo" />
          <h3>Learn with Sumit</h3>
        </Link>
      </li>
    </ul>
  );
}
