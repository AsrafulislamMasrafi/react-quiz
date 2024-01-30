import Logo from "../../../assets/images/logo-bg.png";
export default function Nav() {
  return (
    <div> 
      <nav className="nav">
        <ul>
          <li>
            <a href="index.html" className="brand">
              <img src={Logo} alt="Learn with Sumit Logo" />
              <h3>Learn with Sumit</h3>
            </a>
          </li>
        </ul>
        <div className="account">
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <a href="signup.html">Signup</a>
          {/* <span class="material-icons-outlined" title="Logout"> logout </span> */}
        </div>
      </nav>
    </div>
  );
}
