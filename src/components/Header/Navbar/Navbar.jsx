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
      {/* <input type="search" name="" id="" /> */}
      <div className="MenuContainer">
        <p>Sign In</p>
        <div className="signInIcon">
                  <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.599976 1.40001C0.599976 0.73727 1.13723 0.200012 1.79998 0.200012H16.2C16.8627 0.200012 17.4 0.73727 17.4 1.40001C17.4 2.06275 16.8627 2.60001 16.2 2.60001H1.79998C1.13723 2.60001 0.599976 2.06275 0.599976 1.40001Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.599976 8.60001C0.599976 7.93727 1.13723 7.40001 1.79998 7.40001H16.2C16.8627 7.40001 17.4 7.93727 17.4 8.60001C17.4 9.26275 16.8627 9.80001 16.2 9.80001H1.79998C1.13723 9.80001 0.599976 9.26275 0.599976 8.60001Z" fill="white"/>
</svg>
        </div>

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
