import "./Navbar.css";

function Navbar() {
  return (
    <div className="NavbarWrapper">
      <div className="NavWrapperContents">
        <div className="logo"></div>
        <div className="search_div">
          <input
            className="movieSearchIcon"
            type="search"
            name=""
            id="searchIcon"
            placeholder="What do you want to watch?"
          />

          <div className="search_icon_wrapper">
            {" "}
            <label htmlFor="searchIcon">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 14L10 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </label>
          </div>
        </div>
        <div className="menu">
          <div className="menuText">
            <div>
              <p>Sign in</p>
            </div>

            <div className="menuIcon"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
