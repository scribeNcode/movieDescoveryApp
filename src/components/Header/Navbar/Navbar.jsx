import "./Navbar.css";
import Logo from "./assets/tv.svg";
import Menu from "./assets/Menu.svg";

function Navbar() {
  return (
    <div className="NavbarWrapper">
      <div className="LogoContainer">
        <img src={Logo} alt="site logo" />
        <p>MovieBox</p>
      </div>
      <div className="MenuContainer">
        <p>Sign Up</p>
      </div>
      {/* 
        <div className="menu">
          <div className="menuText">
            <div>
              <p>Sign in</p>
            </div>

            <div className="menuIcon"></div>
          </div>
        </div> */}
    </div>
  );
}
export default Navbar;
